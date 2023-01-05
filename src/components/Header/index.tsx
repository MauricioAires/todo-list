import Logo from '../../assets/logo.svg'

import S from './styles.module.css'

export function Header() {
  return (
    <header className={S.header}>
      <img src={Logo} />
    </header>
  )
}
