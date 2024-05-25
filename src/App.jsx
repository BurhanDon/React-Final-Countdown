import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Normal" targetTime={5} />
        <TimerChallenge title="Hard" targetTime={10} />
        <TimerChallenge title="Pros Only" targetTime={15} />
      </div>
      <p id="app-p">
        Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/burhan-siraj/">
          Burhan Uddin
        </a>
      </p>
    </>
  );
}

export default App;
