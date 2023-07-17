'use client'
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import A4 from '../../components/A4'

const cmsURL: string = "http://127.0.0.1:1337/api/cvs" // must be something to do with it being in localhost

const getCV = async () => {
    try {
        const res = await fetch(cmsURL,{ cache:"force-cache",next: { revalidate: 1 }});
        const jsonData = await res.json();
        console.log(jsonData);
        return jsonData.data[0].attributes.cvContent;
    }
    catch (err:any) {
        console.log("ERRRRRRRRRRRRRRRRRRRRRRROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRRRRRR")
        console.log(err);
        throw new Error(err) ;
    }

}


export default async function HomeCard() {

    const data = await getCV();

    return <div>
        {A4(data as unknown as string)}
    </div>
}