import axios from 'axios';
import homeCard from '../components/HomeCard'

import styles from '../styles/home.module.css'

const getAllBlogsApi = async () => {
  const blogs = await axios.get("http://localhost:1337/api/blogs")
}


const Home = () => {

  return <section> 
    <div className={styles.introSection}>
      <div className={styles.introMessage}></div>
      <div className={styles.introImage}></div>
    </div>

    <div className={styles.gridContainer} >
      {homeCard(1,"","","")}
      {homeCard(1,"","","")}
      {homeCard(1,"","","")}
      {homeCard(1,"","","")}
    </div>
  
  </section>


}

export default Home;