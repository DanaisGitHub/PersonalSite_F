
import HomeCard from '../components/HomeCard'
import Image from 'next/image';

import styles from '../styles/Home.module.css'// Causing Problems

import frontimage from '../assets/SQUARE.jpg'
import blogImage from '../assets/blog.jpg'
import bookImage from '../assets/bookReview.jpg'
import cvImage from '../assets/job.jpg'
import contactMe from '../assets/1689570869397.jpg'
import processingLogo from '../assets/Processing-logos.jpeg'

import spotify from '../assets/Icons/spotify.png'
import apple from '../assets/Icons/podcast.png'
import castBox from '../assets/Icons/castbox.223x256.png'
import radioPublic from '../assets/Icons/radiopublic-app-icon.png'
import stitcher from '../assets/Icons/stitcher-icon.png'


type HomeCard = {
  id: number,
  title: string,
  description: string,
  link: string,
  image: any
}


export const metadata = {
  title: 'Danai Personal Website',
  description: 'Generated by create next app',
}

const Home = () => {

  const blogCard: HomeCard = {
    id: 0,
    title: "Blog",
    description: "Blogging is a form of discussion and it is a great way to share your thoughts, ideas, and opinions with the world. It is also a great way to connect with people who share your interests.",
    link: '/blog',
    image: blogImage
  }

  const bookCard: HomeCard = {
    id: 1,
    title: "Book Reviews",
    description: "Ever Read a book a forgot everything about it? Well I have, and I am here to help you remember what you read. With written BRUTTALLY HONEST reviews.",
    link: '/book',
    image: bookImage
  }

  const cvCard: HomeCard = {
    id: 2,
    title: "CV",
    description: "This is my CV, it is a work in progress, but it is a good start, bare in mind the CV cannot be tailord to your needs, but I can on request send you a tailored version.",
    link: '/CV',
    image: cvImage
  }

  const contactCard: HomeCard = {
    id: 3,
    title: "Contact Me",
    description: "If you like what you see, and want to get in touch, please do not hesitate to contact me, I am always looking for new opportunities, and new people to meet.",
    link: '/contact-us',
    image: contactMe
  }




  const homeCard: HomeCard[] =
    [
      blogCard,
      bookCard,
      cvCard,
      contactCard
    ]


  return <section className='marginNavBar'>
    <div className={styles.introSection}>
      <div className={styles.introMessage}>
        <div className='  h-min w-full flex flex-col mx-auto my-auto align-self text-center  '>
          <h1 className=' font-bold text-6xl'>The Name is Zerai, <b className='text-transparent bg-clip-text bg-gradient-to-r to-stone-800 from-gray-400'>Danai Zerai!</b></h1>
          <br />
          <h2 className=' font-bold text-xl'>A Computer Scientist by Day, "Future Entrepreneur" by Night</h2>
          <br />

        </div>

        

      </div>
      <div className={styles.introImage}>
          < Image src={frontimage} fill={true} alt="SomeHow a cool photo of me" className=' object-cover mx-auto max-h-full rounded-3xl' />
        </div>

    </div>

    {/*Processing Section*/}

    <div className={styles.gridContainerWidth}>
      <h1 className=" pt-10 mb-4 text-3xl md:text-9xl underline font-extrabold text-gray-900 dark:text-white lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-indigo-500" >Explore</span> </h1>
      <div className={styles.gridContainer} >
        {homeCard.map((card) => { return HomeCard(card.id, card.title, card.description, card.link, card.image) })}
      </div>
      <h1 className=" pt-10 mb-4 text-3xl md:text-9xl underline font-extrabold text-gray-900 dark:text-white lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-teal-500 from-blue-950" >Processing<br />Podcast</span> </h1>
      < Image src={processingLogo} alt="" className="w-60 flex justify-center mx-auto rounded-full" />
      <h3 className="text-center text-2xl">Listen Now on:</h3>
      <span className='mx-auto flex gap-3 justify-center pt-4 pb-8'>
        <a href="https://open.spotify.com/show/2w5t0CQlWW95iu5chr4EqD" target="_blank">
          < Image src={spotify} alt="" style={{ height: 36, width: 36 }} />
        </a>
        <a href="https://podcasts.apple.com/gb/podcast/processing/id1692829710" target="_blank">
          < Image src={apple} alt="" style={{ height: 36, width: 36 }} />
        </a>
        <a href="https://castbox.fm/channel/Processing-id5478247?country=gb" target="_blank">
          < Image src={castBox} alt="" style={{ height: 36, width: 36 }} />
        </a>
        <a href="https://radiopublic.com/processing-WzZ9Z4" target="_blank">
          < Image src={radioPublic} alt="" style={{ height: 36, width: 36 }} />
        </a>
        <a href="https://www.stitcher.com/show/processing-3871744" target="_blank">
          < Image src={stitcher} alt="" style={{ height: 36, width: 36 }} />
        </a>



      </span>
      <div className="flex justify-center text-center">Processing Prodcast is new podcast hosted by Danai Zerai, covering the latest and greatested in many formal area, along with guest that are brought on.</div>

    </div>


  </section>


}

export default Home;