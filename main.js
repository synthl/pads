let pads = [
    padC,
    padCx,
    padD,
    padEb,
    padE,
    padF,
    padFx,
    padG,
    padAb,
    padA,
    padBb,
    padB
]

const audios = [
    audioC,
    audioCx,
    audioD,
    audioEb,
    audioE,
    audioF,
    audioFx,
    audioG,
    audioAb,
    audioA,
    audioBb,
    audioB,
]


function tocarPad(audio, pad) {
    let musicIsStop = audio.paused
    if (musicIsStop) {
        console.log(`Tocando PAD em ${pad.value}!`)
        audio.play()
        audio.setAttribute('loop', '')
        pad.setAttribute('class', 'tocando')
    } else {
        console.log(`PAD em ${pad.value} pausado!`)
        audio.pause()
        pad.setAttribute('class', 'pausado')
    }
}

function pararTodosOsPads() {
    audios.forEach(audios => {
        audios.pause()
        audios.load()
    })
    pads.forEach(pads => {
        pads.setAttribute('class', 'pausado')
    })
}

stopAll.addEventListener('click', () => pararTodosOsPads())
padC.addEventListener('click', () => tocarPad(audios[0], pads[0]))
padCx.addEventListener('click', () => tocarPad(audios[1], pads[1]))
padD.addEventListener('click', () => tocarPad(audios[2], pads[2]))
padEb.addEventListener('click', () => tocarPad(audios[3], pads[3]))
padE.addEventListener('click', () => tocarPad(audios[4], pads[4]))
padF.addEventListener('click', () => tocarPad(audios[5], pads[5]))
padFx.addEventListener('click', () => tocarPad(audios[6], pads[6]))
padG.addEventListener('click', () => tocarPad(audios[7], pads[7]))
padAb.addEventListener('click', () => tocarPad(audios[8], pads[8]))
padA.addEventListener('click', () => tocarPad(audios[9], pads[9]))
padBb.addEventListener('click', () => tocarPad(audios[10], pads[10]))
padB.addEventListener('click', () => tocarPad(audios[11], pads[11]))