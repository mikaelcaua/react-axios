import { FormEvent, useState } from 'react';
import './NewPost.css'
import blogFetch from '../../axios/config';
import { useNavigate } from 'react-router-dom';

const NewPost = ()=>{
    const [title, setTitle] = useState('');
    const [comentario, setComentario] = useState('');
    const navigate = useNavigate();

    const criarPost = async (e:FormEvent)=>{
        e.preventDefault(); 
        const post = {userID:1, title, comentario};
        await blogFetch.post("/posts", {
            body:post
        });
        navigate("/");
    }

    return(
       
        <form onSubmit={e => criarPost(e)} className='formpost'>
            <h2>Novo Post</h2>
            <label>Titulo</label>
            <input placeholder='Insira um título...' type='text' onChange={e => setTitle(e.target.value)}></input>
            <label>Conteúdo:</label>
            <textarea placeholder='Insira seu texto...' name="body" id="body" cols={30} rows={10} onChange={e => setComentario(e.target.value)}></textarea>
            <button className='btn'>Criar Post</button>
        </form>
    )
}

export default NewPost;