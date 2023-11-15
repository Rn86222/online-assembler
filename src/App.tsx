
import './App.css'

import React, { useState, useEffect } from 'react';
import init, { assemble } from 'assembler-by-wasm';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');

  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    // テキストが変更されるたびに非同期関数を呼び出す
    const fetchData = async () => {
      // await init('node_modules/assembler-by-wasm/assembler_by_wasm_bg.wasm');
      await init();
      // 非同期処理が完了した後にテキストを表示する状態を更新
      setDisplayedText(assemble(inputText, "16"));
    };

    fetchData();
  }, [inputText]); // inputTextが変更された時だけuseEffectを実行


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
