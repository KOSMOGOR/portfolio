/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./page.module.css";

export function Bio() {
    return (
        <div>
            <h1>Hello, everyone!</h1>
            <div>I'm Egor Savchenko, Back-end and Unity developer.</div>

            <h3>Stack I'm using:</h3>
            <ul>
                <li className={styles.mono}>Js, HTML and CSS for Front-end</li>
                <li className={styles.mono}>Node.Js for Back-end</li>
                <li className={styles.mono}>C# for Unity</li>
            </ul>

            <h3>Projects:</h3>
            <ul>
                <li className={styles.mono}>Platformer for "Black and White Jam" (<a href="https://kosmogor.itch.io/dieformer">link</a>)</li>
                <li className={styles.mono}>"Recruitment helper" as project in Innopolis University (link not available now)</li>
            </ul>

            <h3>Weak points:</h3>
            <ul>
                <li className={styles.mono}>Can't into design</li>
            </ul>
        </div>
    )
}