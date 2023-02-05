import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './components/redux/store'
import axios from 'axios';
// ReactDOM.render(<App />,document.getElementById('root'));

axios.defaults.baseURL = 'http://localhost:8080/'
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
                <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)