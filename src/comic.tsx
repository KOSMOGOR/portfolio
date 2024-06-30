import React from 'react';
import { Root, createRoot } from 'react-dom/client';
import { differenceInDays } from "date-fns";
import { ComicInterface as ci, Comic } from './components';

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
    const rootEl: HTMLElement | null = document.getElementById('root')
    console.log(rootEl)
    if (!rootEl) return;
    const root: Root = createRoot(rootEl);

    const Title = <div id="title">Title</div>;
    root.render(<Comic title='Title' src='' date='Date' days='' />)

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

    let d: Date = new Date(Number(comic.year), Number(comic.month), Number(comic.day))
    root.render(<Comic title={comic.safe_title} src={comic.img} date={d.toLocaleDateString()} days={String(differenceInDays(new Date(), d))} />)
})

window.onload = init