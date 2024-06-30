import { motion } from "framer-motion";
import {
  ArrowBigDown,
  ArrowBigLeft,
  ArrowBigRight,
  ArrowBigUp,
  Rotate3dIcon,
} from "lucide-react";

import { useInterval } from "@/hooks";
import { Action } from "@/lib/actions";
import { playerController } from "@/lib/controls";
import { IBoard, IPlayer } from "@/types/Game";

const buttonPattern = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

const Controller = ({
  setGameOver,
  player,
  setPlayer,
  board,
}: {
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  player: IPlayer;
  setPlayer: (player: IPlayer) => void;
  board: IBoard;
}) => {
  const handleRotate = () => {
    playerController({
      action: Action.ROTATE,
      board,
      player,
      setGameOver,
      setPlayer,
    });
  };

  useInterval(() => {
    playerController({
      action: Action.DOWN,
      board,
      player,
      setPlayer,
      setGameOver,
    });
  }, 1000);

  const handleArrowClick = (rowIndex: number, cellIndex: number) => {
    let action;
    if (rowIndex === 0 && cellIndex === 1) {
      action = Action.UP;
    } else if (rowIndex === 1 && cellIndex === 0) {
      action = Action.LEFT;
    } else if (rowIndex === 1 && cellIndex === 2) {
      action = Action.RIGHT;
    } else if (rowIndex === 2 && cellIndex === 1) {
      action = Action.DOWN;
    }
    if (action) {
      playerController({
        action,
        board,
        player,
        setPlayer,
        setGameOver,
      });
    }
  };
  const handleKeyDown = (key: string) => {
    let action;
    if (key === "ArrowUp") {
      action = Action.UP;
    } else if (key === "ArrowLeft") {
      action = Action.LEFT;
    } else if (key === "ArrowRight") {
      action = Action.RIGHT;
    } else if (key === "ArrowDown") {
      action = Action.DOWN;
    } else if (key.toLowerCase() === "r") {
      action = Action.ROTATE;
    }
    if (action) {
      playerController({
        action,
        board,
        player,
        setPlayer,
        setGameOver,
      });
    }
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <input
        className="absolute top-[-100em]"
        type="text"
        onKeyDown={(code) => {
          handleKeyDown(code.key);
        }}
        autoFocus
      />
      <section className="grid grid-cols-3 gap-1.5 ">
        {buttonPattern.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <motion.button
              key={`${rowIndex}-${cellIndex}`}
              className={`flex size-9 items-center justify-center rounded-md text-xl font-bold
              ${
                cell
                  ? "cursor-pointer border-2 border-black bg-[#FF440C]"
                  : "bg-transparent"
              } `}
              onClick={() => {
                handleArrowClick(rowIndex, cellIndex);
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {cell ? getArrowIcon(rowIndex, cellIndex) : ""}
            </motion.button>
          ))
        )}
      </section>
      <section>
        <motion.button
          className="flex size-16 cursor-pointer items-center justify-center rounded-full border-2 border-black bg-[#FF440C] text-center font-bold text-black"
          onClick={handleRotate}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Rotate3dIcon size={24} />
        </motion.button>
      </section>
    </div>
  );
};

export default Controller;

const getArrowIcon = (rowIndex: number, cellIndex: number) => {
  if (rowIndex === 0 && cellIndex === 1) {
    return <ArrowBigUp size={24} />;
  } else if (rowIndex === 1 && cellIndex === 0) {
    return <ArrowBigLeft size={24} />;
  } else if (rowIndex === 1 && cellIndex === 2) {
    return <ArrowBigRight size={24} />;
  } else if (rowIndex === 2 && cellIndex === 1) {
    return <ArrowBigDown size={24} />;
  }

  return "";
};
