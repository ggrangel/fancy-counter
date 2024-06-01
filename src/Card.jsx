import Title from "./Title";
import ButtonContainer from "./ButtonContainer";
import Count from "./Count";
import ResetButton from "./ResetButton";
import { useEffect, useState } from "react";
import { CountButton, PlusButton } from "./ButtonContainer";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Space") {
        setCount((c) => (c < 5 ? c + 1 : 5));
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      // prevents adding multiple event listeners, causing slow performance
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton setCount={setCount} locked={locked} />
        <PlusButton setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
