import React from 'react'
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
<PersonCard firstname = {"Doe"} lastname = {"Jane"} age = {45} hairColor = {"black"}></PersonCard>
<PersonCard firstname = {"Smith"} lastname ={"John"} age = {88} hairColor = {"brown"}></PersonCard>
<PersonCard firstname = {"Fillmore"} lastname ={"Millard"} age = {50} hairColor = {"brown"}></PersonCard>
<PersonCard firstname = {"Smith"} lastname ={"Maria"} age = {62} hairColor = {"brown"}></PersonCard>
    </div>
  );
}

export default App;
