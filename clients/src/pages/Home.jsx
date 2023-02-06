import React, { useState } from 'react';
import { getRandomPrompt } from '../utils';
import axios from 'axios';
import {useNavigate} from  'react-router-dom'




const CreatePost = () => {
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState(null);
    const navigate = useNavigate()

    const handleSumbit = async (e) => {
      e.preventDefault()

      setLoading(true)
      
      await axios.post('http://localhost:8080/api/dalle', {
        prompt
      })
      .then(function (response) {
        const {data} = response
        setPosts(data)
         
      })
      .catch(function (error) {
        console.log(error);
      });
      setLoading(false)
    }

    const changeHandler = (e) => {
        setPrompt(e.target.value)
    }
    const handleSurprise = () => {
      const randomPrompt = getRandomPrompt(prompt)
      setPrompt(randomPrompt)
    }

    const handleCollections = async () => {
      await axios.post('http://localhost:8080/api/collections', {
        posts
      })
      .then(function (response) {
        const {data} = response
         
      })
      .catch(function (error) {
        console.log(error);
      });
      navigate('/collections')
    }
  return (
    <div className='p-10 flex flex-col justify-center '>
      <div> 
        <h1 className='font-bold text-[36px] '>Create Amazing Images</h1>
        <span>Generate your images with King's AI using the keep of dalle 2 <br/> feel free to browse through our AI generated collections </span>
      </div>
      <div className='mt-8'>
        <span>Enter your magic word</span> <button className='bg-slate-200 px-2' onClick={handleSurprise}>Surprise Me</button>
      </div>
      <form className='flex mt-2 border-2   ' onSubmit={handleSumbit}>
        <input className='flex flex-1 border-none outline-none p-2' type='text' onChange={changeHandler} required name='name' value={prompt} placeholder='The long-lost Star Wars 1990 Japanese Anime'  />
        <button className='p-2 bg-black text-white  ' disabled={prompt.length === 0} > {loading? 'Generating...' : 'Generate' } </button>
      </form>
      <div>
        {posts? <div className='mt-8'>
        <span className='font-bold'>Result showing for: </span>
        {posts? <>{prompt}</> : <></>}
      </div>: <></> }
      </div>
      <div className='flex flex-wrap p-8 gap-4 justify-center' >
        {posts?.map((post, index)=>{
          return (
            <img src={post?.url} alt='post' width='245' height='245' key={index} />
          )
        })}
        {posts ? <button className='bg-[#7F00FF] text-white px-4 py-1 b-r-2 flex-1'onClick={handleCollections} >Add to Collections</button> : <></>}
      </div>
    </div>
  )
}

export default CreatePost