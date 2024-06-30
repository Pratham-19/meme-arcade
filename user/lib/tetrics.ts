import { Tetrino } from '@/types/Game'

export const TETROMINOES: {
    [key: string]: Tetrino
} = {
    I: {
        shape: [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ],
        color: '#FFB802',
    },
    J: {
        shape: [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0],
        ],
        color: '#FD4D17',
    },
    L: {
        shape: [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1],
        ],
        color: '#13F237',
    },
    O: {
        shape: [
            [1, 1],
            [1, 1],
        ],

        color: '#A36BFF',
    },
    S: {
        shape: [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0],
        ],
        color: '#0C92FF',
    },
    T: {
        shape: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0],
        ],

        color: '#50F7FF',
    },
    Z: {
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0],
        ],
        color: '#FF56AB',
    },
}

export const getRandomTetrics = (): Tetrino => {
    const tetrics = Object.keys(TETROMINOES)
    const randomTetrics = tetrics[Math.floor(Math.random() * (tetrics.length - 1))]
    return TETROMINOES[randomTetrics]
}

export const rotate = <T>(piece: T[][]): T[][] => {
    const newPiece = piece.map((_, index) => piece.map((column) => column[index]))
    return newPiece.map((row) => row.reverse())
}
