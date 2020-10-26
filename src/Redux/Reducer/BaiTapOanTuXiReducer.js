// state của bài tập game xúc xắc
const stateDefault = {
  mangKeoBuaBao: [
    { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: true },
    { ma: "bao", hinhAnh: "./img/bao.png", datCuoc: false },
  ],
  ketQua: "Chơi đeeee",
  soBanChoi: 0,
  soBanThang: 0,
  computer: { ma: "keo", hinhAnh: "./img/keo.png" },
};
const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let mangKeoBuaBaoUpdate = [...state.mangKeoBuaBao];
      mangKeoBuaBaoUpdate = mangKeoBuaBaoUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangKeoBuaBao = mangKeoBuaBaoUpdate;
      return { ...state };
    }
    case "RAN_DOM": {
      let indexNgauNhien = Math.floor(Math.random() * 3);
      let componentNgauNhien = state.mangKeoBuaBao[indexNgauNhien];
      state.computer = componentNgauNhien;
      return { ...state };
    }
    case "KET_QUA": {
      state.soBanChoi += 1;
      let player = state.mangKeoBuaBao.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo":
          {
            if (computer.ma == "keo") {
              state.ketQua = "Hòa";
            } else if (computer.ma == "bua") {
              state.ketQua = "Bạn thua";
            } else {
              state.ketQua = "Bạn thắng";
              state.soBanThang += 1;
            }
          }
          break;
        case "bua":
          {
            if (computer.ma == "keo") {
              state.ketQua = "Bạn thắng";
              state.soBanThang += 1;
            } else if (computer.ma == "bua") {
              state.ketQua = "Hòa";
            } else {
              state.ketQua = "Bạn thua";
            }
          }
          break;
        case "bao":
          {
            if (computer.ma == "keo") {
              state.ketQua = "Bạn thua";
            } else if (computer.ma == "bua") {
              state.ketQua = "Bạn thắng";
              state.soBanThang += 1;
            } else {
              state.ketQua = "Hòa";
            }
          }
          break;
        default:
          state.ketQua = "Error !!!";
      }
    }
    default:
      return { ...state };
  }
};

export default BaiTapOanTuXiReducer;
