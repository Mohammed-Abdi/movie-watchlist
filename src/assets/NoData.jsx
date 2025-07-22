import Lottie from "lottie-react";
import SleepyCat from "../assets/json/SleepyCat.json";

function NoData({ text, style }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "min(20rem, 100%)",
        marginInline: "auto",
        ...style,
      }}
    >
      <div className="w-full max-w-xl mx-auto" style={{ marginInline: "3rem" }}>
        <Lottie
          animationData={SleepyCat}
          loop={true}
          autoplay={true}
          className="w-full h-auto"
        />
      </div>
      <p style={{ transform: "translateY(-3rem)" }}>
        {text || "No data found"}
      </p>
    </div>
  );
}

export default NoData;
