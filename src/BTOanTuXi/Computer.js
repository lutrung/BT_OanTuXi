import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    let keyframes = `@keyframes randomItem${Date.now()} {
      from {top: 0px;}
      to {top: 200px;}
    }`;
    return (
      <div>
        <style>{keyframes}</style>
        <div
          className="computerChoice"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <img
            style={{
              left: "30%",
              position: "absolute",
              animation: `randomItem${Date.now()} 0.5s  `,
            }}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
            className="w-50"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/playerComputer.png"
          alt="./img/playerComputer.png"
          style={{ width: 250 }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computer: state.stateBaiTapOanTuXi.computer,
  };
};
export default connect(mapStateToProps)(Computer);
