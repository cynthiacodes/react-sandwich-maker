import { useState } from "react";
import IngredientAdder from "./IngredientAdder";
import SandwichPreview from "./SandwichPreview";

function SandwichMaker(): JSX.Element {
  // better to use single object state
  // but multiple useState calls fine for now
  const [topLayer, setTopLayer] = useState<string>();
  const [fillings, setFillings] = useState<string[]>([]);
  const [bottomLayer, setBottomLayer] = useState<string>();

  const handleReset = () => {
    setTopLayer(undefined);
    setFillings([]);
    setBottomLayer(undefined);
  };

  return (
    <>
      <SandwichPreview
        topBread={topLayer}
        fillings={fillings}
        bottomBread={bottomLayer}
      />

      <IngredientAdder
        topBread={topLayer}
        handlePickTop={(breadType: string) => setTopLayer(breadType)}
        handleAddFilling={(fillingType: string) => {
          setFillings([...fillings, fillingType]);
          // better:
          // setFillings(prevFillings => [...prevFillings, fillingType])
        }}
        handlePickBottom={(breadType: string) => setBottomLayer(breadType)}
      />

      <button onClick={handleReset}>Bin sandwich</button>
    </>
  );
}

export default SandwichMaker;
