import axios from "axios";
import React, {useState, useEffect} from "react";

export default function PaginatedPost(props) {
    const [postNumber, setPostNumber] = useState(1);
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const prevPage = () => {
        setPostNumber(postNumber - 1);
    }

    
    const nextPage = () => {
        setPostNumber(postNumber + 1);
    }
    const getDataFromEndpoint = async () => {
        setIsLoading(true);
        let data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postNumber}`);
        data = data.data;
        if (typeof data === "undefined" ) {
            data = {};
        } else {
            let users =  await axios.get("https://jsonplaceholder.typicode.com/users"); //users depends on post so using await to avoid callback hell
            let user = users.data.filter(x => x.id === data.userId);
            data.author = user[0].name;
        }
        setPost(data);
        setIsLoading(false);
    }
    useEffect(() => {
        getDataFromEndpoint();
    }, [postNumber]);

    useEffect(() => {
        getDataFromEndpoint();
    }, []);
    return (
        <div>
            {isLoading ? <div>Loading... </div>: <div>
                <div>Author: {post.author}</div>
                <div>Post number: {post.id}</div>
                <div>title: {post.title}</div>
                <div>desc: {post.body}</div>    
            </div>}
            <button onClick={prevPage} disabled={postNumber === 1}> Previous</button>
            <button onClick={nextPage}> Next </button>
        </div>
    )
};