import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';

i18next.init({
  interpolation: { escapeValue: false },
});
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
