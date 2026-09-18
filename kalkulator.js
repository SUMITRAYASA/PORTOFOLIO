$(document).ready(function () {

    $("#hitung").click(function () {

        // Ambil nilai dari input
        let panjang = parseFloat($("#input-panjang").val());
        let lebar = parseFloat($("#input-lebar").val());
        let tinggi = parseFloat($("#input-tinggi").val());

        // Hitung luas permukaan balok
        let luas = 2 * (
            (panjang * lebar) +
            (panjang * tinggi) +
            (lebar * tinggi)
        );

        // Tampilkan ke preview
        $("#panjang").text("p = " + panjang);
        $("#lebar").text("l = " + lebar);
        $("#tinggi").text("t = " + tinggi);

        // Tampilkan perhitungan
        $("#perhitungan").text(
            "L = 2 × (" +
            panjang + " × " +
            lebar + " + " +
            panjang + " × " +
            tinggi + " + " +
            lebar + " × " +
            tinggi +
            ")"
        );

        // Tampilkan hasil
        $("#hasil").text(luas);

    });

});