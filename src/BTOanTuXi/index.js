import React, { Component } from "react";
import Computer from "./Computer";
import Player from "./Player";
import ThongTinTroChoi from "./ThongTinTroChoi";
import "./BaiTapOanTuXi.css";

export default class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className=" BTOanTuXi row pt-5">
        <div className="col-4">
          <Player />
        </div>
        <div className="col-4">
          <ThongTinTroChoi />
        </div>
        <div className="col-4">
          <Computer />
        </div>
      </div>
    );
  }
}
