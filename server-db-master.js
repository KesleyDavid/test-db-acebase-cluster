// Start a database instance with master role
const { AceBase } = require('acebase');
// const { AceBaseServer } = require('acebase-server');

const db = new AceBase('mydb', { 
  host: 'localhost', 
  storage: { 
    ipc: { 
      port: 9163, 
      role: 'master' 
    } 
  } 
});

db.ready(() => {
    process.send('ready'); // Signal pm2 it's running
});