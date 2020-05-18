import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ErrorBoundary from "./components/shared/ErrorBoundary/ErrorBoundary";

ReactDOM.render(
    <ErrorBoundary render={() => <div>Error has occurred</div>}>
        <App/>
    </ErrorBoundary>
    , document.getElementById('root'));
registerServiceWorker();
