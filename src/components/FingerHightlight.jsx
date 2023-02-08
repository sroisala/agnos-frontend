const MarkedFingers = ({partOfFingers}) => {
  if (partOfFingers === "") {
    return <div></div>;
  }
  if (partOfFingers === "others") {
    return (
      <div>
        <img
          src={require("../images/finger/" + partOfFingers + "-highlight.png")}
          alt={partOfFingers}
          useMap="#defaultFingers"
          class="absolute w-[25rem] top-0 left-0"
        />
      </div>
    );
  }
  return (
    <div>
      <img
        src={require("../images/finger/" + partOfFingers + "-active.png")}
        alt={partOfFingers}
        useMap="#defaultFingers"
        class="absolute w-[25rem] top-0 left-0"
      />
      <img
        src={require("../images/finger/" + partOfFingers + "-highlight.png")}
        alt={partOfFingers}
        useMap="#defaultFingers"
        class="absolute w-[25rem] top-0 left-0"
      />
    </div>
  );
};

export default MarkedFingers;