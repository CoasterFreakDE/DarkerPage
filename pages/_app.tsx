import '../styles/globals.css'
import type {AppProps} from 'next/app'
import React from "react";
import Head from "next/head";
import LogoComponent from "../components/LogoComponent";
import 'github-fork-ribbon-css/gh-fork-ribbon.css'


export default function App({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>Darker</title>
            <meta name="description" content="DarkMode Color Palettes"/>

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@coasterfreakde" />
            <meta name="twitter:title" content="DarkerPage" />
            <meta name="twitter:description" content="DarkMode Color Palettes for your next project" />
            <meta name="twitter:image" content="/android-chrome-512x512.png" />

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700;900&display=swap" rel="stylesheet"/>
        </Head>
        <LogoComponent/>
        <a className="github-fork-ribbon" href="https://github.com/CoasterFreakDE/DarkerPage" data-ribbon="Fork me on GitHub"
           title="Fork me on GitHub">Fork me on GitHub</a>
        <a className="github-fork-ribbon fixed right-bottom dark" href="https://devsky.one/impressum" data-ribbon="Imprint"
           title="Imprint">Imprint</a>
        <Component {...pageProps} />
    </>
}
