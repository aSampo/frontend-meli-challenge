import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchItemsBySearch } from '../api';
import { Item } from '../models/Item';
import Breadcrumb from '../components/Breadcrumb';
import Loading from '../components/Loading';
import useLoading from '../hooks/useLoading';
import ErrorPage from './ErrorPage';
import ItemCard from '../components/ItemCard';
import Head from '../components/Head';

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
      <Head title={'Resultado de busqueda'} />
      <Breadcrumb categories={categories} />
      <ul className="bg-white rounded">
        {items.map((item) => (
          <li key={item.id}>
            <ItemCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Items;
