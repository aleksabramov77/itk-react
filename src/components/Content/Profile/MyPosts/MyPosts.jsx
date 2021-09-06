import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            My posts
            <div>New post</div>
            <div className={s.posts}>
                <Post src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg"
                      message="Hi, how are you"
                      likesCounter='5'
                      className={s.post}
                />
                <Post
                    src="https://lwlies.com/wp-content/uploads/2021/09/the-card-counter-oscar-isaac-356x250-c-default.jpg"
                    message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aspernatur assumenda beatae delectus dicta dignissimos dolores doloribus ea eos error explicabo facere fugit, illum ipsum labore laboriosam maiores maxime minima molestiae molestias natus nemo nihil nobis obcaecati praesentium quam qui quis quo reiciendis sapiente sequi ut vitae. Accusantium animi aperiam cum dolore earum inventore libero magnam, molestias, neque nisi quia ratione sint soluta suscipit, temporibus veniam voluptas! Alias aperiam, blanditiis cupiditate earum exercitationem inventore itaque iusto molestiae, nam perspiciatis provident quia quisquam ratione saepe suscipit veritatis, voluptas voluptates. Animi cupiditate enim nostrum quaerat velit. Accusantium aliquid aperiam assumenda culpa dolores earum et facilis hic iste magnam odio officiis omnis placeat quam, quis tempora voluptatum!'
                    likesCounter='0'
                    className={s.post}
                />
            </div>
        </div>
    );
};

export default MyPosts;
