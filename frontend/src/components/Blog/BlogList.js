import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogAPI } from '../../services/api';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const fetchBlogs = async (page) => {
    try {
      const response = await blogAPI.getBlogs(page);
      setBlogs(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 6));
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
    setLoading(false);
  };

  if (loading) return <div className="loading">Loading blogs...</div>;

  return (
    <div className="blog-list-container">
      <h1>Latest Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs available yet. Be the first to create one!</p>
      ) : (
        <>
          <div className="blog-grid">
            {blogs.map(blog => (
              <div key={blog.id} className="blog-card">
                <h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3>
                <p className="blog-preview">
                  {blog.content.substring(0, 150)}...
                </p>
                <div className="blog-meta">
                  <span>By {blog.author_name}</span>
                  <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BlogList;