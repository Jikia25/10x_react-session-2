import Testimonal from "./Testimonal/Testimonal";
import "./mainTestimonials.css";
function MainTestimonials() {
  const data = [
    {
      title: "I lost 20 pounds and feel amazing!",
      text: "- Emily Fit",
    },
    {
      title: "The trainers really know how to motivate!",
      text: "- Jason Lift",
    },
  ];
  return (
    <section className="testimonials">
      <h2>Client Results</h2>
      {data.map((item, index) => (
        <Testimonal key={index} title={item.title} text={item.text} />
      ))}
    </section>
  );
}
export default MainTestimonials;
