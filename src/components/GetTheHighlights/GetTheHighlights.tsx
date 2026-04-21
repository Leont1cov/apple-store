import Link from "next/link";

export default function GetTheHighlights() {
    return (
        <section>
            {/*content*/}
            <div>
                <h1>Get the highlights.</h1>

                {/*links*/}
                <div>
                    <Link href="/">Watch the film</Link>
                    <Link href="/">Watch the event </Link>
                </div>

                {/*swiper*/}
                <div></div>

                {/*progress bar*/}
                <div></div>
            </div>
        </section>
    )
}