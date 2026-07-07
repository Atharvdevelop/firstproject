import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Counter from './components/Counter';
import Login from './components/Login';
import CardDetails from './components/CardDetails';
function App() {
  const [name,setname] = React.useState('Atharv')
  const [message,setmessage] = React.useState('Initial Value')
  const [login,setlogin] = React.useState(true)
  return (
    <>
    
    <Header />
    <Navigation login = {login} />
    <Counter />
    <Login setmessage={setmessage} />
    <p className='text-center text-2xl font-bold mt-4'>{message}</p>

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/'element={<Card/>}/>
      <Route path='/food/:id'element={<CardDetails/>}/>
    </Routes>
   

    <Card />
    <Footer />

    </>
  );
}

export default App;