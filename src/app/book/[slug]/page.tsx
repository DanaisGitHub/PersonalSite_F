import Markdown from "markdown-to-jsx";
import contentDisplayer from '../../../components/contentDisplay'

require('dotenv').config()


const getBook = async (blogUrl: string) => {
    const res = await fetch(blogUrl, { method: "GET", cache: "no-store" })
    const data = await res.json();
    return data
}

type Content = {
    id: number;
    createdAt: string;
    title: string;
    content: string;
};
const parseBookApi = (blogRaw: any): Content => {
    const book: Content = {
        id: blogRaw.data.id,
        title: blogRaw.data.attributes.title,
        content: blogRaw.data.attributes.content,
        createdAt: blogRaw.data.attributes.createdAt,
    }
    return book

}


// well done functionality is there, but it needs to be styled
export default async function Book({ params, searchParams }: { params: any, searchParams: any }) {
    const id = searchParams.id;
    const bookURL = `${process.env.URL}/api/reviews/${id}`
    const bookRaw = await getBook(bookURL)
    const content: Content = parseBookApi(bookRaw)
    
    return contentDisplayer({content})
}
