// File khai báo tất cả các state của ứng dụng
import { combineReducers } from "redux";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXiReducer";
// state(store) tổng của ứng dụng
export const rootReducer = combineReducers({
  // nơi khai báo các state theo từng nghiệp vụ
  stateBaiTapOanTuXi: BaiTapOanTuXiReducer,
});
