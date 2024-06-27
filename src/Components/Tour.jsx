import Card from "./Card";

const Tour = ({ tours, removeTour }) => {
  return (
    <div className="container">
      <div>
        <h1 className="title ">Plan with Nav</h1>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
};

export default Tour;
