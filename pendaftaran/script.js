function submitForm(event) {
    event.preventDefault();
    
    let nama = document.getElementById('nama').value;
    let umur = document.getElementById('umur').value;
    let alamat = document.getElementById('alamat').value;
    let keluhan = document.getElementById('keluhan').value;

    // Kirim data ke server (simulasi)
    sendDataToServer(nama, umur, alamat, keluhan);
}

function sendDataToServer(nama, umur, alamat, keluhan) {
    // Simulasi pengiriman data, dalam implementasi nyata ini akan terhubung ke server
    setTimeout(() => {
        let responseDiv = document.getElementById('response');
        responseDiv.innerHTML = `
            <h3>Terima kasih!</h3>
            <p>Anda telah terdaftar dengan detail sebagai berikut:</p>
            <ul>
                <li><strong>Nama:</strong> ${nama}</li>
                <li><strong>Umur:</strong> ${umur}</li>
                <li><strong>Alamat:</strong> ${alamat}</li>
                <li><strong>Keluhan:</strong> ${keluhan}</li>
            </ul>
        `;
    }, 1000); // Simulasi delay server 1 detik
}
