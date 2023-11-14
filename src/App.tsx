
import './App.css'

import React, { useState } from 'react';
import init from 'assembler-by-wasm';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const wasm = import('assembler-by-wasm');
  wasm.then((wasm) => {
    console.log("init wasm");
    console.log(wasm);
    init();
  });

  return (
    <div>
      {}
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />

      {}
      <div style={{ marginTop: '10px' }}>
        <strong>入力されたテキスト:</strong> {inputText}
      </div>
    </div>
  );
};

export default App;
