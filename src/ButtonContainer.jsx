import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function ButtonContainer({ children }) {
  return <div className="button-container">{children}</div>;
}

export function MinusButton({ setCount, locked }) {
  return (
    <button
      disabled={locked}
      onClick={(e) => {
        setCount((c) => (c > 0 ? c - 1 : 0));
        // blur the button to prevent focus
        // so when space bar is pressed, only one event is triggered
        e.currentTarget.blur();
      }}
      className="count-btn"
    >
      <MinusIcon className="count-btn-icon" />
    </button>
  );
}

export function PlusButton({ setCount, locked }) {
  return (
    <button
      disabled={locked}
      onClick={(e) => {
        setCount((c) => (c < 5 ? c + 1 : 5));
        e.currentTarget.blur();
      }}
      className="count-btn"
    >
      <PlusIcon className="count-btn-icon" />
    </button>
  );
}
