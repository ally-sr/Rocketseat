import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css';
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/ally-sr.png',
      name: 'Allyson Santana',
      role: 'Web Developer'
    },
    content: [
                {type: 'paragraph', content: 'Fala galeraa 👋'},
                {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
                {type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-05-07 7:00:00')
  }
]

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
           return( 
            <Post
            key={post.id}
            post={post}
            />
           )
          })}
        </main>
      </div>
    </div>
    
  )
}

export default App
