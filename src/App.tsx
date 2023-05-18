import styled, { keyframes } from "styled-components";
import ReactDOM from "react-dom/client"
import Circle from "./Circle";



function App() {
  return (
    <div>
      <Circle bgColor="teal" borderColor="tomato"></Circle>
      <Circle bgColor="tomato"></Circle>
    </div>
  );
}

export default App;
