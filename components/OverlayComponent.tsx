import classNames from "classnames";
import {textColor} from "../utils/ColorUtils";

export default function OverlayComponent(props: { color: string, show: boolean }) {
    return (
        <div className={classNames("fixed top-0 left-0 h-full w-full text-center z-200 transition-opacity grid grid-cols-1 gap-1 place-content-center",
            props.show ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none")} style={{backgroundColor: props.color}}>
            <p className={classNames(textColor(props.color), 'text-2xl font-bold truncate')}>Copied!</p>
        </div>
    )
}