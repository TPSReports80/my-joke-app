import { JokeBody } from "../libs/types";
import Joke from "./Joke";

interface MainBodyProps {
  isLoading: boolean;
  jokeBody: JokeBody | null;
}

const MainBody = ({ isLoading, jokeBody }: MainBodyProps) => {
  return (
    <div className="joke-container">
      {isLoading && <p className="loading-text">Loading your joke...</p>}
      {jokeBody && <Joke joke={jokeBody} />}
    </div>
  );
};

export default MainBody;
