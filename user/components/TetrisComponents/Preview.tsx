import React from 'react'

import { Tetrino } from '@/types/Game'

type PreviewProps = {
    tetrominoes: Tetrino[]
}

const Previews = ({ tetrominoes }: PreviewProps) => {
    const previewTetrominoes = tetrominoes.map((tetromino, index) => tetrominoes[tetrominoes.length - index - 1])
    return (
        <div className="flex flex-col justify-start space-y-2">
            {previewTetrominoes.map((tetromino: Tetrino, index: number) => (
                <div className="flex size-14 flex-col items-center justify-center rounded-xl bg-black/20" key={index}>
                    {tetromino.shape.map((row: number[], rowIndex: number) => (
                        <div key={rowIndex} className="grid w-fit grid-cols-3">
                            {row.map((cell: number, cellIndex: number) => (
                                <div
                                    key={cellIndex}
                                    className={cell ? `tetrino` : ''}
                                    style={{
                                        backgroundColor: cell ? tetromino.color : 'transparent',
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default React.memo(Previews)
