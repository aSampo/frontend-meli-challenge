import React from 'react';

interface BreadcrumbProps {
  categories: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ categories }) => {
  return (
    <>
      <nav className="pb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 flex-wrap">
          {categories.map((category, index) => {
            const separator =
              index !== 0 ? (
                <svg
                  data-testid={`separator-${category}`}
                  className="w-2 h-2 text-gray-400 mr-1 md:mr-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
              ) : null;

            const categoryLink = (
              <a href={`/category/${category}`} className="inline-flex items-center text-sm font-medium text-meli-blue hover:text-meli-dark-blue">
                {category}
              </a>
            );

            return (
              <li className="inline-flex items-center" key={category}>
                {separator}
                {categoryLink}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
