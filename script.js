const data = {
    "songs" : [
        {
            "name": "Believer",
            "singer": "Imagine Dragons",
            "src" : "./samples/believer.mp3",
            "duration" : 214,
            "isFavorite" : false,
        },
        {
            "name": "Astronaut in the Ocean",
            "singer": "Masked Wolf",
            "src" : "./samples/astronaut_ocean.mp3",
            "duration" : 132,
            "isFavorite" : false,
        },
        {
            "name": "Libaas",
            "singer": "KAKA",
            "src" : "./samples/libaas.mp3",
            "duration" : 267,
            "isFavorite" : false,
        },
        {
            "name": "Tibbeyan Da Putt",
            "singer": "Sidhu Moosewala",
            "src" : "./samples/tibbeyan_da_putt.mp3",
            "duration" : 308,
            "isFavorite" : false,
        },
        {
            "name": "Nadiyon Paar",
            "singer": "Sachin-Jigar",
            "src" : "./samples/nadiyon_paar.mp3",
            "duration" : 164,
            "isFavorite" : false,
        },
        {
            "name": "Shape Of You",
            "singer": "Ed Sheeran",
            "src" : "./samples/shape_of_you.mp3",
            "duration" : 27,
            "isFavorite" : false,
        },
    ],
}

for(let i=1;i<=data["songs"].length;i++){
    let songDiv = $(`<div class="song" id="song-${i}">
                        <div class="song-index">${i}.</div>
                        <div class="song-name">${data["songs"][i-1]["name"]}</div>
                        <div class="play-icon fa fa-play" id="icon-${i}" style="font-size:30px;color:rgb(36, 7, 7)"></div>
                    </div>`);
    $(".avail-songs").append(songDiv);
}

function getDuration(seconds){
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    if(min > 9 && sec > 9)
    return `${min}:${sec}`;
    else if(min > 9)
    return `${min}:0${sec}`;
    else if(min <= 9 && sec<=9)
    return `0${min}:0${sec}`;
    else
    return `0${min}:${sec}`
}

let timer;
function setTime() {
    let duration = 0;
    timer = setInterval( ()=> {
        $(".song-duration").text(getDuration(duration));
       duration++;
    },1000);
}

$(".song").click(function(e){
    $("#audio").remove();
    let songId = $(this).attr("id").split("-")[1];
    $(".song.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".song-details-name").text(data["songs"][songId-1]["name"]);
    $(".singer-name").text(data["songs"][songId-1]["singer"]);   
    setTime();
    let audioElement = $(`<audio id="audio" src="${data["songs"][songId-1]["src"]}"></audio>`);
    $(".audio-container").append(audioElement);
    $("#myRange-1").attr("max",data["songs"][songId-1]["duration"]);
    var audio = document.getElementById("audio");
    audio.play();
    console.log(this);
    $(".play-icon").removeClass("fa-pause");
    $(".play-icon").addClass("fa-play");
    $(`#icon-${songId}`).removeClass("fa-play");
    $(`#icon-${songId}`).addClass("fa-pause");
    

});

$(".features-tab").click(function(e){
    $(".features-tab.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".main-tab").text($(this).text());
});

$(".my-playlists , .my-liked-songs").click(function(e){
    $(".audio-container").empty();
});

$("#myRange-2").on('input',function(e){
    var audio = document.getElementById("audio");
    audio.volume = this.value/100;
});

$("#myRange-1").on('input',function(e){
    console.log(this);
    var audio = document.getElementById("audio");
    console.log(this.value);
    audio.currentTime = this.value;
});

$(".my-songs").click(function(e){
    let musicPlayer = $(`<div class="music-player-container">
                        <div class="border-box">
                            <div class="music-player-text">Music Player</div>
                        </div>
                    </div>
                    <div class="gif-container">
                        <img src="https://i.gifer.com/Nt6v.gif" alt="img" />
                    </div>
                    <div class="playing-song-container">
                        <div class="playing-song">
                            <div class="current-song-details">
                                <div class="play-icon fa fa-play" style="font-size:30px;color:rgb(36, 7, 7)">
                                </div>
                                <div class="song-details">
                                    <div class="song-name">
                                        Yeh kya Baat hai
                                    </div>
                                    <div class="singer-name">
                                        Apaar
                                    </div>
                                </div>
                            </div>
                            <div class="song-duration">
                                05:00
                            </div>
                        </div>
                    </div>
                    <div class="avail-songs-container">
                    <div class="songs-search-container">
                    </div>
                    <div class="avail-songs">

                    </div>
                    </div>`);
    $(".audio-container").append(musicPlayer);
});

