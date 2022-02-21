import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root'
import { BrowserRouter } from 'react-router-dom'
import {AddMaxsulotToggleProvider} from './context/AddMaxsulot'
import {CategoryBProvider} from './context/categoryB'
import { FilialContextProvider } from './context/filialcontex';
import {BuyurtmaContextProvider} from './context/buyurtmacontext'
import {MaxsulotContextProvider} from  './context/maxsulotcontext'
import {XodimContextProvider} from './context/xodimcontext'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AddMaxsulotToggleProvider> 
       <CategoryBProvider>
         <FilialContextProvider>
            <BuyurtmaContextProvider>
               <MaxsulotContextProvider>
                  <XodimContextProvider>
                        <Root />
                  </XodimContextProvider>
               </MaxsulotContextProvider>
            </BuyurtmaContextProvider>
          </FilialContextProvider>
         </CategoryBProvider>
      </AddMaxsulotToggleProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


