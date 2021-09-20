import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Summary from './container/summary';
import Profile from './container/profile';
import Home from './container/home';

function App() {
  const [ data, setData ] = useState({});

  // function for fetching data from kumba api
  async function fetchData () {
    const url = 'https://indapi.kumba.io/webdev/assignment';
    let toReturn;

    try {
      const response = await axios.get(url);
      toReturn = response.data;
      setData(toReturn)
    } catch (ex) {
      // error fetching data
      console.log('something went wrong');
    }
  }

  // fetching the data on mounting
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="App">
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          {
            // making the route unaccessible if the data has not been fetched
            Object.keys(data).length !== 0 ?
            <Route path='/profile'>
              <Profile
                user={ data.user }
              />
            </Route>: null
          }

          {
            // making the route unaccessible if the data has not been fetched
            Object.keys(data).length !== 0 ?
            <Route path='/order'>
              <Summary
                data={ data }
              />
            </Route>: null
          }

          <Route>
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
