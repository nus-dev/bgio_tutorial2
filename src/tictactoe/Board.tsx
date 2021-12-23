import { BoardProps } from 'boardgame.io/dist/types/packages/react';
import { SquareGrid } from '../components/SquareGrid';
import { TicTacToeG } from './types';

export const TicTacToeBoard: React.ComponentType<BoardProps<TicTacToeG>> = (props) => {
    const onClick = (id: number) => {
        props.moves.clickCell(id);
    }

    return (
        <div>
            <SquareGrid length={3} values={props.G.cells} onClickCell={(idx) => onClick(idx)} />
            <Winner {...props} />
        </div>
    );
}

const Winner = (props: BoardProps<TicTacToeG>) => {
    return (<>
        {props.ctx?.gameover && (
            props.ctx.gameover.winner !== undefined ? (
                <div id="winner">Winner: {props.ctx.gameover.winner}</div>
            ) : (
                <div id="winner">Draw!</div>
            )
        )}
    </>)
}