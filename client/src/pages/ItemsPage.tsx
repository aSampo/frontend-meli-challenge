import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchItemsBySearch } from '../api';
import { Item } from '../models/Item';
import Breadcrumb from '../components/Breadcrumb';
import Loading from '../components/Loading';
import useLoading from '../hooks/useLoading';
import ErrorPage from '../components/ErrorPage';

const Items = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>();
  const { loading, stopLoading, startLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQuery) {
          setError(null);
          startLoading();
          const data = await fetchItemsBySearch(searchQuery);
          setItems(data.items);
          setCategories(data.categories);
        }
      } catch (e) {
        const error = e as Error;
        setError(error);
      } finally {
        stopLoading();
      }
    };

    fetchData();
  }, [searchQuery]);

  if (error) return <ErrorPage customMessage={error.message} />;

  if (loading) return <Loading />;

  return (
    <section>
      <Breadcrumb categories={categories} />
      <article className="bg-white rounded">
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
            <span className="ml-auto text-center text-xs xl:text-sm text-gray-600 bg-meli-grey h-fit p-1 rounded capitalize">
              {item.city.toLowerCase()}
            </span>
          </a>
        ))}
      </article>
    </section>
  );
};

export default Items;
