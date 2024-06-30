import React from 'react'

import { IGameStats } from '@/types/Game'

type GameStatsProps = {
    gameStats: IGameStats
}

const GameStats = ({ gameStats }: GameStatsProps) => {
    const { level, points, linesCompleted, linesPerLevel } = gameStats
    const linesToLevel = linesPerLevel - linesCompleted

    const stats = [
        {
            name: 'Level',
            value: level,
        },
        {
            name: 'Lines left',
            value: linesToLevel,
        },
        {
            name: 'Points',
            value: points,
        },
    ]

    return (
        <ul className="flex flex-col justify-end space-y-1">
            {stats.map(({ name, value }) => (
                <li key={name}>
                    <h2 className="text-xs font-semibold text-black">{name}</h2>
                    <span className="text-xl font-bold">{value}</span>
                </li>
            ))}
        </ul>
    )
}

export default React.memo(GameStats)
