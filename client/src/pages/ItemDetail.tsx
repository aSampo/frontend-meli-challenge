import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { itemId } = useParams();

  return <div>ItemDetail of {itemId}</div>;
};

export default ItemDetail;
