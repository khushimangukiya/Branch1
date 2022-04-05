import logo from './logo.svg';
import './App.css';
import Employe from './componets/employe';
import Medicine from './componets/medicine';
import MedicinecDestructhering from './componets/MedicinecDestructhering';
import State from './componets/State';
import City from './componets/City';
import StateFun from './componets/StateFun';
import EmployeDes from './componets/EmployDes';





function App() {

  return ( 
    <div>
      <Employe/>
      <EmployeDes/>
      <Medicine/>
      <MedicinecDestructhering/>
      <State/>
      <City/>
      <StateFun/>
    </div>
  );
}

export default App;