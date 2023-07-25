import contentDisplayer from '../../../components/contentDisplay'

require('dotenv').config()


const getBlog = async (blogUrl: string) => {
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


const parseBlogApi = (blogRaw: any) => {
    const blog:Content = {
        id: blogRaw.data.id,
        title: blogRaw.data.attributes.title,
        content: blogRaw.data.attributes.content,
        createdAt: blogRaw.data.attributes.createdAt,
    }
    return blog

}


// well done functionality is there, but it needs to be styled
export default async function Blog({ params, searchParams }: { params: any, searchParams: any }) {
    const id = searchParams.id;
    const blogURL = `${process.env.URL}/api/blogs/${id}`
    const blogRaw = await getBlog(blogURL)
    const content = parseBlogApi(blogRaw)
    return contentDisplayer({content})


}

