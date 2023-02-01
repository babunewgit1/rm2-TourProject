import Tour from "./Tour";

const Tours = (props) => {
  return (
    <main>
      <section className="tourheading">
        <h2>Tour places</h2>
        <span></span>
        <div className="tour-wrapper">
          {props.tour.map((items) => {
            return <Tour key={items.id} obj={items} fun={props.fun} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Tours;
