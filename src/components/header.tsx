import Link from "next/link";



export default function header() {
    return <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4 dark:bg-gray-800 border-b-2 mb-6">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <Link href="/" className="flex items-center ">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Danai <b>Zerai</b></span>
            </Link>
            <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5 text-lg">
                <Link href="/blog"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
                     md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
                     md:dark:hover:bg-transparent  ">Blog</Link>

                <Link href="/book"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Book Reviews</Link>

                <Link href="/CV"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
                    md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
                    md:dark:hover:bg-transparent">CV</Link>

                <Link href="/contact-us"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>


            </div>
        </nav>
    </header>
}

