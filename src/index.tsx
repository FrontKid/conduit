import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App';

import './index.scss'
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router >
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </Router>
);


