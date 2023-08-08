// Input Element
const penyetorUang = document.getElementById("depositor") as HTMLInputElement;
const namaBank = document.getElementById("bank") as HTMLInputElement;
const penerimaUang = document.getElementById("receiver") as HTMLInputElement;
const jumlahUang = document.getElementById("amount") as HTMLInputElement;

// Button Element
const submit = document.getElementById("submitBtn") as HTMLButtonElement;

// Output Element
const transferDana = document.getElementById("transfer") as HTMLOutputElement;

// Function

function transferBerhasil(): void {
    const namaPenyetor = (penyetorUang.value);
    const bank = (namaBank.value);
    const namaPenerima = (penerimaUang.value);
    const amount = (jumlahUang.value);

    transferDana.textContent = `Transfer From ${namaPenyetor} to ${namaPenerima}, Bank Destination: ${bank}, Full Amount IDR ${amount}`;

    console.log(transferDana);

}

submit.addEventListener('click', transferBerhasil);