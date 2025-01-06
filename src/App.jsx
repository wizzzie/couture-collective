import { useSelector } from "react-redux";
import "./App.css";
import StageCounter from "./components/StageCounter";
import StageOne from "./components/StageOne";
import StageTwo from "./components/StageTwo";
import StageThreee from "./components/StageThreee";
import StageFour from "./components/StageFour";
import StageFive from "./components/StageFive";
import StageSix from "./components/StageSix";

function App() {
  const stage = useSelector((state) => state.stage.stage);
  return (
    <div className="container mx-auto px-3 md:px-0 min-h-screen flex-col w-screen flex items-center justify-center">
      <h2 className="text-center mt-[50px] play text-2xl md:text-5xl">
        Join Couture Collective: Where Elegance Meets Opportunity—Your Journey
        to the Spotlight Begins Here
      </h2>
      <StageCounter />
      {stage === 1 && <StageOne />}
      {stage === 2 && <StageTwo />}
      {stage === 3 && <StageThreee />}
      {stage === 4 && <StageFour />}
      {stage === 5 && <StageFive />}
      {stage === 6 && <StageSix />}
    </div>
  );
}

export default App;
