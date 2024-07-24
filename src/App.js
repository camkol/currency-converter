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
        if (!input || !conFrom || !conTo) return;
        try {
          const response = await fetch(
            `https://api.frankfurter.app/latest?amount=${input}&from=${conFrom}&to=${conTo}`
          );

          const data = await response.json();

          console.log(data.rates[conTo]);
          setOutput(data.rates[conTo]);
        } catch (err) {
          console.log(err.message);
        }
      }

      fetchConvert();
    },
    [input, conFrom, conTo]
  );

  return (
    <div>
      <Input input={input} setInput={setInput} />
      <Selection onConvert={handleFrom} />
      <Selection onConvert={handleTo} />
      <Output output={output} />
    </div>
  );
}

export default App;

function Input({ setInput }) {
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

function Output({ output }) {
  return <p>{output}</p>;
}
