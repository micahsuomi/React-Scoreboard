import React from 'react';
import './App.css';
import Header from './Header';
import UserList from './UserList';
import Footer from './Footer';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
