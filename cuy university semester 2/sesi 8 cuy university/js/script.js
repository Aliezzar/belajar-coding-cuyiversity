const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById('loaders')
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Halo, perkenalkan saya ZarBot. Siapa nama kamu?",
        `halo ${data?.nama}, berapa usia kamu?`,
        `oohhh ${data?.usia}, hobi kamu apa yah kalau boleh tahu?`,
        ` waww sama dong, aku juga punya hobi ${data?.hobi}, btw punya pacar gak`,
        `ohhh ${data?.pacar}, ya udah kalau gitu, udahan ya....`
    ]
}

pertanyaan.innerHTML = botSay()[0];

let usersData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [1000])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `thank you ya ${usersData[0]} udah main ke zarBot, ayo kapan kapan kita ${usersData[2]} bareng ya!!`
    jawaban.value = "Siap thanks juga wkwk"
}

function botEnd() {
    window.location.reload()
}