module.exports = {
  apps: [{
      name: "AceBase IPC Server",
      script: "./server-ipc.js"
  }, {
      name: "AceBase db master",
      script: "./server-db-master.js"
  }, {
      name: "AceBase db work",
      script: "./server-db-work.js",
      instances: "6",        // Uses all CPUs minus 2
      exec_mode: "cluster"    // Enables PM2 load balancing
  }]
}