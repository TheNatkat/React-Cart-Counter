import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function AllItems({ elements, setElements }) {
  const plus = <FontAwesomeIcon icon={faPlus} />;
  const minus = <FontAwesomeIcon icon={faMinus} />;
  const del = <FontAwesomeIcon icon={faTrashCan} shake />;

  function handleIncrese(id) {
    const newarr = elements.map((item) => {
      if (item.id === id) {
        item.count = item.count + 1;
      }
      return item;
    });
    setElements(newarr);
  }

  function handleDecrease(id) {
    const newarr = elements.map((item) => {
      if (item.id === id) {
        if (item.count > 0) item.count = item.count - 1;
      }
      return item;
    });
    setElements(newarr);
  }

  function handleDelete(id) {
    const newarr = elements.filter((item) => item.id !== id);
    setElements(newarr);
  }

  return (
    <>
      {elements.map((item) => {
        return (
          <div className="items-box" id={item.id} key={item.id}>
            <h3>{item.count == 0 ? "zero" : item.count}</h3>
            <button onClick={() => handleIncrese(item.id)}>{plus}</button>
            <button onClick={() => handleDecrease(item.id)}>{minus}</button>
            <button onClick={() => handleDelete(item.id)}>{del} </button>
          </div>
        );
      })}
    </>
  );
}
