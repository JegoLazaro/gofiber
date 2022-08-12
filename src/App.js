import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/NavbarComponent';
import FeaturesTab from './Components/FeaturesTabComponent';

function App() {
  const paddingTop = {paddingTop: 10}

  return (
    <div className="App">
      <NavbarComponent />
      <p style={paddingTop}>To get things done conveniently, check out our Quick Links!</p>
      <FeaturesTab />
    </div>
  );
}

export default App;
