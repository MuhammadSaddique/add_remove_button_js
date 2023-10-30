
var _status = document.querySelector("h5");
var btn = document.querySelector("#add");

var check = 0;

btn.addEventListener("click",function(){
    if(check ==0){
        _status.innerHTML = "Friends";
        _status.style.color = "green";
        btn.innerHTML = "Remove Friend"
        check = 1
        
    }else{
        _status.innerHTML = "Stranger";
        _status.style.color = "red";
        btn.innerHTML = "Add Friend"
        check = 0;
        
    }
})
