import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const[bookmarked,setBookmarked] = useState([]);

  const handleBookMark =(blog) =>{
    setBookmarked([...bookmarked,blog]);

  }
      console.log(bookmarked);

const handleMarkAsRead = (time) =>{
  const newtime = readingcount = time;
  setReadingCount(newtime);
}

console.log(readingcount);

  return (
    <>
      <Navbar> </Navbar>

      <div className="main-container flex">
        <div className="left-container w-[70%]">
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}> </Blogs>
        </div>

        <div className="right-container w-[30%] ">
          <h1>Reading Time :{handleBookMark.time} </h1>
          <h1>Bookmarks : {bookmarked.length}</h1>
          {
            bookmarked.map((marked) => (<p key={marked.id}>{marked.title}</p> ))

          }


        </div>
      </div>
    </>
  );
}

export default App;
