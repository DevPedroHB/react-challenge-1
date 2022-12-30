import { MouseEvent, useState } from "react";
import { Container, Dot, Options } from "../styles/index-styles";

type DotProps = {
  clientX: number;
  clientY: number;
};

export default function Home() {
  const [dots, setDots] = useState<DotProps[]>([]);
  const [dotsUndone, setDotsUndone] = useState<DotProps[]>([]);

  function handleAddDot(e: MouseEvent<HTMLDivElement>) {
    const newDot = {
      clientX: e.clientX,
      clientY: e.clientY,
    };

    setDots([...dots, newDot]);
  }

  function handleUndo(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();

    if (dots.length === 0) return;

    setDotsUndone([...dotsUndone, dots[dots.length - 1]]);

    setDots([...dots].slice(0, -1));
  }

  function handleRedo(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();

    if (dotsUndone.length === 0) return;

    setDots([...dots, dotsUndone[dotsUndone.length - 1]]);

    setDotsUndone([...dotsUndone].slice(0, -1));
  }

  return (
    <Container onClick={handleAddDot}>
      <Options>
        <button onClick={handleUndo}>Desfazer</button>
        <button onClick={handleRedo}>Refazer</button>
      </Options>
      {dots.map((dot, i) => (
        <Dot key={i} position={dot} />
      ))}
    </Container>
  );
}
