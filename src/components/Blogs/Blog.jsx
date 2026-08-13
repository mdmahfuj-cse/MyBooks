import React from "react";
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  //const {blog}=props;
  console.log(blog);
const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  setBookMarked([...bookmarked, blog]);
};
  const handleMarkAsRead = (time) => {
    const newtime = readingcount + time;
    setReadingCount(newtime);
  };
  console.log(readingcount);

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm h-full border grid grid-cols-1 md:grid-cols-2 bg-base-100 shadow-sm border-2 border-solid border-white">
        <figure className="mx-2">
          <img
            className="w-48 h-32 object-cover rounded-lg mx-2 my-2"
            src={blog.cover}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <div className="author flex justify-around items-center">
            <h3>{blog.author}</h3>
            <img className="w-12" src={blog.author_img}></img>
            <button onClick={() => handleBookMark(blog)}>
              <IoBookmarksOutline />
            </button>
          </div>
          <h2 className="card-title">{blog.title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          {blog.hashtags.map((has) => (
            <p>{has}</p>
          ))}
          <div className="card-actions justify-end">
            <button
              onClick={() => handleMarkAsRead(blog.reading_time)}
              className="btn btn-primary"
            >
              Mark as Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
