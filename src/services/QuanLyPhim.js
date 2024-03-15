import { http } from "./config";
export const quanLyPhimServ = {
  getAllBanner: () => {
    return http.get("/QuanLyPhim/LayDanhSachBanner");
  },
  getAllMovie: () => {
    return http.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
};
