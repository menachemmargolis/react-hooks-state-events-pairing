import React, { useState } from "react"
function Likes(props){

    const [like, setLike] = useState(0)
    const [disLike, setDisLike] = useState(0)

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