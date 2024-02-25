import { useEffect, useState } from 'react';
import './Home.css'
import { IPost } from '../../Intefaces/IPost';
import { Link } from 'react-router-dom';
import blogFetch from '../../axios/config';

const Home = ()=>{
    const[posts, setPosts] = useState<IPost[]>([])
    
    const getPosts = async()=>{
        try{
            const response = await blogFetch.get("/posts");
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
            {posts.length === 0 ? <p>Carregando...</p>: 
            posts.map(post => 
                <div key={post.id} className="postcontainer">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={'/posts/'+post.id} className='btn'>Ler mais</Link>
                </div>
            )
            }
        </div>
    )
}

export default Home;