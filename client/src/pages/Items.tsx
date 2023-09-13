import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchItemsBySearch } from '../api';
import { Item } from '../models/Item';
import Breadcrumb from '../components/Breadcrumb';
import Loading from '../components/Loading';

const Items = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQuery) {
          setLoading(true);
          const data = await fetchItemsBySearch(searchQuery);
          setItems(data.items);
          setCategories(data.categories);
          console.log('categories', data.categories);
        }
      } catch (error) {
        // Puedes manejar el error aquí si es necesario.
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <Breadcrumb categories={categories} />
      <article className="bg-white rounded-md">
        {items.map((item) => (
          <a href={`/items/${item.id}`} key={item.id} className="flex gap-4 border-b p-4 w-full">
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
            <span className="ml-auto text-center text-xs xl:text-sm text-gray-600 bg-meli-grey h-fit p-1 rounded-md capitalize">
              {item.city.toLowerCase()}
            </span>
          </a>
        ))}
      </article>
    </section>
  );
};

export default Items;
