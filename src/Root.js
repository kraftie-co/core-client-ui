import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createRoot } from 'react-dom/client';
import initTranslations from './services/initTranslations';
import reportWebVitals from 'report-web-vitals';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore } from 'redux-persist';

import themes from './components-export/Theme';
import GlobalStyles from './globalStyles';
import Home from './containers/Home';
import ProductsPage from './containers/ProductsPage';
import Counter from './containers/Counter';

import { store } from './store';

function Root({ locale, theme }) {
  initTranslations(locale);

  return (
    <Suspense fallback={<div />}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/counter" element={<Counter />} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

Root.propTypes = {
  locale: PropTypes.string,
  theme: PropTypes.object,
};

Root.defaultProps = {
  locale: 'en',
  theme: themes.light,
};

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);

reportWebVitals();
