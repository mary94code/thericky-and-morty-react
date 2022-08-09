import { Route, HashRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import AllLocations from "./Pages/AllLocations";
import CharactersPage from "./Pages/CharactersPage";
import EpisodePage from "./Pages/EpisodePage";
import HomePage from "./Pages/HomePage";
import LocationPage from "./Pages/LocationPage";
import SingleCharacter from "./Pages/SingleCharacter";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/episode/:id" element={<EpisodePage />} />
          <Route path="/character/:id" element={<SingleCharacter />} />
          <Route path="/location/:id" element={<LocationPage /> }/>
          <Route path="/allCharacters" element={<CharactersPage /> }/>
          <Route path="/allLocations" element={<AllLocations />}/>
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
