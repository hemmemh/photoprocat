import React,{createContext, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import BrandStore from './store/brandStore';
import UserStore from './store/userStore';
import NavbarStore from './store/navbarStore';
import {Provider} from "react-redux"
import { store } from './store2/store';
import SpinnerBody from './components/UI/spinnerBody/SpinnerBody';
interface Store{
  brand: BrandStore
  user:UserStore
  navbar:NavbarStore
}
export const Context= createContext<Store>({
  brand:new BrandStore(),
  navbar:new NavbarStore(),
  user:new UserStore()
 
})



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Suspense fallback={<SpinnerBody/>}>
    <Provider store={store}>
      <App />
    </Provider>
    </Suspense>

);


