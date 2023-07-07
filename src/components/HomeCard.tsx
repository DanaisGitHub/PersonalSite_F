import styles from '../styles/HomeCard.module.css'


export default function HomeCard(id:number,title:string,description:string,link:string) {//crossOrign in space
    return <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"                    ></link>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

                    <main className={styles.main}>
                        <div className={styles.card}>
                            <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt=""></img>
                                <div className="card-content">
                                    <h2>
                                        Card Heading
                                    </h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                                    </p>
                                    <a href="#" className="button">
                                        Find out more
                                        <span className="material-symbols-outlined">
                                            arrow_right_alt
                                        </span>
                                    </a>
                                </div>
                        </div>
                    </main>
                </div>
}