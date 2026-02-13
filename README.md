# Nandu Vasanthi - Full Stack Developer Portfolio

![Portfolio Preview](frontend/src/assets/images/profile.jpg)

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with React, Tailwind CSS, and Framer Motion with a Node.js backend for the contact form.

## Live Demo

[View Live Portfolio](#) (Add your deployed link here)

## Features

### Frontend
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Dark/Light Mode** - Theme toggle with persistent user preference
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements** - Hover effects, typing animation, smooth scrolling
- **Animations** - Powered by Framer Motion for elegant transitions

### Pages/Sections
- **Home** - Introduction with typing animation for roles
- **About** - Personal background and quick facts
- **Education** - Academic qualifications timeline
- **Tech Stack** - Technologies and tools expertise
- **Projects** - Showcase of 3 major projects with screenshots
- **Internships** - Virtual internship experience at Infosys Springboard
- **Contact** - Functional contact form with email integration

### Backend
- **Contact Form API** - Node.js/Express endpoint
- **Email Integration** - Nodemailer with Gmail SMTP
- **Professional Email Templates** - HTML formatted emails
- **Environment Variables** - Secure credential management

## Tech Stack

### Frontend
- React 18 - UI library
- Vite - Build tool and development server
- Tailwind CSS - Styling framework
- Framer Motion - Animations
- React Router DOM - Navigation
- Axios - API requests
- Lucide React - Icons

### Backend
- Node.js - Runtime environment
- Express - Web framework
- Nodemailer - Email sending
- CORS - Cross-origin resource sharing
- Dotenv - Environment variables

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
├── backend/                 # Node.js backend API
│   ├── routes/             # API routes
│   │   └── contact.js      # Contact form endpoint
│   ├── server.js           # Main server file
│   ├── package.json
│   └── .env                # Environment variables (not in repo)
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

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env  # Create environment file
# Edit .env with your credentials
npm run dev
```
The backend will run on http://localhost:5000

## Environment Variables

Create a `.env` file in the backend folder:

```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

To get Gmail App Password:
1. Enable 2-Step Verification on your Google account
2. Go to Security > App Passwords
3. Generate a password for Mail
4. Copy the 16-digit password

## Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the project:
   ```bash
   cd frontend
   npm run build
   ```
2. Deploy the `dist` folder to Vercel or Netlify

### Backend Deployment (Render/Railway)
1. Push code to GitHub
2. Connect your repository to Render or Railway
3. Add environment variables
4. Deploy

## Contact

- **Email**: nvasanthi2005@gmail.com
- **GitHub**: [Nanduvasanthi](https://github.com/Nanduvasanthi)
- **LinkedIn**: [miriyala-nandu-vasanthi](https://linkedin.com/in/miriyala-nandu-vasanthi/)

## License

This project is for personal portfolio purposes. All rights reserved.

## Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by Lucide React
- Animations by Framer Motion
- Built with React and Tailwind CSS