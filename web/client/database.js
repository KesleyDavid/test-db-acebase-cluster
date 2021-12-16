const ACEBASE = new AceBaseClient({ 
  host: 'localhost', 
  port: 5757, 
  dbname: 'mydb', 
  https: false 
});

ACEBASE.ready(() => {
    console.log('Connected successfully');
});

ACEBASE.auth.signIn('admin', '75sdDSFg37w5')
.then(result => {
    console.log(`Signed in as ${result.user.username}, got access token ${result.accessToken}`);
})