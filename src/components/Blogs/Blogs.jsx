import React, { useEffect } from "react";
import Blog from "./Blog.jsx";

const Blogs = ({
  handleBookMark,
  handleMarkAsRead,
  readBlogIds,
  bookmarkedIds,
}) => {
  const [blogs, setBlogs] = React.useState([]);

  useEffect(() => {
    // Your effect logic here
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
          My reading list
        </p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Explore articles{" "}
          <span className="text-slate-400">({blogs.length})</span>
        </h1>
      </div>

      <div className="all-blogs grid grid-cols-1 gap-5 xl:grid-cols-2">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
            isRead={readBlogIds.includes(blog.id)}
            isBookmarked={bookmarkedIds.includes(blog.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
