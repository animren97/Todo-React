import "./App.css";
import List from "./components/List";
import Nav from "./components/Nav";

function App() {
  const products = [
    { id: 1, name: "Walk 30 min" },
    { id: 2, name: "Wash laundry" },
  ];
  return (
    <div className="App">
      <Nav />
      <List data={products} />
    </div>
  );
}

export default App;
