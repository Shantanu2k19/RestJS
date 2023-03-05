import { Fragment } from "react"
import Link from 'next/link';

export default function HomePage(){
    return(
        <Fragment>
            <h1>Hello home page</h1>

            {/* here it will redirect and load new page, reloading, getting page from server  */}
            <ul>
                <a href="/"><li>home Page</li></a>
                <a href="/news"><li>news Home Page</li></a>
                <a href="/news/hello"><li>news hello page</li></a>
                <a href="/news/whatTheFuck"><li>news 'anything in url' page</li></a>
            </ul>
            ___________________________________________

            {/* using link, react like functionality  */}
            <ul>
                <Link href="/"><li>home Page</li></Link>
                <Link href="/news"><li>news Home Page</li></Link>
                <Link href="/news/hello"><li>news hello page</li></Link>
                <Link href="/news/whatTheFuck"><li>news 'anything in url' page</li></Link>
            </ul>

        </Fragment>
    )
}