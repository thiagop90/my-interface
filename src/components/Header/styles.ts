import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  /* border-bottom: 1px solid var(--border); */
  background: var(--header);
  backdrop-filter: blur(8px);
  box-shadow: inset 0px -1px 1px var(--primary-100);
`

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 80rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`

export const LogoName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.5rem;
  border-radius: 10px;
  color: var(--secondary);

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  span {
    font-size: 0.75rem;
    line-height: 1.75;
    letter-spacing: 1px;
  }
`

const Buttons = css`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: var(--secondary);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;

  &:hover {
    border-color: var(--border-hover);
    background: var(--hover);
  }
`

export const ContainerLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 0.5rem;
  gap: 0.5rem;

  @media (min-width: 768px) {
    justify-content: center;
  }

  a {
    ${Buttons}
  }
`

export const ButtonSettings = styled.button`
  ${Buttons}
`
