interface FillingProps {
  type: string;
}

function Filling({ type }: FillingProps): JSX.Element {
  return <p>~ filling ({type}) ~</p>;
}

export default Filling;
