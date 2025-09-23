import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogAPI } from '../../services/api';

const BlogEdit = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const response = await blogAPI.getBlog(id);
      setFormData({
        title: response.data.title,
        content: response.data.content
      });
    } catch (error) {
      setError('Failed to fetch blog');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await blogAPI.updateBlog(id, formData);
      navigate(`/blog/${id}`);
    } catch (error) {
      setError('Failed to update blog');
    }
    setLoading(false);
  };

  return (
    <div className="blog-form-container">
      <h2>Edit Blog</h2>
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
          {loading ? 'Updating...' : 'Update Blog'}
        </button>
      </form>
    </div>
  );
};

export default BlogEdit;