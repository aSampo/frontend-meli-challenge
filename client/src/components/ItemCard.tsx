import { Link } from 'react-router-dom';
import { Item } from '../models/Item';

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <Link to={`/items/${item.id}`} key={item.id} className="flex gap-4 border-b p-4 w-full">
      <img src={item.picture} alt={item.title} className="w-20 h-20 xl:w-32 xl:h-32 object-contain" />
      <div>
        <h2 className="xl:text-2xl text-lg font-bold">
          {Number(item.price.amount).toLocaleString('es-AR', {
            style: 'currency',
            currency: item.price.currency
          })}
        </h2>
        <p className="text-base xl:text-lg">{item.title}</p>
      </div>
      <span className="ml-auto text-center text-xs xl:text-sm text-gray-600 bg-meli-grey h-fit p-1 rounded capitalize">
        {item.city.toLowerCase()}
      </span>
    </Link>
  );
};

export default ItemCard;
