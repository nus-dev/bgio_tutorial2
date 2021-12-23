import { Client } from 'boardgame.io/react';
import TicTacToe from './tictactoe';
import { SocketIO } from 'boardgame.io/multiplayer'
import pylos from './pylos';

const GameClient = Client({
    ...pylos,
    multiplayer: SocketIO({ server: 'localhost:8000' }),
});

const App = () => (
    <div>
        <GameClient playerID="0" />
        <GameClient playerID="1" />
    </div>
);

export default App;