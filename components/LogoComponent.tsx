
export default function LogoComponent() {
    return (
        <div className={"header p-5 cursor-pointer"} onClick={() => location.href = '/'}>
            <div className={"hidden sm:block"}>
                <h1 className={"text-6xl font-black text-white"}>Darker</h1>
                <p className={"text-[#9E9E9E] text-5xl font-bold"}>Web</p>
            </div>
            <div className={"sm:hidden"}>
                <h1 className={"text-4xl font-black text-white"}>Darker</h1>
                <p className={"text-[#9E9E9E] text-3xl font-bold"}>Phone</p>
            </div>
            <div className={'hidden text-black'}></div>
        </div>
    )
}