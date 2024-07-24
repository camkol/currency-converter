import { useEffect, useState } from "react";
import "./App.css";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

function App() {
  const [conFrom, setConFrom] = useState("USD");
  const [conTo, setConTo] = useState("USD");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function handleFrom(e) {
    setConFrom(e);
  }

  function handleTo(e) {
    setConTo(e);
  }

  useEffect(
    function () {
      async function fetchConvert() {
        try {
          const response = await fetch(
            `https://api.frankfurter.app/latest?amount=${input}&from=${conFrom}&to=${conTo}`
          );

          const data = await response.json();

          console.log(data);
        } catch (err) {
          console.log(err.message);
        }
      }

      fetchConvert();
    },
    [input]
  );

  return (
    <div>
      <Input input={input} setInput={setInput} />
      <Selection onConvert={handleFrom} />
      <Selection onConvert={handleTo} />
      <Output />
    </div>
  );
}

export default App;

function Input({ input, setInput }) {
  return <input type="text" onChange={(e) => setInput(e.target.value)} />;
}

function Selection({ onConvert }) {
  const [currency, setCurrency] = useState("USD");

  function handleCurrency(cur) {
    setCurrency(cur);
    onConvert(cur);
    console.log(cur);
  }
  return (
    <select value={currency} onChange={(e) => handleCurrency(e.target.value)}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}

function Output() {
  return <p>OUTPUT</p>;
}
