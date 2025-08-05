import "./header.css";
function Header() {
  return (
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
  );
}
export default Header;
