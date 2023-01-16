import './App.css';
import routes from './Components/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <div className="App">
     <BrowserRouter>
      <routes/>
     </BrowserRouter>
    </div>
  );
}

export default App;
  