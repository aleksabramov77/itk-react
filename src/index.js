import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Sasha" },
  { id: 3, name: "Viktor" },
  { id: 4, name: "Lena" },
  { id: 5, name: "Misha" },
  { id: 6, name: "Egor" },
  { id: 7, name: "Sveta" },
  { id: 8, name: "Sveta" },
];

let messagesData = [
  { id: 1, message: "Hi !!!" },
  { id: 2, message: "How are you ?" },
  { id: 3, message: "Yo" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" },
];

let postsData = [
  {id: 1, message: "Hi, how are you", likesCount: 5},
  {id: 2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aspernatur assumenda beatae delectus dicta dignissimos dolores doloribus ea eos error explicabo facere fugit, illum ipsum labore laboriosam maiores maxime minima molestiae molestias natus nemo nihil nobis obcaecati praesentium quam qui quis quo reiciendis sapiente sequi ut vitae. Accusantium animi aperiam cum dolore earum inventore libero magnam, molestias, neque nisi quia ratione sint soluta suscipit, temporibus veniam voluptas! Alias aperiam, blanditiis cupiditate earum exercitationem inventore itaque iusto molestiae, nam perspiciatis provident quia quisquam ratione saepe suscipit veritatis, voluptas voluptates. Animi cupiditate enim nostrum quaerat velit. Accusantium aliquid aperiam assumenda culpa dolores earum et facilis hic iste magnam odio officiis omnis placeat quam, quis tempora voluptatum!", lekeseCount: 0},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
