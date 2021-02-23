import video from "../data/video.js";
import Title from "./Title";
import Details from "./Details";

function App() {
  console.log("Here's your data:", video);
  return (
    <div className="App">
      <iframe
      width="919"
      height="525"
      src={video.embedUrl}
      frameborder="0"
      allowfullscreen
      title={video.title}
    />
    <Title title = {video.title}/>
    <Details views ={video.views} createdAt ={video.createdAt} upvotes ={video.upvotes}  comments ={video.comments} downvotes ={video.downvotes} count = {video.comments.length} /> 
    </div>
  );
}


// id: 1,
// title: "React Today and Tomorrow and 90% Cleaner React With Hooks",
// embedUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
// views: 730707,
// createdAt: "Oct 26, 2018",
// upvotes: 9210,
// downvotes: 185,
// comments: [
 export default App;


// When the app loads, display a video along with its details and a list of all the comments
// When a user clicks on the "👍" button, the number of upvotes for the video should increase
// When a user clicks on the "👎" button, the number of downvotes for the video should increase
// When the user clicks the "Hide Comments" button, the comments should be removed from the page, and the button text should change to "Show Comments". When the button is clicked again, it should toggle back to showing the comments.
// The data you'll need for the app can be found in the video.js file.

// Start by planning out what components you'll need and draw out your component hierarchy. Then, build out your components and pass down any data they need via props using the video object that's been imported in the App component.

// Consider what components need to use state as you're building out these features.

// There's an example of how to embed a video using an <iframe> in the App component. Other than that, you're on your own in terms of how to design each part of the application. Don't worry too much about getting the styling to match the demo. Focus on functionality.

// Good luck!