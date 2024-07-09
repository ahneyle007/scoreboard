import Leftboard from './Leftboard.jsx'
import Rightboard from './Rightboard.jsx';

function App() {
  

  return (
    <div className="bg-[#080818] flex justify-evenly items-center h-screen">
      
        <div> <Leftboard/> </div>

        
        <div> <Rightboard/> </div>
      
    </div>
  )
}

export default App;
