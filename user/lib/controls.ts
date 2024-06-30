import { IBoard, IPlayer } from '@/types/Game'

import { Action } from './actions'
import { hasCollision, isWithinBoard } from './board'
import { rotate } from './tetrics'

const attemptRotation = ({
    board,
    player,
    setPlayer,
}: {
    board: IBoard
    player: IPlayer
    setPlayer: (player: IPlayer) => void
}) => {
    const shape = rotate(player.tetromino.shape)

    const position = player.position
    const isValidRotation = isWithinBoard({ board, position, shape }) && !hasCollision({ board, position, shape })

    if (isValidRotation) {
        setPlayer({
            ...player,
            tetromino: {
                ...player.tetromino,
                shape,
            },
        })
    } else {
        return false
    }
}

export const movePlayer = ({
    delta,
    position,
    shape,
    board,
}: {
    delta: { row: number; column: number }
    position: { row: number; column: number }
    shape: number[][]
    board: IBoard
}) => {
    const desiredNextPosition = {
        row: position.row + delta.row,
        column: position.column + delta.column,
    }

    const collided = hasCollision({
        board,
        position: desiredNextPosition,
        shape,
    })

    const isOnBoard = isWithinBoard({
        board,
        position: desiredNextPosition,
        shape,
    })

    const preventMove = !isOnBoard || (isOnBoard && collided)
    const nextPosition = preventMove ? position : desiredNextPosition

    const isMovingDown = delta.row > 0
    const isHit = isMovingDown && (collided || !isOnBoard)

    return { collided: isHit, nextPosition }
}

const attemptMovement = ({
    board,
    action,
    player,
    setPlayer,
    setGameOver,
}: {
    board: IBoard
    action: string
    player: IPlayer
    setPlayer: (player: IPlayer) => void
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const delta = { row: 0, column: 0 }
    let isFastDropping = false

    if (action === Action.FASTDROP) {
        isFastDropping = true
    } else if (action === Action.DOWN) {
        delta.row += 1
    } else if (action === Action.LEFT) {
        delta.column -= 1
    } else if (action === Action.RIGHT) {
        delta.column += 1
    }

    const { collided, nextPosition } = movePlayer({
        delta,
        position: player.position,
        shape: player.tetromino.shape,
        board,
    })

    const isGameOver = collided && player.position.row === 0
    if (isGameOver) {
        setGameOver(isGameOver)
    }
    setPlayer({
        ...player,
        collided,
        isFastDropping,
        position: nextPosition,
    })
}

export const playerController = ({
    action,
    board,
    player,
    setPlayer,
    setGameOver,
}: {
    action: string
    board: IBoard
    player: IPlayer
    setPlayer: (player: IPlayer) => void
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    if (!action) return

    if (action === Action.ROTATE) {
        attemptRotation({ board, player, setPlayer })
    } else {
        attemptMovement({ board, player, setPlayer, action, setGameOver })
    }
}
