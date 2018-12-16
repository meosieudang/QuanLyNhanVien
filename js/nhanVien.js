//Prototype
function NhanVien(ho,ten,manv,ngaylam,chucvu) {
    this.Ho = ho;
    this.Ten = ten;
    this.MaNV = manv;
    this.NgayBatDau = ngaylam;
    this.ChucVu = chucvu;
    this.LuongCoBan = 500; 
    this.TinhLuong = function () {
        if (this.ChucVu === "sep") {
            return this.LuongCoBan * 3;
        }
        else if (this.ChucVu === "truongphong") {
            return this.LuongCoBan * 2;
        }
        else if (this.ChucVu === "nhanvien") {
            return this.LuongCoBan * 1;
        }
    }
}


