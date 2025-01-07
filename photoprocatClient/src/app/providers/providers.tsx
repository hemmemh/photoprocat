import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import SpinnerBody from "../../shared/UI/spinnerBody/SpinnerBody";
import { BrowserRouter } from "react-router-dom";


export function Providers ({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<SpinnerBody />}>
       <Provider store={store}>
         <BrowserRouter>
            {children}
         </BrowserRouter>
       </Provider>
    </Suspense>

  );
}
