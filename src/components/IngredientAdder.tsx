interface IngredientAdderProps {
  topBread?: string;
  handlePickTop(breadType: string): void;
  handleAddFilling(fillingType: string): void;
  handlePickBottom(breadType: string): void;
}

function IngredientAdder({
  handleAddFilling,
  handlePickTop,
  handlePickBottom,
  topBread,
}: IngredientAdderProps): JSX.Element {
  return (
    <>
      <section>
        <h3>Top layer of bread</h3>
        {!topBread && <p>Make sure you pick a top for your sandwich!</p>}
        <button onClick={() => handlePickTop("white")}>White</button>
        <button onClick={() => handlePickTop("brown")}>Brown</button>
      </section>
      <section>
        <h3>Filling</h3>
        <button onClick={() => handleAddFilling("jam")}>Jam</button>
        <button onClick={() => handleAddFilling("lettuce")}>Lettuce</button>
        <button onClick={() => handleAddFilling("cheese")}>Cheese</button>
      </section>
      <section>
        <h3>Bottom layer of bread</h3>
        <button onClick={() => handlePickBottom("white")}>White</button>
        <button onClick={() => handlePickBottom("brown")}>Brown</button>
      </section>
    </>
  );
}

export default IngredientAdder;
