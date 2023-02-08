import {AbsArea} from "./AbsPosition";

const MarkedAbs = ({partOfAbs}) => {
  if (partOfAbs === "") {
    return <div></div>;
  }
  if (partOfAbs === "all-over-highlight") {
    return (
      <div>
        {AbsArea.map((each) => (
          <img
            src={require("../images/abs/" + each + ".png")}
            alt={each}
            useMap="#defaultAbs"
            class="absolute w-[25rem] top-0 left-0"
          />
        ))}
      </div>
    );
  }
  return (
    <div>
      <img
        src={require("../images/abs/" + partOfAbs + "-active.png")}
        alt={partOfAbs}
        useMap="#defaultAbs"
        class="absolute w-[25rem] top-0 left-0"
      />
      <img
        src={require("../images/abs/" + partOfAbs + "-highlight.png")}
        alt={partOfAbs}
        useMap="#defaultAbs"
        class="absolute w-[25rem] top-0 left-0"
      />
    </div>
  );
};

export default MarkedAbs;