import { makeStyles } from '@material-ui/core';
import { Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/HomePage";
import React from 'react';
function App() {

  const useStyle = makeStyles(() =>({
    App: {
      backgroundColor:"#14161a",
      color:"white",
      minHeight:"100vh",
    },
  }));
  const classes = useStyle();//object



  return ( 
    <div className={classes.App} >
      <Header />
      <Route path="/" component={HomePage} exact />
      <Route path="/coins/:id" component={CoinPage} />
    </div>
  );
}

export default App;
