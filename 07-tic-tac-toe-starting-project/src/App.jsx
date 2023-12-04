import Player from "./components/Player";
import { PlayerData } from "./components/playerNamesymData";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {PlayerData.map((item, index) => (
            <Player key={index} {...item} />
          ))}
        </ol>
      </div>
    </main>
  );
}

export default App;
