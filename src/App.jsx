import React from 'react';
import MoviePage from './modules/Movie/MoviePage';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MoviePage />
    </div>
  );
}

export default App;
