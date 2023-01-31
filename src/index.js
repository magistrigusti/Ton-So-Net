import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addPost, addMessage, updateNewPostText } from './redux/state';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state';
import './index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
  
  root.render(
    <React.StrictMode>

      <BrowserRouter>
        <App state={state} addPost={addPost} 
              addMessage={addMessage} updateNewPostText={updateNewPostText} />
      </BrowserRouter>

    </React.StrictMode>
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
