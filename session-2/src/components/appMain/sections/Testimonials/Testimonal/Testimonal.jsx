import "./testimonal.css";
function Testimonal({title,text}) {
  return (
    <div className="testimonial">
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
}
export default Testimonal;
