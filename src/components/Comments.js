import React, { useState } from "react"
import Likes from "./Likes"

function Comments(props){
    let upNum = 0
    return (
        <React.Fragment>
            <h3>{props.user}</h3>
            <p>{props.comments}</p>
            <Likes  upvotes = {props.upvotes} downvotes = {props.downvotes} />
        </React.Fragment>
    )
}

export default Comments;

// Add upvote/downvote buttons to each comment