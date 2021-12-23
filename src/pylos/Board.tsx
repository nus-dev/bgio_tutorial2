import { BoardProps } from 'boardgame.io/dist/types/packages/react';
import React from 'react';
import { SquareGrid } from '../components/SquareGrid';
import { PylosG } from './types';

export const PylosBoard: React.ComponentType<BoardProps<PylosG>> = (props) => {
    const onClick = (floor: number, idx: number) => {
        props.moves.clickCell(floor, idx);
    }

    return (
        <div>
            <SquareGrid length={4} values={props.G.bottomCells} onClickCell={(idx) => onClick(0, idx)} />
            <SquareGrid length={3} values={props.G.secondCells} onClickCell={(idx) => onClick(1, idx)} />
            <SquareGrid length={2} values={props.G.thirdCells} onClickCell={(idx) => onClick(2, idx)} />
            <SquareGrid length={1} values={props.G.top} onClickCell={(idx) => onClick(3, idx)} />
            <Winner {...props} />
        </div>
    );
}

const Winner = (props: BoardProps<PylosG>) => {
    return (<>
        {props.ctx.gameover && (
            props.ctx.gameover.winner !== undefined ? (
                <div id="winner">Winner: {props.ctx.gameover.winner}</div>
            ) : (
                <div id="winner">Draw!</div>
            )
        )}
    </>)
}