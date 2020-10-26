import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  render() {
    return (
      <div>
        <div className="yourChoice">
          <img
            src={
              this.props.mangKeoBuaBao.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt={
              this.props.mangKeoBuaBao.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            className="w-50"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/player.png"
          alt="./img/player.png"
          style={{ width: 250 }}
        />
        <div className="d-flex justify-space-between align-items-center row">
          {this.props.mangKeoBuaBao.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
              border = { border: "5px solid #45D994" };
            }

            return (
              <div className="col-4">
                <button
                  className="btn bg-light rounded-circle"
                  style={border}
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                >
                  <img src={item.hinhAnh} className="btnItem" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangKeoBuaBao: state.stateBaiTapOanTuXi.mangKeoBuaBao,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      const action = {
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
