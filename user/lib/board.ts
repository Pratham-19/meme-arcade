import { IBoard, IPlayer } from '@/types/Game'

import { defaultCell } from './cell'

export const buildBoard = ({ rows, cols }: { rows: number; cols: number }) => {
    const builtRows = Array.from({ length: rows }, () => Array.from({ length: cols }, () => ({ ...defaultCell })))

    return {
        rows: builtRows,
        size: { rows, cols },
    }
}

// const findDropPosition = ({ board, position, shape }) => {
//     let max = board.size.rows - position.row + 1
//     let row = 0

//     for (let i = 0; i < max; i++) {
//         const delta = { row: i, column: 0 }
//         const result = movePlayer({ delta, position, shape, board })
//         const { collided } = result

//         if (collided) {
//             break
//         }

//         row = position.row + i
//     }

//     return { ...position, row }
// }

// export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
//     const { tetromino, position } = player

//     // Copy and clear spaces used by pieces that
//     // hadn't collided and occupied spaces permanently
//     let rows = board.rows.map((row) => row.map((cell) => (cell.occupied ? cell : { ...defaultCell })))

//     // Drop position
//     const dropPosition = findDropPosition({
//         board,
//         position,
//         shape: tetromino.shape,
//     })

//     // Place ghost
//     const className = `${tetromino.className} ${player.isFastDropping ? '' : 'ghost'}`
//     rows = transferToBoard({
//         className,
//         isOccupied: player.isFastDropping,
//         position: dropPosition,
//         rows,
//         shape: tetromino.shape,
//     })

//     // Place the piece.
//     // If it collided, mark the board cells as collided
//     if (!player.isFastDropping) {
//         rows = transferToBoard({
//             className: tetromino.className,
//             isOccupied: player.collided,
//             position,
//             rows,
//             shape: tetromino.shape,
//         })
//     }

//     // Check for cleared lines
//     const blankRow = rows[0].map((_) => ({ ...defaultCell }))
//     let linesCleared = 0
//     rows = rows.reduce((acc, row) => {
//         if (row.every((column) => column.occupied)) {
//             linesCleared++
//             acc.unshift([...blankRow])
//         } else {
//             acc.push(row)
//         }

//         return acc
//     }, [])

//     if (linesCleared > 0) {
//         addLinesCleared(linesCleared)
//     }

//     // If we collided, reset the player!
//     if (player.collided || player.isFastDropping) {
//         resetPlayer()
//     }

//     // Return the next board
//     return {
//         rows,
//         size: { ...board.size },
//     }
// }

export const transferToBoard = ({
    color,
    isOccupied,
    position,
    rows,
    shape,
}: {
    color: string
    isOccupied: boolean
    position: { row: number; column: number }
    rows: any
    shape: number[][]
}) => {
    shape.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell) {
                const occupied = isOccupied
                const _y = y + position.row
                const _x = x + position.column
                rows[_y][_x] = { occupied, color }
            }
        })
    })

    return rows
}

export const nextBoard = ({
    board,
    player,
    resetPlayer,
    addLinesCleared,
}: {
    board: IBoard
    player: IPlayer
    resetPlayer: () => void
    addLinesCleared?: any
}): IBoard => {
    const { tetromino, position } = player

    let rows = board.rows.map((row) => row.map((cell) => (cell.occupied ? cell : { ...defaultCell })))

    // // Drop position
    // const dropPosition = findDropPosition({
    //     board,
    //     position,
    //     shape: tetromino.shape,
    // })

    // // Place ghost
    // const className = `${tetromino.className} ${player.isFastDropping ? '' : 'ghost'}`
    // rows = transferToBoard({
    //     className,
    //     isOccupied: player.isFastDropping,
    //     position: dropPosition,
    //     rows,
    //     shape: tetromino.shape,
    // })

    // Place the piece.
    // If it collided, mark the board cells as collided
    // if (!player.isFastDropping) {
    rows = transferToBoard({
        color: tetromino.color,
        isOccupied: player.collided,
        position,
        rows,
        shape: tetromino.shape,
    })
    // }

    const blankRow = rows[0].map((_) => ({ ...defaultCell }))
    let linesCleared = 0
    rows = rows.reduce<{ occupied: boolean; color: string }[][]>((acc, row) => {
        if (row.every((column) => column.occupied)) {
            linesCleared++
            acc.unshift([...blankRow])
        } else {
            acc.push(row)
        }
        return acc
    }, [])

    if (linesCleared > 0) {
        addLinesCleared(linesCleared)
    }

    if (player.collided || player.isFastDropping) {
        resetPlayer()
    }
    return {
        rows,
        size: { ...board.size },
    }
}

export const hasCollision = ({
    board,
    position,
    shape,
}: {
    board: IBoard
    position: { row: number; column: number }
    shape: number[][]
}) => {
    for (let y = 0; y < shape.length; y++) {
        const row = y + position.row

        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x]) {
                const column = x + position.column

                if (board.rows[row] && board.rows[row][column] && board.rows[row][column].occupied) {
                    return true
                }
            }
        }
    }

    return false
}

export const isWithinBoard = ({
    board,
    position,
    shape,
}: {
    board: IBoard
    position: { row: number; column: number }
    shape: number[][]
}): boolean => {
    for (let y = 0; y < shape.length; y++) {
        const row = y + position.row

        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x]) {
                const column = x + position.column
                const isValidPosition = board.rows[row] && board.rows[row][column]

                if (!isValidPosition) return false
            }
        }
    }

    return true
}
