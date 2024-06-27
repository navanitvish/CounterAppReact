import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function DecreaseHandler() {
    setCount(count - 1);
  }

  function InecreaseHandler() {
    setCount(count + 1);
  }

  function ResetHandler() {
    setCount(0);
  }
  return (
    <div>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 bg-blue-gray-900">
        <div className="text-[white] font-medium text-2xl">
          Increament && Decreament
        </div>

        <div className="bg-white flex justify-center  gap-12 py-3 text-[black] text-[25px]">
          <button
            className="border-r-2 text-center w-20 border-[blue] text-5xl font-bold"
            onClick={DecreaseHandler}
          >
            -
          </button>
          <div className="font-bold">{count}</div>
          <button
            className="border-l-2 text-center w-20 border-[blue] text-5xl font-bold"
            onClick={InecreaseHandler}
          >
            +
          </button>
        </div>
        <button
          onClick={ResetHandler}
          className="bg-blue-300 text-center text-3xl px-3 py-3 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
