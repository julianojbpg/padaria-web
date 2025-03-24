import ListCards from "@/components/cards/ListCards"
import Body from "@/components/body/Body"
import styles from "./page.module.css"
import { produtolist } from "@/constants/produto-list"




export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ListCards produtos={produtolist} />
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
