
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';


function App() {
  
function handleClick(){
  alert ('button clicked');
}

const handleClick2 = () =>{
  alert('button 2 clicked')
} 
const addToFive = (num)=>{
 alert(num + 5)
}

  return (
    <>
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
    <Counter></Counter>
      <h3>React Core Concept 2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => {alert('button 3 clicked')}}>Click Me 3</button>
      {/* Vejailla */}
      <button onClick={() => addToFive(3)}>Click Me 4</button>
    </>
  )
}

export default App
