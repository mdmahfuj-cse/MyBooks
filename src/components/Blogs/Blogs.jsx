import React, { useEffect } from 'react';

const Blogs = () => {
    useEffect(() => {
        // Your effect logic here
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default Blogs;