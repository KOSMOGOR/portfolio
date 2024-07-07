import React from "react";
import styles from "./page.module.css";

export function Footer() {
    return (
        <footer>
            <div id="icons">
                <a href="https://github.com/KOSMOGOR">
                    <img id="gh-link" className={styles.icon} src="https://gitlab.com/uploads/-/system/group/avatar/10532272/github.png" alt="GitHub"/>
                </a>
                <a href="https://t.me/KOSMOGOR">
                    <img id="tg-link" className={styles.icon} src="https://yakovlevskij-r31.gosweb.gosuslugi.ru/netcat_files/25/98/ikonka_telegram_png_1.png" alt="Telegram"/>
                </a>
                <a href="mailto:e.savchenko@innopolis.university?Subject=support">
                    <img id="email" className={styles.icon} src="https://cdn1.iconfinder.com/data/icons/seo-and-web-set-1-1/100/Untitled-2-24-41-1024.png" alt="Email"/>
                </a>
            </div>
            <div id="comic">
                <a href="./comic">See comic</a>
            </div>
        </footer>
    )
}