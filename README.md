# Server-Client Communication Project

This project consists of a TCP communication server implemented in Node.js using sockets for real-time communication between clients and the server, providing an interactive experience. A simple custom protocol named PTMP (Personalized Message Transfer Protocol) was created. Additionally, the server implements a simple HTTP request handler that responds to GET requests with a standard message.

## Features
### Server

- The server listens for connections on the specified port and all available interfaces.
- Messages sent by a client are distributed to all other connected clients, along with the sender's identification.
- It can handle HTTP GET requests and respond with a standard message.

### Client

- The client connects to the server on the specified port (default is 4000) and localhost.
- It prompts the user to enter a name and sends it to the server.
- After sending the name, the client can send messages that will be broadcasted to other connected clients.

### Custom Protocol (PTMP)

- Implemented to enable message exchange between clients connected to the server.
- Each message sent contains the sender's name and the message itself.

## How to Use

### Server Configuration:

Run `node server.js` to start the server.

### Client Configuration:

Run `node client.js` to start a client.
Enter a name when prompted.
After sending the name, you can start sending messages.

### HTTP Request:

Use a browser or a tool like Postman to send an HTTP GET request to `http://localhost:4000`.

### Shutting Down the Server:

The server can be shut down by pressing Ctrl+C. This will disconnect all clients before closing.
