'use strict';

const Hapi = require( 'hapi' );
const FS = require( 'fs' );

const server = new Hapi.Server();
server.connection( { port: 3000, host: 'localhost' } );

server.register( require( 'inert' ), ( err )=>{
  if ( err ) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: function ( request, reply ) {
      reply.file( './03-sync.html' );
    }
  });
  server.route({
    method: 'GET',
    path: '/03-{filename}',
    handler: function ( request, reply ) {
      reply.file( './03-' + request.params.filename );
    }
  });
  server.route({
    method: 'GET',
    path: '/node_modules/{filename*}',
    handler: function ( request, reply ) {
      reply.file( './node_modules/' + request.params.filename );
    }
  });
  server.route({
    method: 'GET',
    path: '/sync',
    handler: function ( request, reply ) {
      const myMessages = [
        { user: 'Elias', message: 'Hey hows it going' },
        { user: 'Mud', message: 'Good, you?' },
        { user: 'Elias', message: 'Good amigo!' },
        { user: 'Elias', message: 'I love chatting!' },
        { user: 'Mud', message: 'Yes, it is the best' },
        { user: 'Elias', message: 'It is, in fact, the best' }
      ];
      reply( myMessages );
    }
  });
});

server.start( ( err )=>{
  if ( err ) {
    throw err;
  }

  console.log( `Server running at: ${server.info.uri}` );
});
