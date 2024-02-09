import "./App.css";
import MainHeader from "./components/mainHeader";
import { useState } from "react";
import { JokeBody } from "./libs/types";
import MainBody from "./components/MainBody";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [jokeBody, setJokeBody] = useState<JokeBody | null>(null);

  async function handleClick() {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://mwks-joke-service.azurewebsites.net/api/joke/random"
      );
      const data = await res.json();
      // force timeout to show loading state
      setTimeout(() => {
        setJokeBody((prevState) => ({
          ...prevState,
          joke: data.joke,
          punchLine: data.punchLine,
        }));
        setIsLoading(false);
      }, 800);
    } catch (err) {
      setIsLoading(false);
      setShowError(true);
    }
  }

  return (
    <div className="App">
      <MainHeader handleClick={handleClick} />
      <MainBody isLoading={isLoading} jokeBody={jokeBody} />
      {showError && (
        <p className="error-text">There was an error loading your joke.</p>
      )}
    </div>
  );
}

export default App;
