import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LinkedIn, GitHub, SettingsOutlined } from '@mui/icons-material'

import {
  Container,
  HeaderContainer,
  ContainerLinks,
  ButtonSettings,
  LogoName,
} from './styles'
import { ThemeContext } from '../../contexts/ThemeProvider'

export const Header: React.FC = () => {
  const { toggleSidebar } = useContext(ThemeContext)

  return (
    <Container>
      <HeaderContainer>
        <LogoName>
          <h1>THG</h1>
          <span>PROJECTS</span>
        </LogoName>
        <ContainerLinks>
          <Link to="https://github.com/thiagop90" target={'_blank'}>
            <GitHub fontSize="small" />
          </Link>

          <Link to="https://linkedin.com/in/psthiago/" target={'_blank'}>
            <LinkedIn fontSize="small" />
          </Link>
        </ContainerLinks>
        <ButtonSettings onClick={toggleSidebar}>
          <SettingsOutlined fontSize="small" />
        </ButtonSettings>
      </HeaderContainer>
    </Container>
  )
}
