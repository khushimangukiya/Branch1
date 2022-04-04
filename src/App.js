import logo from './logo.svg';
import './App.css';
import Employe from './componets/employe';
import Medicine from './componets/medicine';
import MedicinecDestructhering from './componets/MedicinecDestructhering';
import State from './componets/State';
import City from './componets/City';





function App() {

  return ( 
    <div>
      <Employe/>
      <Medicine/>
      <State/>
      <MedicinecDestructhering/>
      <City/>
    </div>
  );
}

export default App;