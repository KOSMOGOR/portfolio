import React from "react";

export function Bio() {
    return (
        <div>
            <h1>Hello, everyone!</h1>
            <div>I'm Egor Savchenko, Back-end and Unity developer.</div>

            <h3>Stack I'm using:</h3>
            <ul>
                <li className="mono">Js, HTML and CSS for Front-end</li>
                <li className="mono">Node.Js for Back-end</li>
                <li className="mono">C# for Unity</li>
            </ul>

            <h3>Projects:</h3>
            <ul>
                <li className="mono">Platformer for "Black and White Jam" (<a href="https://kosmogor.itch.io/dieformer">link</a>)</li>
                <li className="mono">"Recruitment helper" as project in Innopolis University (link not available now)</li>
            </ul>

            <h3>Weak points:</h3>
            <ul>
                <li className="mono">Can't into design</li>
            </ul>
        </div>
    )
}

export function Footer() {
    return (
        <footer>
            <div id="icons">
                <a href="https://github.com/KOSMOGOR">
                    <img id="gh-link" className="icon" src="https://gitlab.com/uploads/-/system/group/avatar/10532272/github.png" alt="GitHub"/>
                </a>
                <a href="https://t.me/KOSMOGOR">
                    <img id="tg-link" className="icon" src="https://yakovlevskij-r31.gosweb.gosuslugi.ru/netcat_files/25/98/ikonka_telegram_png_1.png" alt="Telegram"/>
                </a>
                <a href="mailto:e.savchenko@innopolis.university?Subject=support">
                    <img id="email" className="icon" src="https://cdn1.iconfinder.com/data/icons/seo-and-web-set-1-1/100/Untitled-2-24-41-1024.png" alt="Email"/>
                </a>
            </div>
            <div id="comic">
                <a href="./comic.html">See comic</a>
            </div>
        </footer>
    )
}

export interface ComicInterface {
    title: string,
    src: string,
    date: string,
    days: string
}

export function Comic(props: ComicInterface) {
    return (
        <div className="box">
            <div id="title">{props.title}</div>
            <img id="comic" src={props.src} alt="Waiting"/>
            <div id="date">{props.date}</div>
            <div>Comic was published <a id="daysAgo">{props.days}</a> days ago</div>
        </div>
    )
}