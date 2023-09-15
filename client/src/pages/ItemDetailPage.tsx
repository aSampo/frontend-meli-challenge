import { useParams } from 'react-router-dom';
import { fetchItemDetail } from '../api';
import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Loading from '../components/Loading';
import { ItemDetail } from '../models/ItemDetail';
import useLoading from '../hooks/useLoading';
import ErrorPage from './ErrorPage';
import Head from '../components/Head';

const ItemDetailPage = () => {
  const { itemId } = useParams();
  const { loading, stopLoading, startLoading } = useLoading();
  const [detail, setDetail] = useState<ItemDetail>();
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (itemId) {
          startLoading();
          const data = await fetchItemDetail(itemId);
          setDetail(data.item);
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
  }, [itemId]);

  if (error) return <ErrorPage customMessage={error.message} />;

  if (loading) return <Loading />;

  return (
    <section className="bg-white p-4 rounded">
      <Head
        title={detail?.title || 'Detalle de Producto'}
        description={detail?.description}
        keywords={[detail?.title || 'Producto', ...categories]}
      />
      <Breadcrumb categories={categories} />
      <div className="flex flex-col lg:flex-row gap-4">
        <img src={detail?.picture} alt={detail?.title} className="self-center w-96 h-96 lg:w-[700px] lg:h-[600px] object-contain" />
        <section className="p-4 flex flex-col gap-2">
          <span className="text-sm">
            {detail?.condition} - {detail?.sold_quantity} vendidos
          </span>
          <h1 className="text-2xl font-bold">{detail?.title}</h1>
          <h2 className="text-3xl lg:text-4xl font-bold">
            {Number(detail?.price.amount).toLocaleString('es-AR', {
              style: 'currency',
              currency: detail?.price.currency || 'ARS'
            })}
          </h2>
          <button className="bg-meli-blue rounded text-white h-10 lg:w-full w-36">Comprar</button>
        </section>
      </div>
      <section className="p-4 space-y-2">
        <h2 className="text-3xl">Descripcion de producto</h2>
        <p className="text-gray-600">{detail?.description}</p>
      </section>
    </section>
  );
};

export default ItemDetailPage;
