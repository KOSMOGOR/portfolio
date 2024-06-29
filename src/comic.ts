import { differenceInDays } from "date-fns";

interface ComicInterface {
    alt: string,
    day: string,
    img: string,
    ling: string,
    month: string,
    news: string,
    num: number,
    safe_title: string,
    title: string,
    transcript: string,
    year: string
}

const init = (async () => {
    const title: HTMLElement | null = document.getElementById('title')
    const img: HTMLElement | null = document.getElementById('comic')
    const date: HTMLElement | null = document.getElementById('date')
    const daysAgo: HTMLElement | null = document.getElementById('daysAgo')

    let idRes: Response = await fetch('https://fwd.innopolis.university/api/hw2?' + new URLSearchParams({
        email: 'e.savchenko@innopolis.university'
    }))
    if (!idRes.ok) return console.error('Error fetching id');
    let id: string = await idRes.text()
    
    let comicRes: Response = await fetch('https://fwd.innopolis.university/api/comic?' + new URLSearchParams({
        id
    }))
    if (!comicRes.ok) return console.error('Error fetching comic');
    let comic: ComicInterface = JSON.parse(await comicRes.text())
    console.log(comic)

    if (title) title.textContent = comic.safe_title
    if (img) img.setAttribute('src', comic.img)
    let d: Date = new Date(Number(comic.year), Number(comic.month), Number(comic.day))
    if (date) date.textContent = d.toLocaleDateString()
    if (daysAgo) daysAgo.textContent = String(differenceInDays(new Date(), d))
})

window.onload = init