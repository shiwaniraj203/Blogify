# Blogify - Full-Stack Blog Application

![Django](https://img.shields.io/badge/Django-4.2.7-green.svg)
![React](https://img.shields.io/badge/React-18-blue.svg)
![JWT](https://img.shields.io/badge/JWT-Auth-red.svg)
![Mobile](https://img.shields.io/badge/Mobile-Ready-yellow.svg)

A modern, responsive blog application built with Django REST Framework and React. This application demonstrates full-stack development capabilities with user authentication, real-time content management, and mobile responsiveness.

## 🚀 Live Demo
- **Frontend:** https://blogify-frontend-abc123.onrender.com (Will be updated after deployment)
- **Backend API:** https://blogify-backend-abc123.onrender.com/api (Will be updated after deployment)

## 📱 Features Showcase

### User Experience
- **Seamless Authentication:** JWT-based secure login/signup system
- **Intuitive Blog Management:** Create, edit, delete posts with rich text editing
- **Responsive Design:** Flawless experience on desktop, tablet, and mobile
- **Real-time Updates:** Changes reflect immediately across all devices

### Technical Capabilities
- **RESTful API:** Well-structured endpoints with proper HTTP status codes
- **Database Management:** Efficient SQLite database with proper relationships
- **Security Features:** CORS protection, password hashing, authorization
- **Performance:** Optimized with pagination and efficient queries

## 🛠️ Tech Stack

### Backend
- **Framework:** Django 4.2.7 with Django REST Framework 3.14.0
- **Authentication:** JWT (Simple JWT)
- **Database:** SQLite (development ready for PostgreSQL)
- **Security:** Django CORS Headers, Password Hashing
- **API Documentation:** Self-documenting REST API

### Frontend
- **Framework:** React 18 with React Router DOM 6.8.1
- **HTTP Client:** Axios 1.3.4 with interceptors
- **Styling:** Responsive CSS with modern design principles
- **State Management:** React Hooks for efficient state handling
- **Build Tool:** Create React App with Webpack

## 📦 Installation & Setup

### Prerequisites
- Python 3.8+ with pip
- Node.js 16+ with npm
- Git for version control
- Modern web browser

### Quick Start

#### Clone the repository
```bash
git clone https://github.com/shiwaniraj203/Blogify.git
cd Blogify
```

#### Backend Setup
```bash
cd backend
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Set up database
python manage.py migrate
python manage.py createsuperuser

# Start backend server
python manage.py runserver
```

#### Frontend Setup (in a new terminal)
```bash
cd frontend
npm install

# Start frontend server
npm start
```

#### Access the Application
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000/api
- **Admin Panel:** http://localhost:8000/admin

## 📱 Mobile Access

### Local Network Testing
- Ensure both devices are on the same Wi-Fi network
- Find your computer's IP address (Windows: `ipconfig`)
- Access via: `http://YOUR_IP:3000`

### Production Access
After deployment, the application is accessible from any device worldwide at the deployed URL.

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:
```env
DEBUG=True
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=localhost,127.0.0.1
```

### CORS Configuration
Update `blogify_backend/settings.py`:
```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]
```

## 🧪 Testing

### Backend Testing
```bash
cd backend
python manage.py test
```

### Frontend Testing
```bash
cd frontend
npm test
```

### Manual Testing Checklist
- ✅ User registration and login
- ✅ Blog post creation and editing
- ✅ Public access to blog posts
- ✅ Mobile responsiveness
- ✅ Admin panel functionality
- ✅ API endpoint responses

## 🚀 Deployment

### Render Deployment (Recommended)

#### Prepare the Application
```bash
# Update requirements.txt
echo "gunicorn==20.1.0" >> backend/requirements.txt
echo "whitenoise==6.5.0" >> backend/requirements.txt

# Create Procfile for backend
echo "web: gunicorn blogify_backend.wsgi" > backend/Procfile
```

#### Deploy Backend
1. Push code to GitHub
2. Create Render account
3. Connect GitHub repository
4. Configure Python web service

#### Deploy Frontend
1. Create Node.js web service on Render
2. Set environment variable: `REACT_APP_API_URL`

### Alternative Platforms
- **Backend:** Heroku, Railway, DigitalOcean
- **Frontend:** Vercel, Netlify, GitHub Pages

## 📊 API Documentation

### Authentication Endpoints
- `POST /api/auth/signup/` - User registration
- `POST /api/auth/login/` - User login

### Blog Endpoints
- `GET /api/blogs/` - List all blogs (paginated)
- `POST /api/blogs/` - Create new blog (authenticated)
- `GET /api/blogs/{id}/` - Get specific blog
- `PUT /api/blogs/{id}/` - Update blog (author only)
- `DELETE /api/blogs/{id}/` - Delete blog (author only)

### Response Format
```json
{
  "id": 1,
  "title": "Blog Title",
  "content": "Blog content",
  "author_name": "shivani",
  "created_at": "2023-09-23T10:00:00Z"
}
```

## 🏗️ Project Structure
```
Blogify/
├── backend/                 # Django REST API
│   ├── blogify_backend/     # Project configuration
│   ├── blog/               # Blog application
│   ├── manage.py           # Django management script
│   └── requirements.txt   # Python dependencies
├── frontend/               # React application
│   ├── public/             # Static files
│   ├── src/                # React components
│   └── package.json        # Node.js dependencies
├── README.md               # This file
└── .gitignore             # Git ignore rules
```

## 🔒 Security Features
- **JWT Authentication:** Stateless authentication with token expiration
- **Password Security:** Hashed passwords using Django's PBKDF2
- **CORS Protection:** Secure cross-origin resource sharing
- **SQL Injection Prevention:** Django ORM parameterized queries
- **Authorization:** User permissions for blog operations

## 🎨 UI/UX Features
- **Responsive Design:** Mobile-first approach
- **Clean Interface:** Modern, minimalist design
- **Loading States:** User feedback during API calls
- **Error Handling:** Graceful error messages
- **Form Validation:** Client and server-side validation

## 🚧 Future Enhancements
- [ ] User profiles with avatars
- [ ] Blog categories and tags
- [ ] Search functionality
- [ ] Comment system
- [ ] Image upload support
- [ ] Email notifications
- [ ] Dark mode toggle
- [ ] Multi-language support

## 🤝 Contributing
This project is developed as a portfolio piece. While contributions are not currently being accepted, feel free to explore the code and reach out with questions or feedback.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact
**Developer:** Shiwani Raj  
**GitHub:** https://github.com/shiwaniraj203  
**Email:** shiwaniraj203@gmail.com  
**LinkedIn:** www.linkedin.com/in/shiwani-raj-1430761b8

## 🙏 Acknowledgments
- Django and React communities for excellent documentation
- Open source libraries that made this project possible
- Inspiration from modern web applications

---
