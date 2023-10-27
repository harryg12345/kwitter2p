function logoutUser(){
    localStorage.removeItem("login_key")
localStorage.removeItem("room_key")
window.location="index.html"
}