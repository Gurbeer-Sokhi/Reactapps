import logo from "./logo.svg";
import "./App.css";
import ListDisp from "./Components/ListDisp";

function App() {
  return (
    <div className="App">
      <ListDisp
        props={[
          { id: 1, name: "gurbeer" },
          { id: 2, name: "gurbeer" },
          { id: 3, name: "sherry" },
          { id: 4, name: "rajbeer" },
          { id: 5, name: "darsheel" },
        ]}
      ></ListDisp>
    </div>
  );
}

export default App;
