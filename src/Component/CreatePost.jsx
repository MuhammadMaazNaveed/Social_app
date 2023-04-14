import React, { useState, useEffect } from "react";
import "./CreatePost.css";
// import M from "materialize-css";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [pic, setPic] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (pic) {
            fetch("http://localhost:8000/createpost", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("jwt"),
                },
                body: JSON.stringify({
                    title,
                    body,
                    pic: pic,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.error) {
                        // M.toast({ html: data.error, classes: "#c62828 red darken-3" });
                    } else {
                        // M.toast({ html: data.message, classes: "#43a047 green darken-1" });
                        navigate("/");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [pic]);

    const postDetails = (e) => {
        e.preventDefault();
        const data = new FormData();
        console.log(image);
        data.append("file", image);
        data.append("upload_preset", "social-app");
        data.append("cloud_name", "druzkibx1");
        fetch("https://api.cloudinary.com/v1_1/druzkibx1/image/upload", {
            method: "post",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                setPic(data.url);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="create-post">
                <div className="post_content">
                    <form>
                        <div className="post_item">
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                            {/* <p> {errors.title && touched.title && errors.title}</p> */}
                        </div>
                        <div className="post_item">
                            <label>Body</label>
                            <textarea
                                name="body"
                                id=""
                                cols="30"
                                rows="10"
                                onChange={(e) => setBody(e.target.value)}
                                value={body}
                            ></textarea>
                            {/* <p> {errors.body && touched.body && errors.body}</p> */}
                        </div>
                        <div className="post_item">
                            <label>File</label>
                            <input
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>
                        <div className="post_item">
                            <label>Category</label>
                            <select name="select" id="">
                                <optgroup label="German Cars">
                                    <option value="Mens">Mens</option>
                                    <option value="Mens">Mens</option>
                                    <option value="Mens">Mens</option>
                                </optgroup>
                                <optgroup label="German Cars">
                                    <option value="Mens">Mens</option>
                                    <option value="Mens">Mens</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="post_button">
                            <input
                                type="submit"
                                value="Post"
                                onClick={(e) => postDetails(e)}
                            />
                            <input type="" value="Save Draft" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreatePost;
