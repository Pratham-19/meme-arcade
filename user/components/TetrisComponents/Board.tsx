import { IBoard, IGameStats, IPlayer } from '@/types/Game'

import GameStats from './GameStats'
import Preview from './Preview'

const Board = ({ board, gameStats, player }: { board: IBoard; gameStats: IGameStats; player: IPlayer }) => {
    const boardStyles = {
        gridTemplateRows: `repeat(${board.size.rows}, 12px)`,
        gridTemplateColumns: `repeat(${board.size.cols}, 12px)`,
    }
    return (
        <div className="flex w-full justify-center">
            <div className="relative grid w-fit border-2 border-black bg-black/30 shadow-xl" style={boardStyles}>
                {board.rows.map((row, y) =>
                    row.map((cell, x) => (
                        <div
                            style={{
                                backgroundColor: cell.color ? cell.color : 'transparent',
                            }}
                            // className={cell.color ? 'tetrino outline-[0.5px] outline outline-white/20' : 'ghost'}
                            className={cell.color ? 'tetrino' : 'ghost'}
                            key={x + y}
                        />
                    )),
                )}
                <section className="absolute -right-3 top-0  flex translate-x-full flex-col justify-between space-y-2.5 ">
                    <Preview tetrominoes={player.tetrominoes} />
                    <GameStats gameStats={gameStats} />
                </section>
            </div>
        </div>
    )
}

export default Board
