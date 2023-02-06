import React from 'react'

const RenderCard = ({data, tittle}) => {
    if(data?.length>0) {
        return data.map(()=>{
            
        })
    }
  return (
    <div>RenderCard</div>
  )
}

export default RenderCard