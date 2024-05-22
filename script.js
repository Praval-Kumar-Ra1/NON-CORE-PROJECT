console.log("Welcome to pravals music");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Papa Meri Jaan" ,filePath: "songs/1.mp3",coverPath:"covers/cover1.jpg"},
    {songName:"Marham ",filePath: "songs/2.mp3",coverPath:"covers/cover2.jpeg"},
    {songName:"Sari Duniya Jal" ,filePath: "songs/3.mp3",coverPath:"covers/cover3.jpg"},
    {songName:"Satranga" ,filePath: "songs/4.mp3.mp3",coverPath:"covers/cover4.jpeg"},
];
 
songItems.forEach((element, i) => {
    let imgElement = element.querySelector("img"); // Get the first <img> element inside each songItem
    if (imgElement) {
        imgElement.src = songs[i].coverPath; // Set the src attribute of the <img> element
        imgElement.alt = songs[i].songName; // Optional: Set the alt attribute for accessibility
    }
});



 

//handle play /pause
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = '1';
    }
    else{ audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = '0';
    }
});
// audioElement.play();

//listen to event
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update the progress bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);

        makeAllPlays(); // Call the function to set all elements to play icon
        
        let songIndex = parseInt(e.target.id); // Assuming the 'id' attribute holds the songIndex

        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.play();
            gif.style.opacity = '1';
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
        } else {
            audioElement.pause();
            gif.style.opacity = '0';
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle');
        }
    });        

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = '1';
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;
    
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = '1';
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
})
