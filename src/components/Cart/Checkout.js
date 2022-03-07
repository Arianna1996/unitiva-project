import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Checkout = () => {
  const dispatch = useDispatch();
  const onStore = () => {
    dispatch({
      type: "GO_TO_STORE",
    });
  };
  return (
    <Card height="fullHeight" alignCenter={true}>
      <h3 className="messageCheckout">
        Thank you!<br></br>Your products will be shipped soon
      </h3>
      <Button onClick={onStore} larger={true}>
        Buy more
      </Button>
    </Card>
  );
};

export default Checkout;
