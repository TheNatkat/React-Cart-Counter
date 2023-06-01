import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Header({ elements }) {
  const cart = <FontAwesomeIcon icon={faShoppingCart} bounce />;

  return (
    <div className="no-of-items">
      <span>{cart}</span>
      <h5>
        {elements.reduce((acc, item) => {
          if (item.count > 0) acc += 1;
          return acc;
        }, 0)}
      </h5>
      <p>Items</p>
    </div>
  );
}
