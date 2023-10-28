import logo from "./logo.svg";
import "./App.css";
import ListDis from "./Components/ListDis";

function App() {
  return (
    <div className="App">
      <ListDis
        props={[
          { id: 1, name: "gurbeer" },
          { id: 2, name: "gurbeer" },
        ]}
      ></ListDis>
    </div>
  );
}

export default App;
