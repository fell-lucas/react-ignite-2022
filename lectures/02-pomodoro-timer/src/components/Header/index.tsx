import { Globe, Scroll, Timer } from 'phosphor-react'
import { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import logoIgnite from '../../assets/logo-ignite.svg'
import { HeaderContainer } from './styles'
import { useTranslation } from 'react-i18next'

export function Header() {
  const { i18n } = useTranslation()

  const handleChangeLanguage = useCallback(() => {
    i18n.changeLanguage(i18n.language === 'pt-BR' ? 'en' : 'pt-BR')
  }, [i18n])

  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <NavLink to={'/'} title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to={'/history'} title="History">
          <Scroll size={24} />
        </NavLink>
        <a onClick={handleChangeLanguage}>
          <Globe size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
