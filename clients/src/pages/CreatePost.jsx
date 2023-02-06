import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../components/Loader'
import RenderCard from '../components/RenderCard'

const Home = () => {

  const [search, setSearch] = useState('')
  const [allPosts, setAllPosts] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
     axios.get('http://localhost:8080/api/collections')
      .then(function (response) {
        const {data} = response
        const load = data.reverse()
        setAllPosts(load)
         
      })
      .catch(function (error) {
        console.log(error);
      }); 
      setLoading(false) 
  },[])


  return (

    <div className='p-10 '>
      <div> 
        <h1 className='font-bold text-[36px] '>Browse through a our Collections</h1>
        <span>Browser through all generated images</span>
      </div>
      <div className='mt-8'>
        {loading? (
          <>
            <Loader/>
          </>
        ) :
        (
          <div className='flex flex-wrap flex-row p-6 justify-center '>
            {allPosts?.map((post, index)=>{
              return (
                <div post={post} key={index} className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-2 m-2'>
                  {post?.img.map((img, index)=>{
                    return (
                      <img src={img.url} alt='image' width='245' height='245' key={index} />
                    )
                  })}
                </div>
              )
            })}
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Home




