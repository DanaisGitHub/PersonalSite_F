// need to figure out how to get blog format to show up properly



import Head from 'next/head';
import Markdown from "markdown-to-jsx";
import MarkDownIt from 'markdown-it'



type Content = {
    id: number;
    createdAt: string;
    title: string;
    content: string;
};

type Props = {
    content: Content;
};


const md = new MarkDownIt()



export default function BlogPage({ content }: Props) {
    const htmlContent = md.render(content.content)
    const date = new Date(content.createdAt)
    return (
        <article>
            <Head>
                <title >{content.title} | Your Blog</title> not working
            </Head>
            <div className="container  mx-auto md:px-10">
                <div className='w-full h-full border-b-8 '>
                    <h1 className="text-7xl font-bold mb-4 text-center ">{content.title}</h1>
                    <p className=" text-black mb-4 text-center ">{content.createdAt}</p>
                </div>

                <div className="prose max-w-none mx-auto w-full p-2 md:w-6/12  mt-28 mb-16 bg-slate-100 md:p-5 rounded-xl md:shadow-2xl " ><section dangerouslySetInnerHTML={{ __html: htmlContent }}></section></div>

            </div>
        </article>
    );
};




