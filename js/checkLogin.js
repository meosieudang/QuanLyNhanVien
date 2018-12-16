//kiem tra dang nhap
var currentUser = localStorage.getItem('currentUser');
if(!currentUser){
    window.location.assign('dangnhap.html');
}