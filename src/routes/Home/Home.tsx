import { useEffect, useState } from 'react';
import './Home.css'
import axios from 'axios';
import { IPost } from '../../Intefaces/IPost';
import { Link } from 'react-router-dom';

const Home = ()=>{
    const[posts, setPosts] = useState<IPost[]>([])
    
    const getPosts = async()=>{
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(response.data)
            
            
        }
        catch(error){
            console.log(error)
        }
        
    }

    useEffect(()=>{
        getPosts();
    }, [])

    
    return(
        <div className='home'>
            <h1>Últimos posts</h1>
            {posts.length === 0 ? <p>carregando</p>: 
            posts.map(post => 
                <div key={post.id} className="postcontainer">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={'/posts/'+post.id}>Ler mais</Link>
                </div>
            )
            }
        </div>
    )
}

export default Home;