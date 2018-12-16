function NguoiDungService() {
    this.DangNhap = function(user, password){
        var url =  `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${user}&matkhau=${password}`
        return axios({
            method: "POST",
            url: url
        })
    }
}