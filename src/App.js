  import React, { useState } from 'react';
  import './App.css';


  const emojis = [
    {
      emoji: '😀',
      name: "test grinning face"
    },
    {
      emoji: '🎉',
      name: "party popper"
    },
    {
      emoji: '💃',
      name: "woman dancing"
    }
  ];

  function App() {
    const greeting = "greeting";
    const [emojiName, setEmojiName]= useState("");
    const handleEmojiSelect = (emojinamae) => {
      setEmojiName(emojinamae);
    };
    return(
      <div className="container">
        <h1 id={greeting}>brazy</h1>
        <p>{"javascript is not demure"}</p>
        <ul>
          {
            emojis.map(emoji => (
              <li key={emoji.name}>
                <button
                  onClick= {()=>handleEmojiSelect(emoji.name)}
                >
                  <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
                </button>
              </li>
            ))
          }
        </ul>
        <h1>{emojiName}</h1>
      </div>
    )
  }

  export default App;