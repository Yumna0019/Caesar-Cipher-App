import { useState } from "react";
import "./CaesarCipher.css";

const CaesarCipher = () => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(3);
  const [output, setOutput] = useState("");

  const caesarCipher = (str, shift, encode = true) => {
    return str
      .split("")
      .map((char) => {
        if (char.match(/[a-zA-Z]/)) {
          const base = char === char.toUpperCase() ? 65 : 97;
          return String.fromCharCode(
            ((char.charCodeAt(0) - base + (encode ? shift : -shift) + 26) % 26) + base
          );
        }
        return char;
      })
      .join("");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Caesar Cipher</h2>
        <input
          className="input"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Shift"
          value={shift}
          onChange={(e) => setShift(Number(e.target.value))}
        />
        <div className="button-group">
          <button className="button encode" onClick={() => setOutput(caesarCipher(text, shift, true))}>
            Encode
          </button>
          <button className="button decode" onClick={() => setOutput(caesarCipher(text, shift, false))}>
            Decode
          </button>
        </div>
        {output && (
          <div className="output">
            <strong>Output:</strong> {output}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaesarCipher;
