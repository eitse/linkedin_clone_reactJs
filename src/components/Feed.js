import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  function sendInput(event) {
    setInput(event.target.value);
  }
  useEffect(() => {
    db.collection("post")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
          })
        );
      });
  }, []);

  function sendPost(e) {
    e.preventDefault();

    db.collection("post").add({
      title: user.displayName,
      description: "Web Developer, Content Creator",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  }

  return (
    <div className="feed--main">
      <div className="feed--input--container ">
        <div className="feed--input">
          <CreateIcon style={{ color: "#494141" }} />
          <form>
            <input
              onChange={sendInput}
              name="userInput"
              type="textfield"
              className="feed--text--input"
              placeholder="Write a post"
              value={input}
            />
            <button onClick={sendPost} className="feed--submit">
              Submit
            </button>
          </form>
        </div>
        <div className="feed--input--options">
          <div className="feed--input--option">
            <ImageIcon style={{ color: "#607cbf" }} /> Photo
          </div>
          <div className="feed--input--option">
            <SubscriptionsIcon style={{ color: "#a3a04b" }} /> Video
          </div>
          <div className="feed--input--option">
            <EventNoteIcon style={{ color: "#607cbf" }} /> Event
          </div>
          <div className="feed--input--option">
            <HistoryEduIcon style={{ color: "#538546" }} /> Write article
          </div>
        </div>
      </div>

      {/* Display Posts from Firebase */}

      <div className="post--main--container md:flex-1">
        <FlipMove>
          {posts.map(
            ({ id, data: { title, description, message, photoUrl } }) => {
              return (
                <Post
                  key={id}
                  title={title}
                  description={description}
                  message={message}
                  photoUrl={photoUrl}
                />
              );
            }
          )}
        </FlipMove>
      </div>
    </div>
  );
}

export default Feed;
