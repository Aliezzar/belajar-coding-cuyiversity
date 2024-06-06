
const mahasiswa = [
    {
    nama: "Aliezzar",
    alamat: "kampung inggris",
    usia: 20,
    semester: 8
    },
    {
    nama: "Aliezzasasar",
    alamat: "kampung BElanda ",
    usia: 32,
    semester: 8
    }
]
function getDetailData() {
    // mahasiswa.map(function (result, i) {
    //     console.table(result)
    // })
    mahasiswa.forEach(result => {
        console.log(result)
    })
    // console.log(`data yang anda cari adalah: ${datas}`)
}


