function login(){

const voucher=document.getElementById("voucher").value;

if(voucher===""){

alert("Please enter your voucher.");

return;

}

localStorage.setItem("voucher",voucher);

window.location="dashboard.html";

}
