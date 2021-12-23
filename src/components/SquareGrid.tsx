import { ReactNode } from "react";

export function SquareGrid<T>(props: { length: number, values: Array<T>, onClickCell: (idx: number) => void}): JSX.Element {
    const {length, values, onClickCell} = props;

    const cellStyle = {
        border: '1px solid #555',
        width: '50px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center' as const,
    };

    const tds = Array(length).fill(null);
    const trs = Array(length).fill(null);

    return (
        <div>
            <table id="board">
                <tbody>
                    {trs.map((_, row) => {
                        return <tr key={row}>{
                            tds.map((__, col) => {
                                return <td style={cellStyle} key={col} onClick={() => onClickCell(row * length + col)}>
                                    {values[row * length + col]}
                                </td>
                            })
                        }</tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}