// ? s1
const server = require('./api/server.js');

//? s2
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));