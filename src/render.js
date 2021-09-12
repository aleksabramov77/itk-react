import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, addMessage, onChangePost, onChangeMessage } from './redux/state';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          addMessage={addMessage}
          onChangePost={onChangePost}
          onChangeMessage={onChangeMessage}
        />
      </React.StrictMode>,
    document.getElementById('root')
  );
}