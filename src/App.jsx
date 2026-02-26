import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const byFilter = (movies, query) => {
  if (query) {
    return movies.filter(
      m =>
        m.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        m.description.toLowerCase().includes(query.trim().toLowerCase()),
    );
  }

  return movies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const newMoviesList = byFilter(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={newMoviesList} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
