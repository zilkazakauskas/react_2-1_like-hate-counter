import './App.css';
import Card from "./components/ItemCard";
import CardHook from "./components/ItemCardHook";

function App() {
  return (
    <div className="row mx-2">
      <Card />
      <CardHook />
    </div>
  );
}

export default App;