import { Button } from "./tetst/test";
import { Counter } from "./counter/counter.jsx";
import { ELapp } from "./dataEl/dataEl.jsx";

function App() {
  return (
    <div>
      <Button />
      <Counter step={1} />
      <ELapp />
    </div>
  );
}

export default App;
