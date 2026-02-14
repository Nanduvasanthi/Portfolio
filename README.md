# Nandu Vasanthi - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with React, Tailwind CSS, and Framer Motion.

## Live Demo

- **Frontend**: [https://portfolio-frontend-26uz.onrender.com](https://portfolio-frontend-26uz.onrender.com)

## Features

### Frontend
- Modern UI/UX - Clean, professional design with smooth animations
- Dark/Light Mode - Theme toggle with persistent user preference
- Fully Responsive - Optimized for all devices (mobile, tablet, desktop)
- Interactive Elements - Hover effects, typing animation, smooth scrolling
- Animations - Powered by Framer Motion for elegant transitions

### Pages/Sections
- Home - Introduction with typing animation for roles
- About - Personal background and quick facts
- Education - Academic qualifications timeline
- Tech Stack - Technologies and tools expertise
- Projects - Showcase of 3 major projects with screenshots
- Internships - Virtual internship experience at Infosys Springboard
- Contact - Functional contact form with Web3Forms integration

### Contact Form
- Web3Forms Integration - Reliable form handling without backend
- Professional Email Templates - HTML formatted emails
- Spam Protection - Built-in reCAPTCHA
- 250 free submissions per month

## Tech Stack

### Frontend
- React 18 - UI library
- Vite - Build tool and development server
- Tailwind CSS - Styling framework
- Framer Motion - Animations
- React Router DOM - Navigation
- Lucide React - Icons
- Web3Forms - Form handling service

## Project Structure

```
nandu-portfolio/
├── frontend/               # React frontend application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── assets/         # Images, documents
│   │   ├── components/     # Reusable components
│   │   ├── context/        # Theme context
│   │   ├── pages/          # Page components
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore              # Git ignore file
└── README.md               # Project documentation
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Clone the Repository
```bash
git clone https://github.com/Nanduvasanthi/Portfolio.git
cd Portfolio
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will run on http://localhost:5173

## Environment Variables

Create a `.env` file in the frontend folder:

```env
VITE_WEB3FORMS_KEY=your-web3forms-access-key
```

To get Web3Forms Access Key:
1. Go to https://web3forms.com
2. Enter your email address
3. Check your inbox for the access key
4. Copy and paste it in the .env file

## Deployment on Render

### Frontend Deployment
1. Push code to GitHub
2. Connect repository to Render
3. Create new Static Site
4. Configure:
   - Build Command: `cd frontend && npm install && npm run build`
   - Publish Directory: `frontend/dist`
5. Add environment variable:
   - `VITE_WEB3FORMS_KEY` = your-web3forms-access-key
6. Deploy

## Contact

- Email: nvasanthi2005@gmail.com
- GitHub: [Nanduvasanthi](https://github.com/Nanduvasanthi)
- LinkedIn: [miriyala-nandu-vasanthi](https://linkedin.com/in/miriyala-nandu-vasanthi/)
- Portfolio: [https://portfolio-frontend-26uz.onrender.com](https://portfolio-frontend-26uz.onrender.com)

## Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by Lucide React
- Animations by Framer Motion
- Built with React and Tailwind CSS
- Form handling by Web3Forms
- Deployed on Render

## Project Status

Completed - Live and fully functional
- Frontend deployed on Render
- Contact form using Web3Forms (250 submissions/month)
- Fully responsive on all devices
- Dark/Light mode support

---

Last Updated: February 14, 2026