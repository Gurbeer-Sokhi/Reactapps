import logo from "./logo.svg";
import "./App.css";
import ListDis from "./Components/ListDis";

function App() {
  return (
    <div className="App">
      <ListDis
        props={["gurbeer", "sherry", "rajbeer", "vicky", "sara"]}
      ></ListDis>
    </div>
  );
}

export default App;
