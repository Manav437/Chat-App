export const generateMessage = (username, text) => {
    return {
        username: username,
        text: text,
        createdAt: new Date().getTime()
    }
}

export const generateLocationMessage = (username, url) => {
    return {
        username: username,
        url: url,
        createdAt: new Date().getTime()
    }
}

// export default generateMessage