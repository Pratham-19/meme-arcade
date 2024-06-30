import { useState, useEffect } from 'react'

import { buildBoard, nextBoard } from '@/lib/board'
import { IBoard, IPlayer } from '@/types/Game'

export const useBoard = ({
    rows,
    cols,
    player,
    resetPlayer,
    addLinesCleared,
}: {
    rows: number
    cols: number
    player: IPlayer
    resetPlayer: () => void
    addLinesCleared: (lines: number) => void
}) => {
    const [board, setBoard] = useState<IBoard>(buildBoard({ rows, cols }))

    useEffect(() => {
        setBoard((previousBoard) =>
            nextBoard({
                board: previousBoard,
                player,
                resetPlayer,
                addLinesCleared,
            }),
        )
    }, [player, resetPlayer, addLinesCleared])

    return [board]
}
