// const searchSong = () =>{
//     const searchText = document.getElementById('search-input').value;
//     const url = `https://api.lyrics.ovh/suggest/${searchText}`
//     fetch(url)
//     .then(res => res.json())
//     .then(songs => displaySongs(songs.data))
//     .catch(error => displayError('Item Not Fount !! please try again'))
// }

//we complete this process by the (async, await) method 
const searchSong = async() =>{
    const searchText = document.getElementById('search-input').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
     try{
        const res = await fetch(url)
        const songs = await res.json()
         displaySongs(songs.data)
    }
    catch (error){
        displayError('Sorry! I failed to load songs please try again later')
    }
}

//For  display songs...........
const displaySongs = songs =>{
    const ul = document.getElementById('song_container');
    ul.innerHTML= '';
    songs.forEach(song => {       
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3'
        songDiv.innerHTML = `
            <div id="results" class="results col-md-9">
                <h3 class="lyrics-name">${song.title}</h3>
                <p class="author lead">Album by <span>${song.artist.name}</span></p> 
                <audio controls>
                    <source src="${song.preview}" type="audio/mpeg">
                </audio>         
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick="getLyric('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
        `; 
        ul.appendChild(songDiv)
    })
}

// const getLyric = (artist, title) =>{
//     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayLyrics(data.lyrics) )
//     .catch(error => displayError('Item Not Fount !! please try again'))
// }

//we complete this process by the (async, await) method 
const getLyric = async(artist, title) =>{
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
    try{
        const res = await fetch(url)
        const data = await res.json()
        displayLyrics(data.lyrics) 
    }
    catch (error){
        displayError('Sorry! I failed to load lyrics please try again later')
    }
}

const displayLyrics = (lyrics) =>{
    const lyricsDiv = document.getElementById('lyrics')
    lyricsDiv.innerText = lyrics
}

const displayError = thisError =>{
    const error = document.getElementById('errorMessage')
    error.innerText = thisError
}