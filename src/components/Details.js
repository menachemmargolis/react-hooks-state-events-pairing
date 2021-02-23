import React, { useState } from "react"
import Likes from "./Likes"
import Comments from "./Comments"





function Details(props){
    const [commentSearch, setCommentSearch] = useState("");
    const [display, setDisplay] = useState(false)


    
    const cs = props.comments.filter((comm) =>{
        return comm.user.includes(commentSearch)
       }).map((c) => <Comments key ={c.id} comments ={c.comment}
       count = {props.count} user = {c.user} upvotes ={c.upvotes} downvotes ={c.downvotes} />)

    
     
    function changeDisplay(e){
        setCommentSearch( e.target.value)     
        
    }



    function deleteComments(e){
        setDisplay((display) => !display)
        console.log(display)
    }
    let h2 = <h2>{props.count} Comments</h2>
    let searchBar = <input onChange = {changeDisplay} type="text" placeholder="Search.."></input>
    return (<p>
        {props.views} Views | Uploaded {props.createdAt}
        <Likes  upvotes = {props.upvotes} downvotes = {props.downvotes} />
        <p><button onClick ={deleteComments}> Hide Comments </button></p>
        <hr></hr>
        <div id="comments">
        { display ? searchBar : null}
          { display ? h2 : null} 
          { display ? cs : null}
        </div>
        
       </p>
       )
}


export default Details;


// Add upvote/downvote buttons to each comment
// Add a search bar to search comments by username
// Add a "Remove Comment" button to delete comments from the page
// Add a sorting feature to sort the comments