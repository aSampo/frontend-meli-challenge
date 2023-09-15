import React from 'react';
import { Helmet } from 'react-helmet-async';
import logo from '../assets/mercado-libre.svg';
import defaultKeywords from '../utils/defaultKeywords';

interface HeadProps {
  title: string;
  description?: string;
  keywords?: string[];
}

const Head: React.FC<HeadProps> = ({
  title,
  description = 'Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.',
  keywords = defaultKeywords
}) => {
  return (
    <Helmet>
      <title>{title} - Mercado Libre</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Andres Sampo" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />
      <meta property="og:url" content={'https://www.mercadolibre.com.ar/'} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default Head;
