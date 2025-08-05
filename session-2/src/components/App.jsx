import "./app.css";
function App() {
  return (
    <div>
      <header>
        <div className="logo">
          <h1>FitLife</h1>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/programs">Programs</a>
          <a href="/trainers">Trainers</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <h2>Transform Your Life Today</h2>
          <p>Work out with top trainers and get the results you deserve.</p>
          <button>Start Free Trial</button>
        </section>

        {/* Programs */}
        <section className="programs">
          <h2>Our Programs</h2>
          <div className="program">
            <h3>HIIT Burn</h3>
            <p>High-intensity workouts to torch fat fast.</p>
          </div>
          <div className="program">
            <h3>Strength Training</h3>
            <p>Build lean muscle with progressive workouts.</p>
          </div>
          <div className="program">
            <h3>Yoga & Flexibility</h3>
            <p>Improve flexibility and reduce stress.</p>
          </div>
        </section>

        {/* Trainers */}
        <section className="trainers">
          <h2>Meet the Trainers</h2>
          <div className="trainer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
              alt="Trainer 1"
            />
            <h4>Jessica Power</h4>
            <p>Certified Personal Trainer</p>
          </div>
          <div className="trainer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
              alt="Trainer 2"
            />
            <h4>Mark Iron</h4>
            <p>Strength Coach & Nutritionist</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>Client Results</h2>
          <div className="testimonial">
            <p>"I lost 20 pounds and feel amazing!"</p>
            <p>- Emily Fit</p>
          </div>
          <div className="testimonial">
            <p>"The trainers really know how to motivate!"</p>
            <p>- Jason Lift</p>
          </div>
        </section>

        {/* Sidebar/About */}
        <aside className="sidebar">
          <h2>About FitLife</h2>
          <p>
            We’re passionate about helping people live healthier lives with
            expert guidance and community support.
          </p>
        </aside>
      </main>

      <footer>
        <p>&copy; 2025 FitLife. All rights reserved.</p>
        <nav>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
      </footer>
    </div>
  );
}
export default App;
