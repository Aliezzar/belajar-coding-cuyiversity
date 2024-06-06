let usia = "15";

let biodata = document.getElementById('biodata');

alert(`halo, selamat datang, ini adalah codingan website pertamaku yang 100% ku buat dengan jari jari ku yang suka dengan mengetik coding`)
alert(`Salam kenal! aku ${nama} usia ku adalah ${usia} tahuzznnn`)

function generateBio() {
    let generasi;

    if (usia >= 12 && usia < 18) { //true
        //ini adalah kondisi pertama
        generasi = "generasi remaja";
    }
    else if (usia >= 18 && usia < 30) {
        //ini adalah kondisi yang tidak terpenuhi, seperti "kecuali"
        generasi = "kamu sudah dewasa, saatnya mencari pekerjaan!";
    }
    else if (usia >= 30) {
        generasi = "udah tua renta lu wkwk";
    }
    else if (usia >= 7 && usia < 12) {
        generasi = "bocah esdee bocah esdee";
    }
    else {
        generasi = "bayi kah?";
    }

    return biodata.innerHTML = generasi;
}
console.log(nama);
console.log(usia);

generateBio();