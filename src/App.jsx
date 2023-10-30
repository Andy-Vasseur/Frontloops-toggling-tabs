import { useState } from "react"

function App() {

  const [btnSelected, setBtnSelected] = useState(null);

  const handleClick = (buttonId) => {
    setBtnSelected(buttonId);
  };

  return (
    <div className="App">
      <div className="App__content">
        <div className="App__content__inputs">
          <button
            className={btnSelected === 1 ? "selected" : ""}
            onClick={() => handleClick(1)}
          >
            Sort by price
          </button>
          <button
            className={btnSelected === 2 ? "selected" : ""}
            onClick={() => handleClick(2)}
          >
            Sort by name
          </button>
          <button
            className={btnSelected === 3 ? "selected" : ""}
            onClick={() => handleClick(3)}
          >
            Sort by relevance
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
