# K72 - Interactive Agency Website Clone

A modern, interactive website inspired by the K72 agency aesthetic, built with React, GSAP animations, and Tailwind CSS. This project showcases advanced web animations, smooth transitions, and immersive user experiences.

## 🚀 Features

- **Advanced GSAP Animations**: Smooth page transitions with stair-step reveals
- **Video Background**: Full-screen video integration on homepage
- **Interactive Navigation**: Full-screen overlay navigation with smooth animations
- **Responsive Design**: Built with Tailwind CSS for mobile-first approach
- **React Router**: Single-page application with smooth route transitions
- **Modern Tech Stack**: React 18, Vite, GSAP, Tailwind CSS 4

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.2.0
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: GSAP 3.13.0 with @gsap/react
- **Routing**: React Router DOM 7.8.0
- **Development**: ESLint for code quality

## 📁 Project Structure

```
k72/
├── public/
│   ├── video.mp4           # Background video asset
│   ├── vite.svg
│   └── fonts/
│       ├── Lausanne-300.woff2  # Custom typography
│       └── Lausanne-500.woff2
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── Stairs.jsx      # Page transition component
│   │   ├── home/
│   │   │   ├── HomeBottomText.jsx
│   │   │   ├── HomeHeroText.jsx
│   │   │   └── Video.jsx       # Video background component
│   │   ├── Navigation/
│   │   │   ├── FullScreenNav.jsx
│   │   │   └── Navbar.jsx
│   │   ├── projects/
│   │   │   └── ProjectCard.jsx
│   │   └── ui/
│   ├── context/
│   │   └── NavContext.jsx      # Navigation state management
│   ├── data/                   # Static data files
│   ├── pages/
│   │   ├── Agence.jsx         # About page
│   │   ├── Home.jsx           # Homepage
│   │   └── Projects.jsx       # Projects showcase
│   ├── utils/                 # Utility functions
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd k72
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 🎨 Key Components

### Navigation System
- **Navbar.jsx**: Fixed navigation bar with custom K72 logo
- **FullScreenNav.jsx**: Overlay navigation menu with smooth animations
- **NavContext.jsx**: Context provider for navigation state management

### Home Page Components
- **Video.jsx**: Full-screen background video player
- **HomeHeroText.jsx**: Animated hero text with GSAP
- **HomeBottomText.jsx**: Bottom section text with reveal animations

### Animation Components
- **Stairs.jsx**: Signature stair-step page transition effect using GSAP timelines

### Pages
- **Home**: Video background with animated text overlays
- **Agence**: About/agency information page
- **Projects**: Portfolio showcase page

## 🎭 Animation Features

- **Page Transitions**: Smooth stair-step reveals between routes
- **Text Animations**: Character and word-level animations
- **Navigation Animations**: Smooth overlay menu transitions
- **Scroll Animations**: Progressive content reveals
- **Video Integration**: Seamless background video playback

## 🎯 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint checks
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎪 Custom Fonts

The project uses custom Lausanne fonts located in `/public/fonts/`:
- Lausanne-300.woff2 (Light)
- Lausanne-500.woff2 (Medium)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes. Please respect the original K72 agency's work and use this code responsibly.

## ⚡ Performance Tips

- Video assets are optimized for web delivery
- GSAP animations use hardware acceleration
- Tailwind CSS is purged for minimal bundle size
- Vite provides fast HMR during development

## 🐛 Troubleshooting

**Common Issues:**

1. **Video not loading**: Ensure `video.mp4` is in the `/public` folder
2. **Fonts not displaying**: Check font files are in `/public/fonts/`
3. **GSAP animations not working**: Verify GSAP license and imports
4. **Build errors**: Clear `node_modules` and reinstall dependencies

---

Built with ❤️ using React, GSAP, and modern web technologies.
