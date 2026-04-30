Josh Williams | Front-End Developer & Technical Leader

A performance-focused professional portfolio and integrated digital resume. Built with a focus on modular component architecture, responsive design, and high-fidelity print capabilities for technical recruitment.

Tech Stack
 - Framework: React.js (Vite)
 - Styling: Tailwind CSS v4
 - Icons: Lucide React
 - Deployment: Netlify
 - Architecture: Component-based UI with CSS Modules for isolated document styling

 Key Features
  - Dual-Purpose Resume Engine: A coded React component that mirrors a professional 8.5" x 11" layout.  Uses CSS @media print logic to ensure the web-view translates perfectly to a physical PDF without layout shifts.
  - Responsive Viewport Scaling: Implements advanced CSS transforms to maintain a high-fidelity document feel on mobile devices while preventing horizontal overflow.
  - Performance Optimized: Leveraging Vite for lighting-fast Hot Module Replacement and optimized production bundling.
  - Accessible UI: Built with semantic HTML5 and accessible navigation patterns (including a managed mobile menu state).

  Project Structure
    ├── public/              # Static assets (PDFs, high-res imagery)
    ├── src/
    │   ├── components/      # Modular UI components (Navbar, Hero, Resume)
    │   ├── App.jsx          # Main application entry and layout routing
    │   └── main.jsx         # React DOM hydration