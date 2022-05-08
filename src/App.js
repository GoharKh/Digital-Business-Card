import './App.css';
import Nav from './Nav';
import Card from './Card';
import data from './data';

function App() {
  const cards = data.map(card => <Card 
  card={card}
  key={card.id}
  />)
  return (
    <div className="App">
      <Nav />
      <div className='cards'>
      {cards}
      </div>
    </div>
  );
}

export default App;
