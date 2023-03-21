import KitchenItem from "./KitchenItem";
import { Container, CardGroup } from "react-bootstrap";

const KitchenItemList = (props) => {
  console.log(props.userKitchenItems);
  const kitchenItemList = props.userKitchenItems.map((kitchenItem) => {
    return (
      <KitchenItem
        key={kitchenItem.id}
        id={kitchenItem.id}
        name={kitchenItem.name}
        quantity={kitchenItem.quantity}
        onDelete={props.onDelete}
      />
    );
  });

  return (
    <Container className="my-3">
      <h3 className="my-3">My Kitchen:</h3>
      <CardGroup>
        <>{kitchenItemList}</>
      </CardGroup>
    </Container>
  );
};

export default KitchenItemList;
