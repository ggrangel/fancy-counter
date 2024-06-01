import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
  return (
    <button
      onClick={(e) => {
        setCount(0);
        e.currentTarget.blur();
      }}
      className="reset-btn"
    >
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
