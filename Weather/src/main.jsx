import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router";
import WeatherBlog from './Pages/Blogs';
import BlogPost from './Pages/Blogposts';
import AuthPage from './Pages/Login';
import BlogWriterPage from './Pages/BlogCreationPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/auth' element={<AuthPage />} />
      <Route path="/" element={<App />} />
      <Route path="/blogs" element={<WeatherBlog />} />
      <Route path= "/blogs/posts" element={<BlogPost />} />
      <Route path='/blogs/create' element={<BlogWriterPage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

