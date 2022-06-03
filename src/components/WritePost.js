import axios from "axios";
import React, {useState} from "react";

export default function WritePost (props) {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const writeDataToApi = function() {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            userId: 1,
            title: title,
            body: content
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.error("some error occured");
        });
    }
    return (
        <div>
            <textarea onChange={(event) => {
                setTitle(event.target.value);
            }}></textarea>
            <textarea onChange={(event) => {
                setContent(event.target.value);
            }}></textarea>
            <button onClick={writeDataToApi}>Post</button>
        </div>
    )
} 