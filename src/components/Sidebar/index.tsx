import { Close, DarkModeOutlined, LightMode } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeProvider'

import { SidebarContainer, Overlay, ToggleButtonGroup } from './styles'

export const Sidebar: React.FC = () => {
  const { theme, isOpen, setDarkTheme, setLightTheme, toggleSidebar } =
    useContext(ThemeContext)

  return (
    <>
      <SidebarContainer className={`${isOpen ? 'isOpen' : ''}`}>
        <header>
          <span>Settings</span>
          <IconButton color="primary" onClick={toggleSidebar}>
            <Close fontSize="small" />
          </IconButton>
        </header>
        <section>
          <p>Theme</p>
          <ToggleButtonGroup>
            <button
              value="light"
              className={theme === 'light' ? 'isSelected' : ''}
              onClick={setLightTheme}
            >
              <LightMode fontSize="small" />
              Light
            </button>
            <button
              value="dark"
              className={theme === 'dark' ? 'isSelected' : ''}
              onClick={setDarkTheme}
            >
              <DarkModeOutlined fontSize="small" />
              Dark
            </button>
          </ToggleButtonGroup>
        </section>
      </SidebarContainer>
      <Overlay
        onClick={toggleSidebar}
        className={`${isOpen ? 'isOpenOverlay' : ''}`}
      />
    </>
  )
}
