import React, { useState, memo } from 'react';
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

const EmojiButton = memo(({ emoji, handleEmojiSelect, btnclassname }) => (
  <li key={emoji.name}>
    <button
      className={btnclassname}
      onClick={(e) => {
        handleEmojiSelect(emoji.name);
        e.stopPropagation();
      }}
    >
      <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
    </button>
  </li>
));

let btnclassname = 'button';
let stat='';
let bgclassname = 'bg';
function App() {
  const greeting = "HALLO :D";
  const [isclick, setisclick] = useState(false);
  const [emojiName, setEmojiName] = useState("");

  if (isclick) {
    btnclassname += ' button--active';
    stat="button active";
  } else {
    bgclassname += ' bg--active';
    stat=("background active");
  }

  const handleEmojiSelect = (emojiname) => {
    setEmojiName(emojiname);
    setisclick(true);
    };

  return (
    <div className={bgclassname} onClick={() => setisclick(false)}>

    <div className='container'>
      <h1 id={greeting}>brazy</h1>
      <p>{"javascript is not demure"}</p>
        <ul>
          {emojis.map(emoji => (
            <EmojiButton
              key={emoji.name}
              emoji={emoji}
              handleEmojiSelect={handleEmojiSelect}
              btnclassname={btnclassname}
            />
          ))}
        </ul>
      <h1>{emojiName}</h1>
      <h1>{stat}</h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>

    </div>
          </div>
  );
}

export default App;
