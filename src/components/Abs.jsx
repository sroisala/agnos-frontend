import React, {useState} from "react";
import MarkedAbs from "./AbsHighlight";
import {AbsPosition} from "./AbsPosition";

const AbsPage = () => {
  const [partOfAbs, setPartOfAbs] = useState("");

  const handleSelect = (selected) => {
    setPartOfAbs(selected);
  };

  return (
    <div class="relative bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 mx-auto max-w-lg rounded-lg px-10">
       <p class="flex justify-center align-middle mb-2 font-kanit">
        ปวดท้องที่บริเวณใดมากที่สุด?
      </p>
      <div class="relative">
        <img
          src={require("../images/abs/default-abs.png")}
          alt="default-abs"
          useMap="#defaultAbs"
          width="400"
          height="auto"
          class="relative w-[25rem] top-0 left-0"
        />
        <MarkedAbs partOfAbs={partOfAbs} />

        <map name="defaultAbs">
          {AbsPosition.map((each) => (
            <area
              key={each.coor}
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

export default AbsPage;