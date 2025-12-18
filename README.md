# 🚀 Ankit Gupta - Cybersecurity Portfolio

A sophisticated hacker-themed portfolio website for showcasing cybersecurity skills, projects, and services. Built with pure HTML, CSS, and JavaScript.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-00ff88?style=for-the-badge&logo=matrix&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-00ff88?style=for-the-badge)
![GitHub](https://img.shields.io/badge/GitHub-hyperdargo-00ff88?style=for-the-badge&logo=github)

## 🌐 Live Demo
**[https://ankitgupta.com.np](https://ankitgupta.com.np)**

## ✨ Features

### 🎨 **Visual Design**
- **Hacker/Matrix Theme**: Neon green on black background with glowing effects
- **Responsive Design**: Fully responsive across all devices
- **Theme Switcher**: Three color themes (Green, Blue, Red)
- **Animations**: Smooth transitions and hover effects
- **Interactive Terminal**: Fully functional terminal simulator

### ⚡ **Interactive Elements**
- **Single Page Application**: Smooth navigation without page reloads
- **Interactive Terminal**: 
  - Command-line interface with 10+ commands
  - Hidden CTF challenge with prize
  - System scan simulation
  - Command history (Arrow Up/Down)
- **Theme Customization**: Persistent theme selection
- **Copy-to-Clipboard**: For contact information
- **Real-time Updates**: Service status monitoring

### 📁 **Portfolio Sections**
1. **Home** - Hero section with statistics and quick links
2. **About** - Professional summary and work history
3. **Education** - Academic background
4. **Skills** - Technical skills categorized
5. **Projects** - Detailed project showcase (6+ major projects)
6. **Services** - DTEmpire service status
7. **Documentation** - Links to technical documentation
8. **Discord Bots** - Bot showcase with commands
9. **Contact** - Contact information and social links

## 🛠️ Technologies Used

### **Frontend**
- **HTML5** - Semantic markup
- **CSS3** - Custom styles with CSS variables
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icon library
- **Google Fonts** - Segoe UI, Consolas

### **Features Implemented**
- Intersection Observer API for scroll animations
- LocalStorage for theme persistence
- History API for SPA navigation
- Canvas API (for matrix effect)
- Clipboard API for copy functionality
- CSS Grid & Flexbox for layouts
- CSS Animations & Transitions

## 🚀 Quick Start

### Local Development
1. Clone the repository:
```bash
git clone https://github.com/hyperdargo/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

3. Visit `http://localhost:8000` in your browser

### File Structure
```
portfolio/
├── index.html              # Main HTML file
├── style.css              # Main stylesheet
├── script.js             # JavaScript functionality
├── themes.css            # Theme-specific styles
├── images/               # Image assets
│   ├── logo.png         # Browser tab icon
│   └── profile.png      # Profile picture
└── README.md            # This file
```

## 🔧 Configuration

### Customizing Content
Edit the following sections in `index.html`:

1. **Profile Information** - Update name, title, contact info
2. **Projects** - Add/remove project cards
3. **Skills** - Update skill categories and tags
4. **Services** - Modify service cards and links
5. **Contact** - Update contact information

### Customizing Terminal
Edit `script.js` to modify terminal commands:
```javascript
// Add custom commands
switch(cmd) {
    case 'yourcommand':
        addTerminalLine('Your custom response');
        break;
    // ... existing commands
}
```

### Changing Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary: #0a0f0a;          /* Background */
    --secondary: #00ff88;        /* Primary accent */
    --accent: #00cc66;           /* Secondary accent */
    --text: #e0ffe0;             /* Text color */
    /* ... other variables */
}
```

## 🎮 Terminal Features

### Available Commands
```
help        - Show available commands
clear       - Clear terminal screen
ls          - List directory contents
cd [dir]    - Change directory
whoami      - Show current user
date        - Show current date and time
echo [text] - Print text to terminal
scan        - Scan system for anomalies
exit        - Close terminal
```

### Hidden CTF Challenge
1. Run `scan` command to detect anomaly
2. Use `cd /home/dtempire/flag` to access hidden directory
3. Find the hidden flag and claim your prize!

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔒 Security Features

- **Input Validation**: All terminal inputs are sanitized
- **LocalStorage**: Only used for theme preference
- **No External Dependencies**: All code is self-contained
- **Secure by Design**: No sensitive data in client-side code

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Repository Settings → Pages
3. Select main branch and `/root` folder
4. Save and wait for deployment

### Netlify
1. Drag and drop the folder to Netlify
2. Or connect your GitHub repository
3. Automatic deployment on push

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Use semantic HTML
- Follow existing CSS naming conventions
- Add comments for complex JavaScript
- Test on multiple screen sizes
- Verify all links work

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by hacker/matrix aesthetics
- Font Awesome for icons
- All DTEmpire service users and contributors
- CTF community for inspiration

## 📞 Contact

**Developer**: Ankit Gupta  
**GitHub**: [@hyperdargo](https://github.com/hyperdargo)  
**Discord**: hyperdargo  
**Email**: email@ankitgupta.com.np  
**Website**: [https://ankitgupta.com.np](https://ankitgupta.com.np)

## 🌟 Related Projects

- [DTEmpire AI Terminal](https://github.com/hyperdargo/DTEmpire-AI-Web-and-Discord-Bot)
- [DTEmpire Music Bot](https://github.com/hyperdargo/Discord-Music-Bot)
- [DTEmpire Documentation](https://github.com/hyperdargo/Documentation)
- [AI Image Generator](https://github.com/hyperdargo/Image-Generate)

---

<div align="center">

**Made with ❤️ by Ankit Gupta**

![DTEmpire](https://img.shields.io/badge/DTEmpire-Community-00ff88?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-00ff88?style=for-the-badge)

*Empowering the future of cybersecurity*

</div>

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**
   - Check file paths in HTML
   - Ensure images are in correct folder
   - Verify file permissions

2. **Terminal not working**
   - Check browser console for errors
   - Ensure script.js is loaded
   - Try clearing browser cache

3. **Theme not saving**
   - Check if localStorage is enabled
   - Clear browser cache and retry

4. **Responsive issues**
   - Check CSS media queries
   - Test on different screen sizes
   - Clear browser cache

### Getting Help
- 📖 Check this README first
- 🐛 Open an issue on GitHub
- 💬 Contact via email or Discord

---

**⭐ Star this repository if you find it helpful!**

**🔐 Happy hacking!**
