import Image from 'next/image'
import styles from './page.module.css'
import CounterPage from '@/components/CounterPage'

export default function Home() {
  return (
    <main className={styles.main}>
    <h1>Next | Redux-Toolkit</h1>
    <CounterPage/>
    </main>
  )
}
