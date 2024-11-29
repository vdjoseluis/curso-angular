interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Eminem",
        year: 2015
    }
}

const {song: anotherSong, songDuration: duration, details} = audioPlayer;

const {author} = details;

console.log('Song: ', anotherSong);
console.log('Author: ', author);
console.log('Duration: ', duration);
console.log('/////////////////////////////////');

// DESTRUCTURING ARRAYS
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;
console.log('Personaje 3: ', p3);

export { };