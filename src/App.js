import { useState } from "react";
import "./App.css";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

function App() {
  const [conFrom, setConFrom] = useState("");
  const [conTo, setConTo] = useState("");

  function handleFrom(e) {
    setConFrom(e);
  }

  function handleTo(e) {
    setConTo(e);
  }

  return (
    <div>
      <Input />
      <Selection onConvert={handleFrom} />
      <Selection onConvert={handleTo} />
      <Output />
    </div>
  );
}

export default App;

function Input() {
  return <input type="text" />;
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
