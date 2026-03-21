const users = [];

//addUser, removeUser, getUser, getUsersInRoom

export const addUser = ({ id, username, room }) => {
    //validate the data
    if (!username || !room) {
        return {
            error: "Username and room are required!",
        };
    }

    //clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //check if the username already exists
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username; //check room & username already exists
    });

    //validate username
    if (existingUser) {
        return {
            error: "Username is already in use!",
        };
    }

    //store user
    const user = { id, username, room };
    users.push(user);
    return { user };
};

export const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id;
    });

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

export const getUser = (id) => {
    const user = users.find((user) => {
        return user.id === id;
    });
    return user;
};

export const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    const usersInRoom = users.filter((user) => {
        return user.room === room;
    });
    return usersInRoom;
};

// addUser({
//     id: 22,
//     username: 'Manav',
//     room: 'Gzb United'
// })

// addUser({
//     id: 45,
//     username: 'danav',
//     room: 'gzb united'
// })

// addUser({
//     id: 12,
//     username: 'gaurav',
//     room: 'epstein island'
// })

// // console.log(users)

// console.log(getUsersInRoom('gzb united'))
// // const removedUser = removeUser(22)
// // console.log(removedUser)
// // console.log(users)
