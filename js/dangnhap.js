var nguoiDung = new NguoiDungService();
function getEl(id) {
    return document.getElementById(id);
}

function DangNhap() {
    var user = getEl('txtTaiKhoan').value;
    var password = getEl('txtMatKhau').value;

    nguoiDung.DangNhap(user, password)
    .then(function(res){
        // console.log(res.data);
        if(res.data.MaLoaiNguoiDung === 'QuanTri'){
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            window.location.assign('index.html');
        }
    })
    .catch(function(ex) {
        console.log(ex.message);
    })
}
getEl('btnDangNhap').addEventListener('click', DangNhap);
//axios tra ve cai promise > success > .then() else fail > .catch()
