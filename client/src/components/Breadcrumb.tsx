interface BreadcrumbProps {
  categories: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ categories }) => {
  return (
    <nav className="flex pb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {categories.map((category, index) => (
          <li className="inline-flex items-center" key={category}>
            {index !== 0 ? (
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
            ) : null}
            <a href="#" className="inline-flex items-center text-sm font-medium text-meli-blue hover:text-meli-dark-blue">
              {category}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
