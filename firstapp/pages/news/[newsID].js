import {useRouter} from 'next/router';

export default function HomePage(){
    const route = useRouter();
    const name = route.query.newsID;
    console.log(route.query.newsID);
    return(
    <div>Hello {name} page</div>
)}