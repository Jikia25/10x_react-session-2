This project is a modular component-based implementation of a **client testimonial section** built using **React**.
src/
├── App.jsx
├── main.jsx
├── components/
│ └── MainTestimonials/
│ ├── MainTestimonials.jsx
│ ├── mainTestimonials.css
│ └── Testimonal/
│ ├── Testimonal.jsx
│ ├── testimonal.css

 Features

- Dynamic rendering of client testimonials
- Clean separation between components
- Styled using modular CSS
- Fully functional with no React warnings or errors

MainTestimonials.jsx`
- Main container for the testimonial section
- Renders a `<section>` with a heading and multiple `Testimonal` components
- Maps through a `data` array and passes props to each testimonial
- **Key Fix**: Now each `Testimonal` component receives a unique `key` (via `index`)

`Testimonal.jsx`
- Receives individual `title` and `text` props
- Displays a testimonial message from a client
- **Fix Applied**: Used correct prop destructuring to eliminate rendering issues

Technologies Used

- React (with Vite setup)
- JSX
- CSS Modules
- ES6+

- How to Run

``bash
# Install dependencies
npm install

# Run development server
npm run dev

Then open your browser at: http://localhost:5173
