import React , {useState} from 'react'
import { Input, Button } from "@material-ui/core";
import  {db, storage} from "./firebase";
import firebase from "firebase/app";
import "./ImageUpload.css";


function ImageUpload(props) {
    
    const [caption, setcaption] = useState('');
    const [image, setimage] = useState(null);
    const [progress, setprogress] = useState(0);


    const handleChange = (e) => {
        if(e.target.files[0]) {
            setimage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadtask = storage.ref(`images/${image.name}`).put(image);

        uploadtask.on(
            "state changed", 
            (snapshot) => {
                //Progess...
                const progress = Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                );
                setprogress(progress);
            },
            (error) => {
                alert(error.message);
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption : caption,
                        imgURL : url,
                        username: props.username,
                    });

                    setprogress(0);
                    setcaption('');
                    setimage(null);
                });
            }
            )
    }


    return (
        <div className="ImageUpload">
            <progress className="ImageUpload__progress" value={progress} max="100" />
            {/* 1. Caption Input */}
            <Input type="text" placeholder="Enter the caption:" onChange={event => (setcaption(event.target.value))} value={caption}/>
            {/* 2. File picker to post */}
            <Input type="file" onChange={handleChange}/>
            {/* 3. Post button */}
            <Button variant="contained" color="primary" type="submit" onClick={handleUpload} >Post</Button>
        </div>
    )
}

export default ImageUpload
