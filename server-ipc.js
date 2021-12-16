const { AceBaseIPCServer } = require('acebase-ipc-server');

const server = new AceBaseIPCServer({ 
  port: 9163 
});

server.start();