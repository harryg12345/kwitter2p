function addUser() {
    login_name = document.getElementById("input_login").value;
    localStorage.setItem("login_key", login_name)
    window.location = "kwitter_room.html";


}


