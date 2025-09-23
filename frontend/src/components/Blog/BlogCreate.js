import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogAPI } from '../../services/api';

const BlogCreate = () => {
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await blogAPI.createBlog(formData);
      navigate('/');
    } catch (error) {
      setError('Failed to create blog');
    }
    setLoading(false);
  };

  return (
    <div className="blog-form-container">
      <h2>Create New Blog</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="content"
            placeholder="Write your blog content here..."
            value={formData.content}
            onChange={handleChange}
            rows="15"
            required
          />
        </div>
        <button type="submit" disabled={loading} className="submit-button">
          {loading ? 'Publishing...' : 'Publish Blog'}
        </button>
      </form>
    </div>
  );
};

export default BlogCreate;