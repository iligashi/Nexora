# Sword Agency Website

A modern, responsive website for Sword Agency built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- ⚡ Fast and optimized performance
- 🔄 Smooth animations and transitions
- 📱 Mobile-first approach
- 📧 Contact form with EmailJS integration
- 🎯 Portfolio showcase with filtering
- 🛠 Service pages with detailed information

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- EmailJS

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sword-agency.git
cd sword-agency
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## Project Structure

```
sword-agency/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── styles/        # Global styles and Tailwind config
│   ├── assets/        # Images and other static files
│   ├── hooks/         # Custom React hooks
│   └── utils/         # Utility functions
├── public/            # Public assets
└── package.json       # Project dependencies
```

## Customization

### Colors
You can customize the color scheme by modifying the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      orange: {
        500: '#FF5722',
        600: '#F4511E',
      },
    },
  },
}
```

### Fonts
The website uses Inter font by default. To change the font, update:
1. The Google Fonts import in `src/styles/globals.css`
2. The font family in `tailwind.config.js`

## Deployment

To build the website for production:

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - your.email@example.com
Project Link: [https://github.com/yourusername/sword-agency](https://github.com/yourusername/sword-agency) 