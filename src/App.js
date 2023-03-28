import { useDispatch, useSelector } from "react-redux";
import { decNumber, incNumber } from "./actions";
import "./App.css";

function App() {
  const myState = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={() => dispatch(decNumber())}>Dec</button>
      <h3>{myState}</h3>
      <button onClick={() => dispatch(incNumber())}>Inc</button>
    </div>
  );
}

export default App;
