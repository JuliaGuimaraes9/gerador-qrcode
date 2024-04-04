const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

// EVENTOS
function generateQRCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerHTML = "Gerando QR Code..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerHTML = "Código criado!"
    })
}

qrCodeBtn.addEventListener("click", () => {
    generateQRCode()
});

qrCodeInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") generateQRCode()
})

// LIMPAR ÁREA DO QRCODE
qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) 
    container.classList.remove("active");
    qrCodeBtn.innerHTML = "Gerar QR Code!"

})