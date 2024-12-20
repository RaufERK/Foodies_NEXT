import LogoPic from '@/assets/logo.png'
import Link from 'next/link'
import styles from './styles.module.css'

const MainHeader = () => {
  const { logo, header, nav } = styles
  return (
    <header className={header}>
      <Link className={logo} href='/'>
        <Image src={LogoPic.src} alt='Main logo' />
        NextLevel Food
      </Link>
      <nav className={nav}>
        <ul>
          <li>
            <Link href='/meals'>Browse Meals</Link>
          </li>
          <li>
            <Link href='/community'>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
