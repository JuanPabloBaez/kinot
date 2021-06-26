
import { useEffect, useState } from 'react';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NavBar from './components/nav.js';
import Main from './components/main';
import FilmPage from './components/filmPage';
import About from './components/about';
import Contact from './components/contact';

function App() {
  const [list, setList] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    async function getList () {
      try {
           axios.get('http://localhost:4000/list').then(
          (response) => {
            
            setList(response.data);
            
            setIsloading(false);
            
            
            return;
           
          }
        )
      }catch(error){
        console.log('fatal error')
      }
    }
    getList();
    
    

  },[])

  


  return (
    <Router>
      <div className="App">
        
        <NavBar/>
        
        {isLoading ? (

          <h1>Loading</h1>

        ):(
                            
              <>
              <Switch>
                <Route exact path="/">               
                  <Main list={list} />                 
                </Route >
                <Route path="/filmpage/:id">
                  <FilmPage list={list} /> 
                </Route>
                <Route path="/about">
                  <About/>
                </Route>
                <Route path="/contact">
                  <Contact/>
                </Route>
              </Switch>
              </>
               
          
          
          )
        }
      </div>
     </Router>
  );
}

export default App;
