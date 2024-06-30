'use client'
import { useState, useCallback } from 'react'

import { useGameStats } from '@/store/gameStats'
import { usePlayer, useSound } from '@/store/player'

export const useReset = () => {
    const [gameOver, setGameOver] = useState(true)
    const { resetGameStats } = useGameStats()
    const { resetPlayer } = usePlayer()
    const { startPlaying, stopPlaying, isPlaying } = useSound()

    const resetGame = useCallback(() => {
        setGameOver(false)
        resetGameStats()
        resetPlayer()
        isPlaying ? stopPlaying() : startPlaying()
    }, [])

    return { gameOver, setGameOver, resetGame }
}
