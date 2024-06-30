import { create } from 'zustand'

import { IGameStats } from '@/types/Game'

interface GameStatsStore {
    gameStats: IGameStats
    setGameStats: (gameStats: IGameStats) => void
    addLinesCleared: (lines: number) => void
    resetGameStats: () => void
}

const buildGameStats = () => ({
    level: 1,
    linesCompleted: 0,
    linesPerLevel: 10,
    points: 0,
})

export const useGameStats = create<GameStatsStore>((set) => ({
    gameStats: buildGameStats(),
    setGameStats: (gameStats: IGameStats) => set({ gameStats }),
    addLinesCleared: (lines) =>
        set((state) => ({
            gameStats: {
                ...state.gameStats,
                points: state.gameStats.points + lines * 10,
                level:
                    state.gameStats.linesCompleted + lines >= state.gameStats.linesPerLevel
                        ? state.gameStats.level + 1
                        : state.gameStats.level,
                linesCompleted: (state.gameStats.linesCompleted + lines) % state.gameStats.linesPerLevel,
            },
        })),

    resetGameStats: () => set({ gameStats: buildGameStats() }),
}))
