import './feed.css';
import Tweet from '../components/Tweet.js'
import Postbox from '../components/PostBox.js'
import UserContext from "./Login"
import React, {useState, useEffect, useContext} from "react"
import { userId } from './Login';

export default function Feed() {
  const [posts, setPosts] = useState([])
  console.log(userId)
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`http://localhost:3000/api/posts/${userId}`)
      const posts = await res.json()
      console.log(posts)
      setPosts(posts)
    }  
    fetchPosts()
  }, [])

 
  return ( 
    <div className='feed-container'>
      <div className='feed'>
        {posts.map((p) => (
          <Tweet tweet={p} />
        ))}
      </div> 

      <div className='post-box'>
        <Postbox />
      </div>
    </div>
    
  );
} 
   
 
