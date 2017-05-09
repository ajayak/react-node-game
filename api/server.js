const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../package');

import {
  createNewGame,
  shuffleDecks
} from './game';
import {
  addScore,
  getAllHighScores,
  resetScores
} from './score';

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000,
  routes: { cors: true }
});

const options = {
  info: {
    'title': 'Card Game API Documentation',
    'version': Pack.version,
  }
};

// Add the route
server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => reply('Nothing to see here'),
});

server.route({
  method: 'GET',
  path: '/new-game',
  handler: (request, reply) => {
    createNewGame()
      .then(values => reply(values).code(200))
      .catch(err => reply(err).code(500));
  },
  config: {
    description: 'Start new game',
    notes: ['Starts a new game with two decks'],
    tags: ['api']
  }
});

server.route({
  method: 'GET',
  path: '/shuffle',
  handler: (request, reply) => {
    const deckIds = [request.query.deck1, request.query.deck2];
    shuffleDecks(deckIds)
      .then(values => reply(values).code(200))
      .catch(err => reply(err).code(500));
  },
  config: {
    description: 'Shuffle decks',
    notes: ['Shuffles the decks by deckId passed in query string'],
    tags: ['api']
  }
});

server.route({
  method: 'GET',
  path: '/high-scores',
  handler: (request, reply) => reply(getAllHighScores()).code(200),
  config: {
    description: 'High scores',
    notes: ['Gets top 5 high scores'],
    tags: ['api']
  }
});

server.route({
  method: 'POST',
  path: '/end-game/{turns}',
  handler: (request, reply) => {
    const turns = request.params.turns;
    addScore(turns);
    reply(getAllHighScores()).code(200);
  },
  config: {
    description: 'End game',
    notes: ['Ends the game and update score'],
    tags: ['api']
  }
});

server.route({
  method: 'GET',
  path: '/reset-scores',
  handler: (request, reply) => {
    resetScores();
    reply(getAllHighScores()).code(200);
  },
  config: {
    description: 'Reset Score',
    notes: ['Resets all the scores'],
    tags: ['api']
  }
});

server.register([
  Inert,
  Vision,
  {
    'register': HapiSwagger,
    'options': options
  }
], (err) => {
  server.start((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Server running at:', server.info.uri);
    }
  });
});

export default server;