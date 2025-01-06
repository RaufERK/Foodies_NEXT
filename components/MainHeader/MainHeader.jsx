import LogoPic from '@/assets/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'
import HeaderBackground from '@/components/HeaderBackground'

const MainHeader = () => {
  const { logo, header, nav } = styles
  return (
    <>
      <HeaderBackground />
      <header className={header}>
        <Link className={logo} href='/'>
          <Image
            src={LogoPic.src}
            alt='A plate with food on it'
            width={1024}
            height={1024}
            priority
          />
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
    </>
  )
}

export default MainHeader
