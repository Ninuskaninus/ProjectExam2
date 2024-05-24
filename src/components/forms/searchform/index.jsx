import React, { useState, useContext } from 'react';
import { FormSearch } from '../index.styles';
import Icons from '../../../images';
import { AppContext } from '../../../contexts/provider';

export default function SearchForm() {
  const { handleSearch, clearSearchResults } = useContext(AppContext);
  const [search, setSearch] = useState('');

  const onSearch = async (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
      await handleSearch(search);
    } else {
      clearSearchResults();
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (search.trim() !== '') {
        await handleSearch(search);
      } else {
        clearSearchResults();
      }
    }
  };

  return (
    <FormSearch onSubmit={onSearch}>
      <button type="submit">
        <Icons.Search />
      </button>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search for venue"
      />
    </FormSearch>
  );
}
