import { useState, useCallback, useEffect } from 'react'

import { IGameStats } from '@/types/Game'

const defaultDropTime = 1000
const minimumDropTime = 100
const speedIncrement = 30

export const useDropTime = ({ gameStats }: { gameStats: IGameStats }) => {
    const [dropTime, setDropTime] = useState<number | null>(defaultDropTime)
    const [previousDropTime, setPreviousDropTime] = useState<number | null>()

    const resumeDropTime = useCallback(() => {
        if (!previousDropTime) {
            return
        }
        setDropTime(previousDropTime)
        setPreviousDropTime(null)
    }, [previousDropTime])

    const pauseDropTime = useCallback(() => {
        if (dropTime) {
            setPreviousDropTime(dropTime)
        }
        setDropTime(null)
    }, [dropTime, setPreviousDropTime])

    useEffect(() => {
        const speed = speedIncrement * (gameStats.level - 1)
        const newDropTime = Math.max(defaultDropTime - speed, minimumDropTime)

        setDropTime(newDropTime)
    }, [gameStats.level, setDropTime])

    return [dropTime, pauseDropTime, resumeDropTime]
}
