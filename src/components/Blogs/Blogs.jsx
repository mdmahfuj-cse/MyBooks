import React, { useEffect } from 'react';
import Blog from "./Blog.jsx";



const Blogs = () => {

    const [blogs, setBlogs] = React.useState([]);

    useEffect(() => {
        // Your effect logic here
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div>
           
            <h1 className="text-2xl font-bold mb-4">Total : {blogs.length}</h1>
            <div className="all-blogs grid-cols-2 gap-4 grid ">
                {
                    blogs.map((blog) => <Blog blog={blog}>    </Blog>)
                }
            </div>


        </div>
    );
};

export default Blogs;