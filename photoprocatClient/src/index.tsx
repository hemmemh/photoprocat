import ReactDOM from 'react-dom/client';
import App from './app/App';
import { Providers } from './app/providers/providers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Providers>
     <App />
  </Providers>

);
