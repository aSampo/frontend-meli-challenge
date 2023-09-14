import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import searchIcon from '../assets/search.svg';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchValue.trim().length > 0) {
      navigate('/items');
      setSearchParams({ search: searchValue });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center items-center">
      <div className="relative w-full flex justify-center items-center">
        <input
          placeholder="Nunca dejes de buscar"
          type="text"
          className="text-base focus:outline outline-meli-blue w-full rounded p-2 border border-gray-300"
          maxLength={120}
          value={searchValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="absolute top-2 right-1 h-6 w-8 flex items-center justify-center border-l border-gray-300">
          <img src={searchIcon} alt="Buscar" className="w-4" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
