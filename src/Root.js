import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import initTranslations from './services/initTranslations';
import reportWebVitals from 'report-web-vitals';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';

import GlobalStyles from './globalStyles';
import Home from './containers/Home';
import ProductsPage from './containers/ProductsPage';
import Counter from './containers/Counter';

import { store } from './store';

function Root() {
  initTranslations('ro');

  return (
    <Suspense fallback={<div />}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistStore(store)}> */}
        <ThemeProvider theme={{ color: 'red' }}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/counter" element={<Counter />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
        {/* </PersistGate> */}
      </Provider>
    </Suspense>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);

reportWebVitals();
