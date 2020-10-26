import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-light">
          Kết quả: <span className="text-danger">{this.props.ketQua}</span>
        </div>

        <div className="display-4 text-light">
          Số bàn chơi:{" "}
          <span className="text-warning">{this.props.soBanChoi}</span>
        </div>

        <div className="display-4 text-light">
          Số bàn thắng:{" "}
          <span className="text-primary">{this.props.soBanThang}</span>
        </div>
        <button
          className="btn btn-success mt-5"
          onClick={() => {
            this.props.playGame(
              this.props.mangKeoBuaBao.find((item) => item.datCuoc === true)
            );
          }}
        >
          Play Game
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ketQua: state.stateBaiTapOanTuXi.ketQua,
    soBanChoi: state.stateBaiTapOanTuXi.soBanChoi,
    soBanThang: state.stateBaiTapOanTuXi.soBanThang,
    mangKeoBuaBao: state.stateBaiTapOanTuXi.mangKeoBuaBao,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: (maCuoc) => {
      let soLan = 0;
      let randomNhieuLan = setInterval(() => {
        const action = {
          type: "RAN_DOM",
          maCuoc,
        };
        dispatch(action);
        soLan += 1;
        if (soLan > 10) {
          clearInterval(randomNhieuLan);
          const action = {
            type: "KET_QUA",
            maCuoc,
          };
          dispatch(action);
        }
      }, 100);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinTroChoi);
