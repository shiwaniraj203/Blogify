import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogAPI } from '../../services/api';

const BlogDetail = ({ user }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const response = await blogAPI.getBlog(id);
      setBlog(response.data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await blogAPI.deleteBlog(id);
        navigate('/');
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!blog) return <div className="error">Blog not found</div>;

  const isAuthor = user && user.id === blog.author;

  return (
    <div className="blog-detail-container">
      <article className="blog-detail">
        <h1>{blog.title}</h1>
        <div className="blog-meta">
          <span>By {blog.author_name}</span>
          <span>{new Date(blog.created_at).toLocaleDateString()}</span>
        </div>
        
        {isAuthor && (
          <div className="blog-actions">
            <Link to={`/edit/${blog.id}`} className="edit-button">Edit</Link>
            <button onClick={handleDelete} className="delete-button">Delete</button>
          </div>
        )}
        
        <div className="blog-content">
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;