import path, { dirname } from 'path'
import http from 'http'
import express from 'express'
import { Server } from 'socket.io'
import { Filter } from 'bad-words'
import { fileURLToPath } from 'url'
import { generateMessage, generateLocationMessage } from './utils/messages.js'
import { addUser, removeUser, getUser, getUsersInRoom } from './utils/users.js'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

let count = 0

io.on('connection', (socket) => {
    console.log('New websocket connection')


    socket.on('join', ({ username, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, username, room })

        if (error) {
            return callback(error)
        }

        socket.join(user.room)

        socket.emit('message', generateMessage('Admin', 'Welcome!'))                              //send a message to the client
        socket.broadcast.to(user.room).emit('message', generateMessage('Admin', `${user.username} has joined!`))      // send a message to all the clients except the one who is sending the message

        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room)
        })

        callback()
    })

    socket.on('sendMessage', (message, callback) => {                         // send a message from the client to the server
        const user = getUser(socket.id)

        const filter = new Filter()
        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed!')
        }

        io.to(user.room).emit('message', generateMessage(user.username, message))
        callback()
    })

    socket.on('sendLocation', (coords, callback) => {
        const user = getUser(socket.id)
        if (!user) {
            return console.error("User not found!")
        }

        io.to(user.room).emit('locationMessage', generateLocationMessage(user.username, `https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`))
        callback()
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)

        if (user) {
            io.to(user.room).emit('message', generateMessage('Admin', `${user.username} has left!`))
            io.to(user.room).emit('roomData', {
                room: user.room,
                users: getUsersInRoom(user.room)
            })
        }


    })

    // socket.emit('countUpdated', count)
    // socket.on('increement', () => {
    //     count++
    //     // socket.emit('countUpdated', count)           will only emit the update count to one client only
    //     io.emit('countUpdated', count)                  // will emit the update count to all the clients
    // })
})

server.listen(port, () => {
    console.log('port is up on ' + port)
})