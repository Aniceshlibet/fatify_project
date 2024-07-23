const fastify = require ('fastify') ({logger : true});
const PORT = 3000



  
  server.get('/',(req,res) => {
  return { "hello":"world"};
  });
  
  
  async function start(){
  await server.listen({ port: 3000});
  
  
  console.log('server listening on http://localhost:3000');
  }
  
  start();
  