import { useState } from "react";
import "./CaesarCipher.css";

const CaesarCipher = () => {
  const [text, setText] = useState("");
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
        <h2>Caesar Cipher App</h2>
        <input
          className="input"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="button-group">
          <button className="button encode" onClick={() => setOutput(caesarCipher(text, 3, true))}>
            Encode
          </button>
          <button className="button decode" onClick={() => setOutput(caesarCipher(text, 3, false))}>
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
