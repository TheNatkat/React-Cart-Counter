import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faTrashCan,
  faPlus,
  faMinus,
  faRecycle,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

function Items({ elements, setElements, id}) {
  const [itemCount, setItemCount] = useState(0);

  const plus = <FontAwesomeIcon icon={faPlus} />;
  const minus = <FontAwesomeIcon icon={faMinus} />;
  const del = <FontAwesomeIcon icon={faTrashCan} />;

  function handleItemCounterPlus() {

    setItemCount(itemCount + 1);

  }

  function handleItemCounterMinus() {
    if (itemCount > 0) setItemCount(itemCount - 1);
  }

  function deleteItem(e) {
    setElements((elements) => elements.filter((item) => e.target.id !== item.key)
    );
  }

  return (
    <div className="items-box">
      <h3>{itemCount == 0 ? "zero" : itemCount}</h3>
      <button onClick={handleItemCounterPlus}>{plus}</button>
      <button onClick={handleItemCounterMinus}>{minus}</button>
      <button id={id} onClick={deleteItem}>
        {del}
      </button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [elements, setElements] = useState([]);
  const cart = <FontAwesomeIcon icon={faShoppingCart} />;
  const recycle = <FontAwesomeIcon icon={faRecycle} />;
  const rotate = <FontAwesomeIcon icon={faRotate} />;
  const [reset, setReset] = useState(0);

  useEffect(() => {
    setElements([
      <Items
        key={0}
        id={0}
        elements={elements}
        setElements={setElements}
      />,
      <Items
        key={1}
        id={1}
        elements={elements}
        setElements={setElements}
      />,
      <Items
        key={2}
        id={2}
        elements={elements}
        setElements={setElements}
      />,
      <Items
        key={3}
        id={3}
        elements={elements}
        setElements={setElements}
      />,
    ]);
  }, [reset]);

  function handleRest() {
    setReset(reset + 1);
  }

  return (
    <>
      <div className="outter-box">
        <div className="no-of-items">
          <span>{cart}</span>
          <h5>{count}</h5>
          <p>Items</p>
        </div>
        <div className="reset-box">
          <button>{rotate}</button>
          <button onClick={handleRest}>{recycle}</button>
        </div>
        {elements}
      </div>
    </>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faShoppingCart,
//   faTrashAlt,
//   faPlus,
//   faMinus,
//   faRecycle,
//   faSyncAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import "./App.css";

// function Items({ item, setElements, deleteItem , resetCount }) {
//   const { id, count } = item;
//   const [itemCount, setItemCount] = useState(count);

//   const plus = <FontAwesomeIcon icon={faPlus} />;
//   const minus = <FontAwesomeIcon icon={faMinus} />;
//   const del = <FontAwesomeIcon icon={faTrashAlt} />;

//   function handleItemCounterPlus() {
//     setItemCount(itemCount + 1);
//   }

//   function handleItemCounterMinus() {
//     if (itemCount > 0) {
//       setItemCount(itemCount - 1);
//     }
//   }

//   function resetCount(){
//     setItemCount(id);
//   }

//   function handleDeleteItem() {
//     deleteItem(id);
//   }

//   useEffect(() => {
//     setElements((prevElements) =>
//       prevElements.map((prevItem) =>
//         prevItem.id === id ? { ...prevItem, count: itemCount } : prevItem
//       )
//     );
//   }, [itemCount, id, setElements]);

//   return (
//     <div className="items-box">
//       <h3>{itemCount === 0 ? "zero" : itemCount}</h3>
//       <button onClick={handleItemCounterPlus}>{plus}</button>
//       <button onClick={handleItemCounterMinus}>{minus}</button>
//       <button onClick={handleDeleteItem}>{del}</button>
//     </div>
//   );
// }

// function App() {
//   const [elements, setElements] = useState([
//     { id: 0, count: 0 },
//     { id: 1, count: 0 },
//     { id: 2, count: 0 },
//     { id: 3, count: 0 },
//   ]);

//   const cart = <FontAwesomeIcon icon={faShoppingCart} />;
//   const recycle = <FontAwesomeIcon icon={faRecycle} />;
//   const rotate = <FontAwesomeIcon icon={faSyncAlt} />;

//   function deleteItem(itemId) {
//     setElements((prevElements) =>
//       prevElements.filter((item) => item.id !== itemId)
//     );
//   }

//   return (
//     <div className="outter-box">
//       <div className="no-of-items">
//         <span>{cart}</span>
//         <h5>
//           {elements.reduce(
//             (total, item) => (item.count > 0 ? total + 1 : total),
//             0
//           )}
//         </h5>
//         <p>Items</p>
//       </div>
//       <div className="reset-box">
//         <button>{rotate}</button>
//         <button
//           onClick={() =>
//             setElements([
//               { id: 0, count: 0 },
//               { id: 1, count: 0 },
//               { id: 2, count: 0 },
//               { id: 3, count: 0 },
//             ])
//           }
//         >
//           {recycle}
//         </button>
//       </div>
//       {elements.map((item) => (
//         <Items
//           key={item.id}
//           item={item}
//           setElements={setElements}
//           deleteItem={deleteItem}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;
