'use client'
import { VolumeX, Volume2 } from 'lucide-react'
import { useEffect, useRef } from 'react'

import { useSound } from '@/store/player'

export default function GameSound() {
    const { isPlaying, startPlaying, stopPlaying } = useSound()

    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if (!audioRef.current) return
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying, audioRef])

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={() => {
                    isPlaying ? stopPlaying() : startPlaying()
                }}>
                {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </button>
            <audio src="/audio/bg-audio.mp3" loop ref={audioRef} />
        </div>
    )
}
