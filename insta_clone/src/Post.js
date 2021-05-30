import React, {useState, useEffect} from 'react'
import "./Post.css";
import Avatar from '@material-ui/core/Avatar';
import { db } from './firebase';
import firebase from "firebase/app";




function Post({username, postid, imgURL, user, caption}) {

    const [comments, setcomments] = useState([]);
    const [comment, setcomment] =  useState('');

    useEffect(() => {
        let unsubscribe;
        if(postid) {
            unsubscribe = db
            .collection("posts")
            .doc(postid)
            .collection("comments")
            .orderBy("timestamp","desc")
            .onSnapshot(snapshot => {
                setcomments(snapshot.docs.map(doc => doc.data()))
            });
        }
        return () => {
            unsubscribe();
        }
    }, [postid])
    
    const postcomment = (event) => {
        event.preventDefault();

        db.collection("posts").doc(postid).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setcomment('');
    }


    return (
        <div className="post">
            {/* header */}
            <div className="post__header">
               <Avatar className="post__avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
               <h3>{username}</h3>
            </div>

            {/* image */}
            <img
                className="post__img"
                src={imgURL}
                alt="" 
            />

            {/* footer */}
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>

            <div className="post__comments">
                {comments.map((comment) => (
                        <p>
                            <strong>{comment.username}</strong>       {comment.text}
                        </p>
                ))}
            </div>

            {user && 
                <form className="post__commentbox">
                <input
                    className="post__input"
                    type="text"
                    placeholder="Enter the comment.."
                    value={comment}
                    onChange={event => setcomment(event.target.value)} /> 

                    <button 
                    className="post__button"
                    disabled={!comment} 
                    variant="contained" 
                    color="primary" 
                    type="submit" 
                    onClick={postcomment}>
                    Post</button>
            
            </form>
            }
            

        </div>
    )
}

export default Post
