const io = require('socket.io-client');

var socket = io("http://app.enclaves.io:80", { transports: ['websocket'] });

socket.on('disconnect', () => {
  console.log('socket disconnected');
});

socket.on('connect_error', (err) => {
  console.log("socket connection error: " + err);
});

// Token Data (all tokens)
socket.on('tokens', (data) => {
  console.log('tokens: ' + new Date());
  console.log(JSON.stringify(data, null, 2));
});

// User Orders
socket.on('user_orders_SOW', (data) => {
  console.log('user_orders_SOW: ' + new Date());
  console.log(JSON.stringify(data, null, 2));
});

socket.on('user_orders', (data) => {
  console.log('user_orders: ' + new Date());
  console.log(JSON.stringify(data, null, 2));
});

// User Trades
socket.on('user_trades_SOW', (data) => {
  console.log('user_trades_SOW: ' + new Date());
  console.log(JSON.stringify(data, null, 2));
});

socket.on('user_trades', (data) => {
  console.log('user_trades_SOW: ' + new Date());
  console.log(JSON.stringify(data, null, 2));
});

// Token Orders
socket.on('token_orders_SOW', (data) => {
  console.log('token_orders_SOW: ' + new Date());
  console.log(JSON.stringify(data, null, 2));
});

socket.on('token_orders', (data) => {
  console.log('token_orders: ' + new Date());
  console.log(JSON.stringify(data, null, 2));
});

// Token Trades
socket.on('token_trades_SOW', (data) => {
  console.log('token_trades_SOW: ' + new Date());
  console.log(JSON.stringify(data, null, 2));
});

socket.on('token_trades', (data) => {
  console.log('token_trades: ' + new Date());
  console.log(JSON.stringify(data, null, 2));
});

socket.on('connect', () => {
  console.log('socket connected');
  socket.emit("getTokens");
  socket.emit("subscribeToken", {addr: '0xb6ed7644c69416d67b522e20bc294a9a9b405b31'});
  socket.emit("subscribeUser", {addr: '0xf8536ca7a25cbf70df754fa310079ada4c6114c2'});
});
