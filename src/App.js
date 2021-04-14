import logo from "./logo.svg";
import ColorSelect from "./ColorPicker/ColorSelect";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ColorSelect
        onSetColor={(option) => {
          console.log(option);
        }}
      />
    </div>
  );
}

export default App;
