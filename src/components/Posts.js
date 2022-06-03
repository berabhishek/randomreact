import React, {useState, useEffect} from "react";
import axios from 'axios';
function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(data => {
        console.log(data);
        setPosts(data.data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      {isLoading ? <div>Loading</div> : <div>
          <ul>
            {posts.map(post => {
              return (
                <li>
                  <div>
                    title : {post.title}
                  </div>
                  <div>
                    post : {post.body}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>}
    </div>
  )
}

export default Posts;
