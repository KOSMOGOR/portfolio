import React from "react";
import { differenceInDays } from "date-fns";
import styles from "./page.module.css";

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

interface ComicInterface2 {
    title: string,
    src: string,
    date: string,
    days: string
}

async function getData(): Promise<ComicInterface2> {
    return new Promise(async (resolve, reject) => {
        const idRes: Response = await fetch('https://fwd.innopolis.university/api/hw2?' + new URLSearchParams({
            email: 'e.savchenko@innopolis.university'
        }))
        if (!idRes.ok) reject('Error fetching id')
        const id: string = await idRes.text()

        const comicRes: Response = await fetch('https://fwd.innopolis.university/api/comic?' + new URLSearchParams({
            id
        }))
        if (!comicRes.ok) reject('Error fetching comic');
        const comic: ComicInterface = JSON.parse(await comicRes.text())
        console.log(comic)

        const d: Date = new Date(Number(comic.year), Number(comic.month), Number(comic.day))
        // root.render(<Comic title={comic.safe_title} src={comic.img} date={d.toLocaleDateString()} days={String(differenceInDays(new Date(), d))} />)
        resolve({
            title: comic.safe_title,
            src: comic.img,
            date: d.toLocaleDateString(),
            days: String(differenceInDays(new Date(), d))
        })
    })
    
}

export default async function Comic() {
    const data: ComicInterface2 | undefined = await getData()
    if (!data) return (<div className={styles.box}></div>);
    return (
        <div className={styles.box}>
            <div id="title">{data.title}</div>
            <img id="comic" src={data.src} alt="Waiting"/>
            <div id="date">{data.date}</div>
            <div>Comic was published <a id="daysAgo">{data.days}</a> days ago</div>
        </div>
    )
}