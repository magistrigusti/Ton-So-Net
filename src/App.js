import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';


const App = (props) => {
  return (
      <div className = "app-wrapper">
        <Header />
        <Nav />
        
        <Routes className = 'content'>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/news" element={<News />} />
        </Routes>
        
        <Footer />
      </div>
  );
}




export default App;
