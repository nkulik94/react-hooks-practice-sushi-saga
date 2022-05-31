import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [offset, changeOffset] = useState(1)
  const [sushis, updateSushis] = useState([])
  const [plates, updatePlates] = useState([])
  const [moneyLeft, chargeMoney] = useState(100)

  useEffect(() => {
    fetch(`${API}?_limit=4&_page=${offset}`)
      .then(r => r.json())
      .then(data => updateSushis(data))
  }, [offset])

  function handleEaten(sushi, price) {
    if (moneyLeft >= price) {
      updatePlates([...plates, sushi])
      chargeMoney(moneyLeft - price)
    }
  }

  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis} 
        offset={offset} 
        onAddSushi={changeOffset}
        onEaten={handleEaten}
        plates={plates}
      />
      <Table money={moneyLeft} plates={plates} />
    </div>
  );
}

export default App;
