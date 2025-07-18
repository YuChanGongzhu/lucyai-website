import React from "react";
import Bg from "../../assets/bg.svg";

const styles = {
  body: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#d6dded",
    border: "1px solid green",
    position: "relative",
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%", // 限制图片高度
    zIndex: -1,
  },

};

const Home = () => {
  return (
    <div style={styles.body}>
      <div style={styles.imageContainer}>
        <img
          src={Bg}
          style={{ border: "1px solid blue", width: "100%", height: "100%", objectFit: "cover" }}
          alt="background"
        />
      </div>

      <div>
        <div style={{ border: "1px solid red", width: 100, height: 100 }}>
          home
        </div>
      </div>
    </div>
  );
};

export default Home;
