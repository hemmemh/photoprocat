import AppRouter from './routers/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import './styles/style.scss';
import { useState, useEffect } from 'react';
import { refreshUser } from '../entities/user/model/UserActions';
import { useAppDispatch } from '../shared/hooks/reduxHooks';
import { Providers } from './providers/providers';

function App() {
  const [loader, setloader] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setloader(false);
    dispatch(refreshUser()).then(() => {
      setloader(false);
    });
  }, []);

  return (
    <div className="App">
      {!loader && <AppRouter />}
    </div>
  );
}

export default App;
