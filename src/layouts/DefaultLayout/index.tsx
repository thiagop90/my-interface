import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { LayoutContainer } from './styles'

export const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Sidebar />
      <Outlet />
    </LayoutContainer>
  )
}
