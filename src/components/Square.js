import React from "react";

export default function Square() {
  const [value, setvalue] = React.useState(null);
  return (
    <button className="square" onClick={() => setvalue("🏹")}>
      {value}
    </button>
  );
}
