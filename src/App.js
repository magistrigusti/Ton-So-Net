import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';



const App = (props) => {

  return (
      <div className = "app-wrapper">
        <Header />
        <Nav />
        
        <Routes className = 'content'>
          <Route path="/profile" 
                element={ <Profile store={props.store} />} 
          />
          <Route path="/dialogs" 
                element={ <DialogsContainer store={props.store} /> }/>
                                  
          <Route path="/news" 
                element={<News store={props.store} />} />

          <Route path="/users" element={<UsersContainer />} />
        </Routes>
        
        <Footer />
      </div>
  );
}




export default App;
