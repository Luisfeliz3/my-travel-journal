import Card from './components/Card'
import Header from './components/Header'
import './App.css';
import cardData from "./data"

function App() {

  const cards = cardData.map(item => 
    <Card
    key={item.id}
    item={item}
    
    />)
  return (
    <div className="App">
   
     <Header/>
    
    
      <div className="">
                {cards}
</div>
    </div> 
   
  );
}

export default App;
