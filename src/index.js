import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './redux/state'


let rerenderEntireTree = (state) => {
  // debugger
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        addMessage={store.addMessage.bind(store)}
        onChangePost={store.onChangePost.bind(store)}
        onChangeMessage={store.onChangeMessage.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
