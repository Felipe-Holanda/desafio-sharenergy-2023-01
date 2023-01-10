import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Toaster } from 'react-hot-toast';
import GlobalStyle from './styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8} />
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
