import "./App.css";
import data from "./data";
import { useState } from "react";
import Tour from "./Components/Tour";
// import Counter from "./ConterApp/Counter";

function App() {
  const [tours, setTours] = useState(data);
  // remove toour logic
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  // when all tour is remove than the show the refresh button to reload the tour
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2 className="heading bg-gray-900">No Tour left</h2>
        <button
          onClick={() => setTours(data)}
          className="btn-white bg-gray-300"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      {/* <Counter /> */}
      <div>
        <Tour tours={tours} removeTour={removeTour}></Tour>
      </div>
    </>
  );
}

export default App;
