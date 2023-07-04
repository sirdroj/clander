import logo from './logo.svg';
import './App.css';
import Calander from './components/Calander';

function App() {
  return (
    <div>
      <Calander date={new Date()}/>
    </div>
  );
}

export default App;
