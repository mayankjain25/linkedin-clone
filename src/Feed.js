import { Avatar } from '@material-ui/core';
// import CreateIcon from '@material-ui/icons/Create';
import React, {useState,useEffect} from 'react'
import './Feed.css'
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import DescriptionIcon from '@material-ui/icons/Description';
import Post from './Post';
import { db } from './firebase';
import firebase from "firebase"

function Feed() {

    const [input,setInput]=useState('');

    const [posts,setPosts]=useState([]);

    
    useEffect(()=>{
        db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc=>(
                {
                    id: doc.id,
                    data:doc.data(),
                }
                )))
                ))
            },[])


        const sendPost=(e)=>{
            e.preventDefault();
            
            db.collection("posts").add({
                name: 'Mayank Jain',
                description: 'This is a test',
                message: input,
                photoURL: '',
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })

            setInput("")

        }
        return (
            <div className="feed">

            <div className="feed__inputContainer">

                <div className="toprow">

                    <div className="feed__avatar">
                        <Avatar src="./myavatar.png" />

                    </div>

                    <div className="feed__input">

                        {/* <CreateIcon className="feed__icon" /> */}
                        <form>
                            <input value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder="Start a post" />
                            <button onClick={sendPost}  type="submit">Send</button>
                        </form>
                    </div>
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photos" color="#70b5f9" />
                    <InputOption Icon={PlayCircleFilledIcon} title="Video" color="#82c155"/>
                    <InputOption Icon={BusinessCenterIcon} title="Job" color="#b7e1dc" />
                    <InputOption Icon={DescriptionIcon} title="Article" color="#f3afa0" />
                </div>


            </div>

            <hr></hr>
            {
                posts.map(({id,data:{name,description,message,photoURL}})=>(
                    <Post 
                    
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoURL={photoURL}
                        
                                       
                    />
                ) 
                )}
            
            

            
        </div>
    )
}

export default Feed
