import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle, faRotate } from "@fortawesome/free-solid-svg-icons";

export default function MidButton( {elements ,setElements}) {
  const recycle = <FontAwesomeIcon icon={faRecycle} spin />;
  const rotate = <FontAwesomeIcon icon={faRotate} spinPulse />;

  function handleAddAll() {
    if (elements.length === 0) {
      setElements([
        { count: 0, id: 0 },
        { count: 0, id: 1 },
        { count: 0, id: 2 },
        { count: 0, id: 3 },
      ]);
    }
  }

  function handleResetValue() {
    const newarr = elements.map((item) => {
      return { count: 0, id: item.id };
    });
    setElements(newarr);
  }

  return (
    <div className="reset-box">
      <button onClick={handleResetValue}> {rotate} </button>
      <button onClick={handleAddAll}> {recycle} </button>
    </div>
  );
}
