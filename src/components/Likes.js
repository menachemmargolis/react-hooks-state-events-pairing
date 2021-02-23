import React, { useState } from "react"
function Likes(props){
    let upNum = parseInt(props.upvotes)
    let downNum = parseInt(props.downvotes)
    const [like, setLike] = useState(upNum)
    const [disLike, setDisLike] = useState(downNum)

    function ChangeLikes(e){
       setLike(like + 1)
        
    }

    function ChangeDisLikes(e){
        setDisLike(disLike + 1)
         
     }

  return (
      <p><button onClick ={ChangeLikes} >{like} 👍</button >  <button onClick ={ChangeDisLikes}>{disLike} 👎</button>  </p>
  )
}

export default Likes;