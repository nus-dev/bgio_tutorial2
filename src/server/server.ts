// src/server.js
import { Server, Origins } from 'boardgame.io/server';
import { Pylos } from '../pylos/Game';
import { TicTacToe } from '../tictactoe/Game';

const server = Server({
    games: [TicTacToe, Pylos],
    origins: [Origins.LOCALHOST],
});

server.run(8000, () => {
    console.log('123')
});