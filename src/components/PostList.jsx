import React from "react";
import PostBlock from "./PostBlock";

const PostList = ({posts, title}) => {
          return (
              <div>
              <h1 style={{textAlign: 'center',paddingTop: '40px'}}> {title} </h1>
              {posts.map((post, index) => <PostBlock number={index + 1} post={post} key={post.id}/>)}                  
              </div>
          );
}
export default PostList;