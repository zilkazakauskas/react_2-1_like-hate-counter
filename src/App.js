import { render } from '@testing-library/react';
import './App.css';
import Card from "./components/ItemCard";

function App() {
  return (
    <div className="row mx-2">
      <Card />
      <Card />
    </div>
  );
}

export default App;