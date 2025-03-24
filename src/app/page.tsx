import Body from "@/components/body/Body"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Body />
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
