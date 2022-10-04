import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {legacy_createStore as createStore} from "redux";
import {Provider} from "react-redux";
import RootReducer from "./Serices/Reducers/RootReducer";

const Store = createStore(RootReducer);
// console.log("Store", Store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store ={Store}>
       <App />
     </Provider>
);
