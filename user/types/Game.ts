export interface IBoard {
    rows: {
        occupied: boolean
        color: string
    }[][]

    size: {
        rows: number
        cols: number
    }
}

export interface IGameStats {
    level: number
    linesCompleted: number
    linesPerLevel: number
    points: number
}

export interface IPlayer {
    collided: boolean
    isFastDropping: boolean
    position: {
        row: number
        column: number
    }
    tetrominoes: Tetrino[]
    tetromino: Tetrino
}

export interface Tetrino {
    shape: number[][]
    color: string
}

export interface IAction {
    LEFT: string
    RIGHT: string
    DOWN: string
    UP: string
    ROTATE: string
    FASTDROP: string
}
