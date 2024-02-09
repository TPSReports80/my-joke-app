import { Link } from "react-router-dom";

interface MainHeaderProps {
  handleClick: () => void;
}

const MainHeader = ({ handleClick }: MainHeaderProps) => {
  return (
    <header>
      <button className="btn-secondary" onClick={handleClick}>
        Get a New Random Joke
      </button>
      <Link
        onClick={handleClick}
        to="https://mwks-joke-service.azurewebsites.net/swagger/index.html"
        target="_blank"
      >
        View Api Docs
      </Link>
    </header>
  );
};

export default MainHeader;
