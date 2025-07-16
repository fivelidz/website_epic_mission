# Epic Mission Website

A marketing website for Epic Mission - an ocean exploration and adventure content brand focused on diving, fishing, and authentic expedition experiences.

## Features

- **Hero Video Section**: Embedded YouTube video from the Great Astrolabe Reef expedition
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Adventure Showcase**: Featured expeditions with detailed descriptions
- **Video Gallery**: Embedded content from Epic Mission adventures
- **Community Focus**: Contact and social media integration
- **Modern UI/UX**: Clean, ocean-inspired design with smooth animations

## Project Structure

```
website_epic_mission/
├── index.html              # Main homepage
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── script.js      # Interactive functionality
│   ├── images/            # Image assets (to be added)
│   └── videos/            # Video assets (to be added)
├── pages/                 # Additional pages (future)
├── components/            # Reusable components (future)
└── README.md             # This file
```

## Getting Started

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/fivelidz/website_epic_mission.git
   cd website_epic_mission
   ```

2. **Serve the website locally**:
   ```bash
   # Using Python (if available)
   python -m http.server 8000
   
   # Or using Node.js
   npx http-server
   
   # Or using PHP
   php -S localhost:8000
   ```

3. **Open in browser**:
   Navigate to `http://localhost:8000`

### Deployment Options

#### GitHub Pages
1. Push changes to the main branch
2. Enable GitHub Pages in repository settings
3. Select "Deploy from a branch" and choose main branch

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command to nothing (static site)
3. Set publish directory to root (`/`)

#### Vercel
1. Import project from GitHub
2. No build configuration needed for static site
3. Deploy automatically

## Content Management

### Adding New Adventures
1. Update the `adventures-grid` section in `index.html`
2. Add new adventure cards following the existing structure
3. Update corresponding CSS if needed

### Adding New Videos
1. Update the `video-grid` section in `index.html`
2. Replace YouTube embed URLs with new content
3. Update video descriptions and metadata

### Customizing Colors/Branding
Main brand colors are defined in `assets/css/style.css`:
- Primary: `#00bcd4` (Ocean blue)
- Secondary: `#0097a7` (Darker ocean blue)
- Accent: `#333` (Dark gray)
- Background: `#f8f9fa` (Light gray)

## Technical Details

### Dependencies
- Google Fonts (Montserrat)
- No JavaScript frameworks required
- Pure CSS with modern features

### Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari, Chrome Mobile

### Performance Optimizations
- Lazy loading for images
- Optimized CSS animations
- Minimal JavaScript footprint
- Compressed video embeds

## Future Enhancements

- [ ] Add image gallery with lightbox functionality
- [ ] Implement blog/news section
- [ ] Add expedition booking system
- [ ] Create member login area
- [ ] Add search functionality
- [ ] Implement SEO optimizations
- [ ] Add analytics tracking
- [ ] Create mobile app integration

## Brand Guidelines

### Typography
- Primary: Montserrat (Clean, modern sans-serif)
- Weights: 300 (Light), 400 (Regular), 600 (Semi-bold), 700 (Bold)

### Color Palette
- Ocean Blue: #00bcd4 (Primary actions, links)
- Deep Ocean: #0097a7 (Accents, gradients)
- Coral: #ff6b6b (Call-to-action buttons)
- Sand: #f8f9fa (Background sections)
- Reef: #333 (Text, dark elements)

### Voice & Tone
- Adventurous yet authentic
- Inspiring but not overwhelming
- Professional with personality
- Focus on community and experience

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices
5. Submit a pull request

## License

© 2025 Epic Mission. All rights reserved.

## Contact

For questions about the website or Epic Mission brand:
- Email: info@epicmission.com
- Website: [epicmission.com](https://epicmission.com)
- YouTube: [Epic Mission Channel](https://www.youtube.com/watch?v=_o0C9hxyf0w)