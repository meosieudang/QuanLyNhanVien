function NhanVienService() {
    this.layDSNV = function(){
        var url = 'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien'
        return axios({
            method: 'GET',
            url: url
        })
    }
    this.themNhanVien = function(nhanVienMoi) {
        var url = 'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien'
        return axios({
            method: 'POST',
            url: url,
            data: nhanVienMoi
        })
    }
    this.capNhatNhanVien = function(nhanVienCapNhat) {
        var url = `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien/${nhanVienCapNhat.MaNV}`
        return axios({
            method: "PUT",
            url: url,
            data: nhanVienCapNhat
        })
    }
    this.xoaNhanVien = function(index) {
        var url = `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/nhanVien/${DSNV[index].MaNV}`
        return axios({
            method: "DELETE",
            url: url,
            // data: nhanVien
        })
    }
}