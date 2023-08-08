"use strict";
// Input Element
const penyetorUang = document.getElementById("depositor");
const namaBank = document.getElementById("bank");
const penerimaUang = document.getElementById("receiver");
const jumlahUang = document.getElementById("amount");
// Button Element
const submit = document.getElementById("submitBtn");
// Output Element
const transferDana = document.getElementById("transfer");
// Function
function transferBerhasil() {
    const namaPenyetor = (penyetorUang.value);
    const bank = (namaBank.value);
    const namaPenerima = (penerimaUang.value);
    const amount = (jumlahUang.value);
    transferDana.textContent = `Transfer From ${namaPenyetor} to ${namaPenerima}, Bank Destination: ${bank}, Full Amount IDR ${amount}`;
    console.log(transferDana);
}
submit.addEventListener('click', transferBerhasil);
