import './App.css';
import Calendar from './components/Calendar/Calendar';

const now = Date.now();
console.log()

function App() {
  return (
    <Calendar date={now}/>
  );
}

export default App;
