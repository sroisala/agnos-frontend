import React, {useState} from "react";
import AbsPage from "./components/Abs";
import FingersPage from "./components/Finger";

const App = () => {
  const [currentPage, setCurrentPage] = useState(true);
  const changePage = () => {
    setCurrentPage(!currentPage);
  };
  return (
    <div class="grid grid-cols-1 justify-center container h-screen mx-auto">
      <div class="flex justify-center mt-auto">
        {currentPage ? <AbsPage /> : <FingersPage />}
      </div>
      <div class="flex justify-center">
        <button
         class="rounded-lg overflow-hidden mx-auto mt-2 text-xl bg-gray-200 hover:bg-blue-700 text-blue-gray-300 hover:text-white w-[30rem] h-16"
          onClick={(_) => changePage()}
        >
          {currentPage ? "ต่อไป" : "ย้อนกลับ"}
        </button>
      </div>
    </div>
  );
};

export default App;