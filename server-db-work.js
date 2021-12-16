// Start a database server with worker role
const { AceBaseServer } = require('acebase-server');

const server = new AceBaseServer('mydb', { 
  host: 'localhost', 
  port: 5757, 
  authentication: {
    enabled: true,
    allowUserSignup: false,
    defaultAccessRule: 'auth',
    defaultAdminPassword: '75sdDSFg37w5'
  },
  ipc: { 
    port: 9163, 
    role: 'worker' 
  }
});

// server.ready(() => {
//   process.send('ready'); // Signal pm2 it's running
// });