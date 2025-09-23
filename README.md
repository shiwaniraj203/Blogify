# Blogify - Full-Stack Blog Application

![Django](https://img.shields.io/badge/Django-4.2.7-green.svg)
![React](https://img.shields.io/badge/React-18-blue.svg)
![JWT](https://img.shields.io/badge/JWT-Auth-red.svg)
![Mobile](https://img.shields.io/badge/Mobile-Ready-yellow.svg)

Blogify - Full-Stack Blog Application. This is a modern, responsive blog application built with Django REST Framework and React, demonstrating full-stack development capabilities with user authentication, real-time content management, and mobile responsiveness. The application allows users to create accounts, write blogs, and read posts from other users with a clean, responsive interface. Features include secure signup/login with JWT tokens, blog management (create, edit, delete), public reading of published blogs, pagination for efficient loading, responsive design for desktop and mobile, and a clean UI. The tech stack includes Django 4.2.7, Django REST Framework, SQLite Database, and JWT Authentication for the backend; React 18, React Router, Axios, and Responsive CSS for the frontend.

## Features
- **User Authentication**: Secure signup/login with JWT tokens
- **Blog Management**: Create, edit, delete your own posts
- **Public Reading**: Anyone can read published blogs
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Pagination**: Efficient loading of blog posts
- **Real-time Updates**: Changes reflect immediately
- **Security**: Password hashing, CORS protection, authorization

## Tech Stack
**Backend:** Django 4.2.7, Django REST Framework 3.14.0, JWT (Simple JWT), SQLite (PostgreSQL-ready), Django CORS Headers  
**Frontend:** React 18, React Router DOM 6.8.1, Axios 1.3.4, Responsive CSS, React Hooks, Create React App  
**Development Tools:** Git, Python venv, pip, npm

## Installation & Setup

To set up the application, ensure you have Python 3.8+, Node.js 16+, and Git. For the backend, create a project directory, set up Django backend by creating a virtual environment, installing dependencies from requirements.txt (which includes Django==4.2.7, djangorestframework==3.14.0, django-cors-headers==4.3.1, djangorestframework-simplejwt==5.3.0, gunicorn==20.1.0, whitenoise==6.5.0), applying migrations, creating a superuser, and running the server on http://127.0.0.1:8000. For the frontend, create a React app, install dependencies (react-router-dom, axios), and start the server on http://localhost:3000. Access the application via the frontend URL.

### Clone the repository
```bash
git clone https://github.com/yourusername/blogify.git
cd blogify
```

### Backend Setup
```bash
cd backend
python -m venv venv
# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

### Access Application
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000/api
- **Admin Panel:** http://localhost:8000/admin

### Mobile Access
For mobile access, ensure both devices are on the same Wi-Fi network and access via the computer's IP address. **Local Network:** Ensure devices are on the same Wi-Fi, find computer IP (`ipconfig`/`ifconfig`), access via `http://YOUR_IP:3000`
**Production:** Accessible worldwide after deployment

## Configuration
Create a `.env` file in backend/:
```env
DEBUG=True
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=localhost,127.0.0.1
```

Update CORS in `blogify_backend/settings.py`:
```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]
```

## Deployment
For cloud deployment using Render: 1) Update requirements.txt to include gunicorn and whitenoise, 2) Create a Procfile in backend with 'web: gunicorn blogify_backend.wsgi', 3) Push code to GitHub, 4) Deploy backend to Render as Python web service, 5) Deploy frontend to Render as Node.js service with REACT_APP_API_URL environment variable, 6) Test the deployed application.

```bash
echo "gunicorn==20.1.0" >> backend/requirements.txt
echo "whitenoise==6.5.0" >> backend/requirements.txt
echo "web: gunicorn blogify_backend.wsgi" > backend/Procfile
# Push to GitHub, deploy backend on Render/Heroku
# Deploy frontend on Netlify/Vercel with REACT_APP_API_URL set to backend URL
```

## API Endpoints
**Authentication:**
- `POST /api/auth/signup/` - User registration
- `POST /api/auth/login/` - User login

**Blog:**
- `GET /api/blogs/` - List all blogs (paginated)
- `POST /api/blogs/` - Create new blog (authenticated)
- `GET /api/blogs/{id}/` - Get specific blog
- `PUT /api/blogs/{id}/` - Update blog (author only)
- `DELETE /api/blogs/{id}/` - Delete blog (author only)

**Example Response:**
```json
{
  "id": 1,
  "title": "My First Blog",
  "content": "Blog content here...",
  "author_name": "john_doe",
  "created_at": "2023-09-23T10:00:00Z"
}
```

## Project Structure
```
blogify/
├── backend/                 # Django REST API
│   ├── blogify_backend/     # Project configuration
│   ├── blog/                # Blog app
│   ├── manage.py
│   └── requirements.txt
├── frontend/                # React application
│   ├── public/
│   ├── src/
│   └── package.json
├── README.md
└── .gitignore
```

## Key Features Demonstrated
The project structure includes backend (with Django project and app) and frontend (React app). This application demonstrates core features of user management, blog operations, public access, pagination, responsiveness, and security, along with professional features like clean UI, error handling, form validation, JWT management, RESTful API design, and professional code structure. Running the application involves starting the backend and frontend, then accessing http://localhost:3000. Testing includes creating accounts, logging in, creating posts, verifying public access, and testing pagination. This is a complete, production-ready blog application showcasing full-stack development skills with Render deployment capabilities.

**Security Features:** JWT Authentication, Password Hashing, CORS Protection, SQL Injection Prevention, Authorization for blog operations
**UI/UX Features:** Mobile-first responsive design, clean interface, loading states, error handling, form validation
**Backend Architecture:** RESTful API design, Django ORM, serializers, pagination, proper HTTP status codes
**Frontend Architecture:** React hooks, component-based design, client-side routing, API integration, responsive CSS

**Important Setup Notes:** Create the exact folder structure, activate the virtual environment, install dependencies, run migrations, and ensure CORS is configured. **Common Errors to Avoid:** Port conflicts (Django on 8000, React on 3000), token expiration (1 hour), CORS errors, and migration issues.

## Future Enhancements
User profiles, categories/tags, search functionality, comments system, image upload, email notifications, dark mode, multi-language support

## Screenshots
![Homepage](https://via.placeholder.com/800x400?text=Blog+Homepage)
![Mobile View](https://via.placeholder.com/400x600?text=Mobile+Responsive)

## Contact
**Developer:** Shiwani Raj  
**GitHub:** https://github.com/shiwaniraj203 
**Email:** shiwaniraj203@gmail.com
**LinkedIn:** www.linkedin.com/in/shiwani-raj-1430761b8

---
Created by Shiwani Raj. This project demonstrates full-stack development skills and is intended for educational and portfolio purposes. 