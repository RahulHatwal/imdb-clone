// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import { Landing } from "./components/Landing/Landing";
import { moviesImages } from "./components/Images/CarouselCover";

function App() {
  return (
    <div className="imdb-clone">
      <Header />
      <Landing moviesImages={moviesImages} />
    </div>
  );
}

export default App;
