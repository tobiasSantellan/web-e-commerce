import { toast } from "sonner";
import { useShoppingCart } from "use-shopping-cart";

const AddToCartBtn = ({
  btnStyles,
  text,
  icon,
  id,
  name,
  currency,
  description,
  images,
  price,
}) => {
  const { addItem } = useShoppingCart();

  const bike = {
    id: id,
    name: name,
    description: description,
    images: images,
    price: price,
  };

  return (
    <button
      className={`${btnStyles}`}
      onClick={() => {
        addItem(bike);
        toast(`${name} has been added to the cart`);
      }}
    >
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCartBtn;
