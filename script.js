var div = document.querySelector('.list');
console.log(div);
var ul = document.createElement('ul');

// var li = document.createElement('li');

var songs = [
        {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
       },
       {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
       },
       {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
       },
       {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
       },
       {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
       },
       {
        author: "AC/DC",
        song:"BACK IN BLACK"
       },
       {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
       },
       {
        author: "METALLICA",
        song:"ENTER SANDMAN"
       }
]
 var li = document.getElementsByTagName('li');

function getLi (number) {
    ul
     for (i = 0; i < number; i++) {
        var li = document.createElement('li');
        li.innerText = songs[i].author + " - " + songs[i].song;
        li.classList.add('music');
      ul.appendChild(li);
     }
    
    div.appendChild(ul);
    return ul; 
}

console.log(getLi(songs.length));
var music = document.querySelectorAll('.music');
console.log(music);

for(var i=0; i < music.length; i++) {
    music[i].style.fontStyle = 'italic';
    music[i].style.fontSize = '20px';
}

div.addEventListener('mouseenter', function () {
    console.log('Mouse has entered this area')
    this.style.color = 'rgb(228, 191, 149';
    this.style.backgroundColor = 'rgb(161, 91, 10)';
    this.style.width = '500px';
    this.style.height = '300px';
})
div.addEventListener('mouseleave', function () {
    console.log('Mouse has left this area');
    this.style.backgroundColor = 'transparent';
    this.style.color = 'rgb(161, 91, 10)'

})
 


 
 



