const voucher = localStorage.getItem("voucher");

if(!voucher){
    window.location="index.html";
}

document.getElementById("welcome").innerHTML =
`Welcome!<br><small class="text-muted">Voucher: ${voucher}</small>`;

function logout(){

localStorage.removeItem("voucher");

window.location="index.html";

}
