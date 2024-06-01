export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit! Buy <b>pro</b> for {">"}5
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}
