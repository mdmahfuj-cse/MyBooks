import React, { useEffect } from 'react';

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
            {blogs.map(blog => (
                
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Blogs;