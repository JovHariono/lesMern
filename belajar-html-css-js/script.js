var total = 120000;
var txtTotal = document.querySelector("#textTotal");
txtTotal.value = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
}).format(total);

var txtBayar = document.querySelector("#txtBayar");
var txtKembalian = document.querySelector("#txtKembalian");
txtKembalian.value = 0;

txtBayar.addEventListener("keyup", (e) => {
  var bayar = parseInt(e.target.value || 0); // NaN

  if (bayar >= total) {
    txtBayar.style.background = "#baffb8";
    var hasil = Math.abs(parseInt(total) - parseInt(bayar));
    txtKembalian.value = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(hasil);
  } else {
    txtKembalian.value = 0;
    txtBayar.style.background = "#ffadbb";
  }
});

var btnPilih = document.querySelectorAll(".btnPilih");

for (btn of btnPilih) {
  btn.addEventListener("click", function (e) {
    const harga = e.target.dataset.harga;
    total = parseInt(harga || 0);
    txtTotal.value = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(harga);
    console.log(Object.assign({}, e.target.dataset));
  });
}

// var txtUsername = document.getElementById("txtUsername");
// var txtPassword = document.getElementById("txtPassword");
// var tampilUsername = document.querySelector("#tampilUsername");
// var tampilPassword = document.querySelector("#tampilPassword");
// var btnSignIn = document.querySelector("#btnSignIn");

// var tampung = {
//   username: "",
//   password: "",
// };

// txtUsername.addEventListener("keyup", function (e) {
//   tampung.username = e.target.value;
// });

// txtPassword.addEventListener("keyup", function (e) {
//   tampung.password = e.target.value;
// });

// btnSignIn.addEventListener("click", function (e) {
//   tampilUsername.innerHTML = tampung.username;
//   tampilPassword.innerHTML = tampung.password;
//   console.table(tampung);
// });
