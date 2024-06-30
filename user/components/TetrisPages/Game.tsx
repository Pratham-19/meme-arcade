"use client";

import { Board, Controller } from "@/components/TetrisComponents";
import { useBoard } from "@/hooks";
import { useGameStats } from "@/store/gameStats";
import { usePlayer } from "@/store/player";

export default function Game({
  rows,
  cols,
  setGameOver,
}: {
  rows: number;
  cols: number;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { player, setPlayer, resetPlayer } = usePlayer();
  const { gameStats, addLinesCleared } = useGameStats();

  const [board] = useBoard({
    rows,
    cols,
    player,
    resetPlayer,
    addLinesCleared,
  });
  return (
    <div className="flex flex-col justify-center items-center space-y-3 bg-yellow">
      <Board board={board} gameStats={gameStats} player={player} />
      <Controller
        setGameOver={setGameOver}
        player={player}
        setPlayer={setPlayer}
        board={board}
      />
    </div>
  );
}
