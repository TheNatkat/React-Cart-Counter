import { useState } from "react";
import "./App.css";
import AllItems from "./AllItems";
import Header from "./header";
import MidButton from "./MidButton";

export default function App() {
  const [elements, setElements] = useState([
    { count: 0, id: 0 },
    { count: 0, id: 1 },
    { count: 0, id: 2 },
    { count: 0, id: 3 },
  ]);

  return (
    <>
      <div className="outter-box">
        <Header elements={elements} />
        <MidButton elements={elements} setElements={setElements}/>
        <AllItems elements={elements} setElements={setElements} />
      </div>
    </>
  );
}
