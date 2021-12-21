import { BoardProps, Client } from 'boardgame.io/react';
import { TicTacToe } from './tictactoe/Game';
import { TicTacToeBoard } from './tictactoe/Board';
import { ctx, G } from './tictactoe/types';

const App = Client<G, BoardProps<G>, ctx>({
    game: TicTacToe,
    board: TicTacToeBoard,
});


export default App;