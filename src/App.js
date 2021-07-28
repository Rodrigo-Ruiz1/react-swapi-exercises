import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterProfile from './components/CharacterProfile';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const characters = await _fetchCharacters();
      setCharacters(characters)
    })();
  }, [setCharacters]);

  const _fetchCharacters = async () => {
    const url = 'https://swapi.dev/api/people/';
    const response = await fetch(url).then(response => response.json());
    console.log('Response from API: ', response.results);
    return response.results;
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {characters.length ? (
            <CharacterList characters={characters}/>
          ) : (
            <h1>Loading....</h1>
          )}
        </Route>
        <Route path='/character/:name'>
            <CharacterProfile characters={characters}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
