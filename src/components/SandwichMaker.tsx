import { useState } from "react";
import Bread from "./Bread";
import Filling from "./Filling";

function SandwichMaker(): JSX.Element {
  const [topLayer, setTopLayer] = useState<string>();
  const [filling, setFilling] = useState<string>();
  const [bottomLayer, setBottomLayer] = useState<string>();

  return (
    <>
      <h2>Sandwich preview</h2>
      {topLayer && <Bread position={"top"} type={topLayer} />}
      {filling && <Filling type={filling} />}
      {bottomLayer && <Bread position={"bottom"} type={bottomLayer} />}

      <section>
        <h3>Top layer of bread</h3>
        {!topLayer && <p>Make sure you pick a top for your sandwich!</p>}
        <button onClick={() => setTopLayer("white")}>White</button>
        <button onClick={() => setTopLayer("brown")}>Brown</button>
      </section>
      <section>
        <h3>Filling</h3>
        <button onClick={() => setFilling("jam")}>Jam</button>
        <button onClick={() => setFilling("lettuce")}>Lettuce</button>
      </section>
      <section>
        <h3>Bottom layer of bread</h3>
        <button onClick={() => setBottomLayer("white")}>White</button>
        <button onClick={() => setBottomLayer("brown")}>Brown</button>
      </section>
    </>
  );
}

export default SandwichMaker;
