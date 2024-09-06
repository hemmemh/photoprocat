import AppRouter from "./AppRouter";
import { BrowserRouter} from 'react-router-dom';
import './styles/style.scss'
import { useState,useEffect} from 'react'


import { refreshUser } from "../store2/actions/ProductActions";
import { useAppDispatch } from "../hooks/reduxHooks";


function App() {
  const [loader, setloader] = useState(false)
  const dispatch = useAppDispatch()
  useEffect(() => {
    setloader(false)
    dispatch(refreshUser()).then(()=>{
      setloader(true)
    })
    
  }, [])
  
  return (
 
    <div className="App">
      {loader &&
<BrowserRouter>
  <AppRouter/>
</BrowserRouter>
}
    </div>
  );
}

export default App ;
