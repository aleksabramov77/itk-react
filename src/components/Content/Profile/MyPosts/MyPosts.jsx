import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
  {id: 1, message: "Hi, how are you", likesCount: 5},
  {id: 2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aspernatur assumenda beatae delectus dicta dignissimos dolores doloribus ea eos error explicabo facere fugit, illum ipsum labore laboriosam maiores maxime minima molestiae molestias natus nemo nihil nobis obcaecati praesentium quam qui quis quo reiciendis sapiente sequi ut vitae. Accusantium animi aperiam cum dolore earum inventore libero magnam, molestias, neque nisi quia ratione sint soluta suscipit, temporibus veniam voluptas! Alias aperiam, blanditiis cupiditate earum exercitationem inventore itaque iusto molestiae, nam perspiciatis provident quia quisquam ratione saepe suscipit veritatis, voluptas voluptates. Animi cupiditate enim nostrum quaerat velit. Accusantium aliquid aperiam assumenda culpa dolores earum et facilis hic iste magnam odio officiis omnis placeat quam, quis tempora voluptatum!", lekeseCount: 0},
]
let postsElements = postsData.map(post => (
  <Post message={post.message} likesCount={post.likesCount} />
))

const MyPosts = () => {
  // console.log(s.post)
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea className={s.textareaBlock}></textarea>
        </div>
        <div>
          <button  className={s.buttonBlock}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
        />
      </div>
    </div>
  );
};

export default MyPosts;
