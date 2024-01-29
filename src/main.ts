import "./style.css";


const titleStyle = 'font-size:1.1rem; font-weight:bold; bacnkground-color: green'

 interface  bankOfMusic {
    bankOrSinger: string,
    foundation: number,
    active: boolean,
    gender: string
}

const musicBandA: bankOfMusic = {
    bankOrSinger: 'The Beatles',
    foundation: 1960,
    active: true,
    gender: '🎵 Pop Rock'
}

const musicBandB: bankOfMusic = {
    bankOrSinger: 'Queen ',
    foundation: 1970,
    active: false,
    gender: '🎸 Rock'
}

const musicBandC: bankOfMusic = {
    bankOrSinger: 'AC DC',
    foundation: 1973,
    active: true,
    gender: '🤘 Hard Rock'
}

const musicBandD: bankOfMusic = {
    bankOrSinger: 'Ludwig van Beethoven',
    foundation: 1770,
    active: false,
    gender: '🎼 Clásica'
}

const musicBandE: bankOfMusic = {
    bankOrSinger: 'The Rolling Stones',
    foundation: 1962,
    active: true,
    gender: '🎸 Rock'
}


console.log('%c' + musicBandA.bankOrSinger, titleStyle, musicBandA);
console.log('%c' + musicBandB.bankOrSinger, titleStyle, musicBandB);
console.log('%c' + musicBandC.bankOrSinger, titleStyle, musicBandC);
console.log('%c' + musicBandD.bankOrSinger, titleStyle, musicBandD);
console.log('%c' + musicBandE.bankOrSinger, titleStyle, musicBandE);