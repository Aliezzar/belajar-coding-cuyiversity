const http = require('http');
const rupiah = require('rupiah-format')
const fs = require('fs')
const host = '127.0.0.1'
const port = 3002

//request adalah = data masuk dari luar
//response adalah = data keluar dari sistem
const server = http.createServer(function (request, response) {
    const nama = "ALIEZZAR";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)

    fs.appendFile('sisauang.txt', sisa, () => {
        console.log('data uang berhasil disimpan')
    });

    const hasil = `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>
                            <style>
                                h1 {
                                    background-color: black;
                                color: white;
                                padding: 20px;
                                text-align: center;
    }
                            </style>
                        </head>
                        <body>
                            <h1>halo nama saya ${nama} saya jajan sebanyak ${jajan}, uang saya tadinya ${uang}, sekarang menjadi ${sisa}</h1>
                        </body>
                    </html>`

    response.statusCode = 203;
    response.end(hasil);
});

server.listen(port, host, '', function () {
    console.log(`server menyala di ${host}:${port}`);
});