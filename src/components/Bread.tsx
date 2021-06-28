interface BreadProps {
  position: "top" | "bottom";
  type: string;
}

function Bread({ position, type }: BreadProps): JSX.Element {
  return (
    <div>
      {position === "top" && <p>~~~~~~~~~~~~~~~~</p>}
      <p>~ bread ({type}) ~</p>
      {position === "bottom" && <p>~~~~~~~~~~~~~~~~</p>}
    </div>
  );
}

export default Bread;
