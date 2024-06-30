import React from 'react';
import { Root, createRoot } from 'react-dom/client';
import { Bio, Footer } from './components';

function f() {
    const rootEl: HTMLElement | null = document.getElementById('root')
    console.log(rootEl)
    if (!rootEl) return;
    const root: Root = createRoot(rootEl);

    root.render(
        <div>
            <Bio />
            <Footer />
        </div>
    )
}

window.onload = f