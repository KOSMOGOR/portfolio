const init = (async () => {
    const title = document.getElementById('title')
    const img = document.getElementById('comic')
    const date = document.getElementById('date')

    let idRes = await fetch('https://fwd.innopolis.university/api/hw2?' + new URLSearchParams({
        email: 'e.savchenko@innopolis.university'
    }))
    if (!idRes.ok) return console.error('Error fetching id');
    let id = await idRes.text()
    
    let comicRes = await fetch('https://fwd.innopolis.university/api/comic?' + new URLSearchParams({
        id
    }))
    if (!comicRes.ok) return console.error('Error fetching comic');
    let comic = JSON.parse(await comicRes.text())
    console.log(comic)

    title.textContent = comic.safe_title
    img.setAttribute('src', comic.img)
    let d = new Date(comic.year, comic.month, comic.day)
    date.textContent = d.toLocaleDateString()
})

window.onload = init