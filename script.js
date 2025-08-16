function addToCart(productName, productPrice) {
    localStorage.setItem("productName", productName);
    localStorage.setItem("productPrice", productPrice);
    window.location.href = "transaksi.html";
}

function checkout() {
    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;
    let hp = document.getElementById("hp").value;
    let produk = document.getElementById("produk").value;
    let jumlah = document.getElementById("jumlah").value;
    let harga = localStorage.getItem("productPrice");

    let total = harga * jumlah;

    let transaksi = {
        nama: nama,
        alamat: alamat,
        hp: hp,
        produk: produk,
        jumlah: jumlah,
        harga: harga,
        total: total,
        tanggal: new Date().toLocaleString()
    };

    localStorage.setItem("transaksi", JSON.stringify(transaksi));
    window.location.href = "invoice.html";
}

function displayInvoice() {
    let data = JSON.parse(localStorage.getItem("transaksi"));
    if (!data) return;

    document.getElementById("invoiceContent").innerHTML = `
        <h2>Struk Pembelian</h2>
        <p><strong>Tanggal:</strong> ${data.tanggal}</p>
        <p><strong>Nama:</strong> ${data.nama}</p>
        <p><strong>Alamat:</strong> ${data.alamat}</p>
        <p><strong>Nomor HP:</strong> ${data.hp}</p>
        <p><strong>Produk:</strong> ${data.produk}</p>
        <p><strong>Jumlah:</strong> ${data.jumlah}</p>
        <p><strong>Harga Satuan:</strong> Rp ${data.harga}</p>
        <p><strong>Total Bayar:</strong> Rp ${data.total}</p>
        <hr>
        <p>Terima kasih telah berbelanja di toko kami!</p>
    `;
}
