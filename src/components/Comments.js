import React, { useState } from "react"
import Likes from "./Likes"

function Comments(props){
    
   function removeComment(e){
     let cc = document.getElementsByClassName('comment')
     console.log(cc.length)
     e.target.closest('div').remove()
     document.getElementById('comment-count').innerHTML = `${cc.length} comment` 
     
   }

    return (
        <div class ="comment">
            <h3>{props.user}</h3>
            <p>{props.comments}</p>
            <button onClick ={removeComment} >Delete!</button>
            <Likes  upvotes = {props.upvotes} downvotes = {props.downvotes} />
        </div>
    )
}

export default Comments;

// Add upvote/downvote buttons to each comment