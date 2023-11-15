
import './App.css'

import React, { useState, useEffect } from 'react';
import init, { assemble } from 'assembler-by-wasm';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');

  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      if (process.env.NODE_ENV === 'development') {
        await init('node_modules/assembler-by-wasm/assembler_by_wasm_bg.wasm');
      } else {
        await init();
      }
      setDisplayedText(assemble(inputText, "16"));
    };

    fetchData();
  }, [inputText]);

  const renderMultilineText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        {}
        <textarea
          value={inputText}
          rows={10}
          cols={30}
          style={{ resize: 'none', overflow: 'scroll', marginRight: '10px' }}
          onChange={(e) => setInputText(e.target.value)}
        />

        {}
        <div style={{ marginTop: '10px' }}>
          <strong>アセンブル結果<br/></strong> {renderMultilineText(displayedText)}
        </div>
      </div>
    </div>
  );
};

export default App;
