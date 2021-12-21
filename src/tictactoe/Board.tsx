import React from 'react';

export const TicTacToeBoard = (props: any) => {
    const onClick = (id: any) => {
        props.moves.clickCell(id);
    }

    const cellStyle = {
        border: '1px solid #555',
        width: '50px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center' as const,
    };

    let tbody = [];
    for (let i = 0; i < 3; i++) {
        let cells = [];
        for (let j = 0; j < 3; j++) {
            const id = 3 * i + j;
            cells.push(
                <td style={cellStyle} key={id} onClick={() => onClick(id)}>
                    {props.G.cells[id]}
                </td>
            );
        }
        tbody.push(<tr key={i}>{cells}</tr>);
    }


    return (
        <div>
            <table id="board">
                <tbody>{tbody}</tbody>
            </table>
            <Winner {...props} />
        </div>
    );
}

const Winner = (props: any) => {
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