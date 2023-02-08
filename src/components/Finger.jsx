import React, {useState} from "react";
import MarkedFingers from "./FingerHightlight";
import {FingerPosition} from "./FingerPosition";

const FingersPage = () => {
  const [partOfFingers, setPartOfFingers] = useState("");

  const handleSelect = (selected) => {
    setPartOfFingers(selected);
  };

  return (
    <div class="relative bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 mx-auto max-w-lg rounded-lg px-10">
      <p class="flex justify-center align-middle mb-2">
        จุดไหนที่คุณปวดนิ้วมากที่สุด?
      </p>
      <div class="relative">
        <img
          src={require("../images/finger/default-finger.png")}
          alt="default-fingers"
          useMap="#defaultFingers"
          class="relative w-[25rem] top-0 left-0"
        />
        <MarkedFingers partOfFingers={partOfFingers} />

        <map name="defaultFingers">
          {FingerPosition.map((each) => (
            <area
              shape={each.shape}
              coords={each.coor}
              alt={each.area}
              onClick={(_) => handleSelect(each.area)}
              class="cursor-pointer"
            />
          ))}
        </map>
      </div>
    </div>
  );
};

export default FingersPage;