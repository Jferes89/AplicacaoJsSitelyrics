
function findylirics(artist,song){
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
}

const form = document.querySelector('#lyric_form')
form.addEventListener('submit', el =>  {
     el.preventDefault()
     doSubimit()
})


async function doSubimit(){
  const lyric_el = document.querySelector('#lyric')
  const artista = document.querySelector('#artista')
  const song = document.querySelector('#musica')
  console.log(song.value)  

  const lyricResponse = await findylirics(artista.value, song.value)
  const data = await lyricResponse.json()
  lyric_el.innerHTML = data.lyrics  
}
