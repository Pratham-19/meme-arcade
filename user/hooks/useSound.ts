import { useCallback, useState } from 'react'

export const useSound = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    const initAudio = useCallback(() => {
        setIsPlaying((prev) => !prev)
    }, [])

    return { isPlaying, setIsPlaying, initAudio }
}
