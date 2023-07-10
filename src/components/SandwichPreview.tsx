import Bread from "./Bread";
import Filling from "./Filling";

interface SandwichPreviewProps {
  topBread?: string;
  fillings: string[];
  bottomBread?: string;
}

function SandwichPreview({
  topBread,
  fillings,
  bottomBread,
}: SandwichPreviewProps): JSX.Element {
  return (
    <div className="sandwich-preview">
      <h2>Sandwich preview</h2>
      {topBread && <Bread position={"top"} type={topBread} />}
      {fillings.map((filling, idx) => (
        <Filling key={idx} type={filling} />
      ))}
      {bottomBread && <Bread position={"bottom"} type={bottomBread} />}
    </div>
  );
}

export default SandwichPreview;
