import { JokeBody } from "../libs/types";
import { useState } from "react";

interface JokeProps {
  joke: JokeBody;
}

const Joke = ({ joke }: JokeProps) => {
  const [showPunchLine, setShowPunchLine] = useState(false);

  return (
    <>
      <p className="joke-text joke-opener">{joke.joke}</p>
      <button onClick={() => setShowPunchLine(true)} className="btn-primary">
        {showPunchLine ? "Hide Punchline" : "Show Punchline"}
      </button>
      {showPunchLine && (
        <p className="joke-text joke-closer">{joke.punchLine}</p>
      )}
    </>
  );
};

export default Joke;
