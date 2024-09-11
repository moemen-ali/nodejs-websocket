const WebSocket = require('ws');

// Create WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Send a welcome message to the client
  ws.send('Welcome to the WebSocket server!');

  // Handle incoming messages from the client
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);

    // Echo the received message back to the client
    ws.send(`You said: ${message}`);
  });

  // Handle client disconnects
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
