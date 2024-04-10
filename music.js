let a = document.getElementById("abc");
let b = document.getElementById("c")
let c = document.getElementById("x")
let d = document.getElementById("b")
let e = document.getElementById("f")
let g = document.getElementById("a1")


b.addEventListener("click", function() {
    a.play()
});

g.addEventListener("click", function() {
    a.pause()
});

c.addEventListener("click", function() {
    a.currentTime = a.currentTime - 10;
})

d.addEventListener("click", function() {
    a.currentTime = a.currentTime + 10;
})

e.addEventListener("click", function() {
    a.currentTime = 0;
})

let playlistData = [{
        "id": "1",
        "title": "kamlee",
        "thumbnail": "Kamlee-(PagalWorld).mp3",
        "img": "Kamlee.jpg"
    },

    {
        "id": "2",
        "title": "thaa",
        "thumbnail": "thaa.mp3",
        "img": "thaa.jpg"
    },
    {
        "id": "3",
        "title": "defaulter",
        "thumbnail": "Defaulter - R Nait.mp3",
        "img": "defaulter.jpg"
    },
    {
        "id": "4",
        "title": "Phone Maar Di",
        "thumbnail": "Phone Maar Di - Gurnam Bhullar.mp3",
        "img": "p.jpg"
    },
    {
        "id": "5",
        "title": "kamlee",
        "thumbnail": "Kamlee-(PagalWorld).mp3",
        "img": "Kamlee.jpg"
    },

    {
        "id": "6",
        "title": "thaa",
        "thumbnail": "thaa.mp3",
        "img": "thaa.jpg"
    },
    {
        "id": "7",
        "title": "defaulter",
        "thumbnail": "Defaulter - R Nait.mp3",
        "img": "defaulter.jpg"
    },
    {
        "id": "8",
        "title": "Phone Maar Di",
        "thumbnail": "Phone Maar Di - Gurnam Bhullar.mp3",
        "img": "p.jpg"
    },
    {
        "id": "9",
        "title": "thaa",
        "thumbnail": "thaa.mp3",
        "img": "thaa.jpg"

    },
    {
        "id": "10",
        "title": "defaulter",
        "thumbnail": "Defaulter - R Nait.mp3",
        "img": "defaulter.jpg"
    },
]
let f = document.getElementById("two");
for (var i = 0; i < playlistData.length; i++) {
    f.innerHTML += `
    <div id="maincard" onclick="playmusic(${playlistData[i].id})">
     <li class="q" style="list-style: none;">${playlistData[i].title}4</li>
    <img src="${playlistData[i].img}" alt="" id="l">
    </div>`
}

let one1 = document.getElementById("img");
let abc1 = document.getElementById("abc");
let musicname1 = document.getElementById("musicname");

function playmusic(i1) {
    one1.innerHTML = `
<img src="${playlistData[i1-1].img}" alt="" id="i">
`
    abc1.src = `${playlistData[i1-1].thumbnail}`
    musicname1.innerHTML = ` <h1 id="s">${playlistData[i1-1].title}</h1>`
}