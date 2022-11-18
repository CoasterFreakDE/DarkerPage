import {useRouter} from "next/router";
import {useEffect} from "react";
import {Palettes} from "../data/Palettes";

export default function FourOhFour() {
    const router = useRouter()

    useEffect(() => {
        const route = router.asPath
        if(Palettes.find(palette => palette.id === route.substring(1))) {
            router.push(`/[paletteid]`, `/${route.substring(1)}`)
        } else {
            router.push('/')
        }
    })

    return (
        <div className="h-full p-[5%] w-full">
            <h1 className="text-4xl font-bold text-center">404 - Page not found</h1>
            <p className="text-2xl font-bold text-center">The page <span className="text-red-500">{router.asPath}</span> does not exist.</p>
        </div>
    )
}