# Chatly ✦

> *"Talk is cheap. Privacy isn't."*  
> A refined space for transient conversations. No logs, no noise, just the present moment.

![Chatly Aesthetic](public/images/favicon.png)

## Overview

Chatly is an ephemeral, ultra-low latency real-time communication platform. It strips away complicated onboarding, persistent data tracking, and bulky interfaces to provide a minimalist, premium "Lounge" experience. You enter a room, you chat, and when everyone leaves—the history vanishes.

## Key Features

- **Ephemeral by Design**: Conversations exist only in the server's volatile memory. When a session ends, the history is wiped completely.
- **Engineered for Sub-100ms Latency**: Built on top of robust WebSocket infrastructure ensuring instantaneous bi-directional communication.
- **Premium Minimalist Interface**: A carefully crafted dark-mode aesthetic utilizing glassmorphism, precise typography (Inter), and meticulously engineered micro-animations powered by Tailwind CSS.
- **Live Location Sharing**: Instantly share your exact geographical location with the participants in your Lounge without relying on third-party mapping plugins.
- **Lounge Protection**: An integrated bad-words profanity filter actively scrubs the environment to maintain a refined space.
- **Room-based Architecture**: Support for concurrent isolation across multiple virtual "Lounges" (Rooms).

## Tech Stack

**Backend System**
- **Node.js**: Asynchronous event-driven runtime.
- **Express**: Fast, unopinionated, minimalist web framework.
- **Socket.io**: Real-time bidirectional event-based communication.
- **Bad-words**: NPM module for string sanitization.

**Frontend Interface**
- **HTML5 & CSS3**: Semantic markup and layout structure.
- **Tailwind CSS**: Utility-first styling framework deployed for responsive, premium design systems.
- **Mustache.js**: Logic-less templating for dynamic chat bubble rendering.
- **Moment.js**: Sophisticated date & time manipulation for instant timestamps.

## Installation & Setup

1. **Clone the repository** (or download the source code):
   ```bash
   git clone https://github.com/Manav437/chat-app.git
   cd chat-app
   ```

2. **Install core dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

4. **Access the Lounge**:
   Open your preferred modern browser and navigate to:
   [http://localhost:3000](http://localhost:3000)

## Deployment

The platform is inherently ready for Platform-as-a-Service (PaaS) deployments like Heroku, Render, or Railway. Built-in port binding natively supports dynamic `process.env.PORT` mappings:
```js
const port = process.env.PORT || 3000;
server.listen(port);
```

## Credits & License

Engineered with ❤️ by **Chatly Laboratory**.  
This project is open-source and free to be cloned, customized, and experienced.
