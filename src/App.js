import './App.css';
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/NavbarComponent';
import FeaturesTab from './Components/FeaturesTabComponent';
import ViewPlansComponent from './Components/ViewPlansComponent';
import FaqComp from './Components/Faqs';
import FooterComponent from './Components/Footer';

function App() {
  const paddingTop = {paddingTop: 10}

  return (
    <div className="App">
      <NavbarComponent />
      <p style={paddingTop}>To get things done conveniently, check out our Quick Links!</p>
      <FeaturesTab />
      <ViewPlansComponent/>
      <FaqComp />
      <FooterComponent/>
    </div>
  );
}

export default App;
