import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
<PersonCard name = {"Doe, Jane"} age = {"45"} hairColor = {"black"}></PersonCard>
<PersonCard name = {"Smith, John"} age = {"88"} hairColor = {"brown"}></PersonCard>
<PersonCard name = {"Fillmore, Millard"} age = {"50"} hairColor = {"brown"}></PersonCard>
<PersonCard name = {"Smith, Maria"} age = {"62"} hairColor = {"brown"}></PersonCard>
    </div>
  );
}

export default App;
