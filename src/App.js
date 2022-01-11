
import { useEffect, useState } from 'react';
import axios from "axios";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NavBar from './components/nav';
import Main from './components/main';
import FilmPage from './components/filmPage';
import About from './components/about';
import Contact from './components/contact';
import Catalog from './components/catalog';


function App() {
  const [list, setList] = useState([]);
  const [isLoading, setIsloading] = useState(true);
 

  useEffect(() => {
    async function getList () {
      try {
           axios.get('https://beatkino-server.herokuapp.com/api/films').then(
          (response) => {
            
            setList(response);
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
        <NavBar />
        {isLoading ? (
          <h1 className="loader">bK</h1>
        ):(              
          <>
          <Switch>
            <Route exact path="/">               
              <Main list={list}  />                 
            </Route >
            <Route path="/film/:id">
              <FilmPage list={list} /> 
            </Route>
            <Route path="/catalog">
              <Catalog list={list}/>
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
        <div className="footer">
          <p>&copy; {new Date().getFullYear()}</p> 
        </div>  
      </div>
     </Router>
  );
}

export default App;
