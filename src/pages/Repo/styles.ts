import styled from 'styled-components'

export const Container = styled.div``

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem 1.5rem;

  > h2 {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
`

export const Repos = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-auto-columns: minmax(500px, auto);a */
  gap: 1rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
export const Tab = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  background: var(--header);
  backdrop-filter: blur(8px);
  box-shadow: inset 0px -1px 1px var(--primary-100);

  .wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 80rem;
    padding: 0 1.5rem;

    .profile {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      > img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }

      > a {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 0.875rem;
        color: var(--text-primary);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0.5rem;
    gap: 0.5rem;

    .label {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.875rem;
    }
    .number {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.75rem;
      background: var(--border-selected);
      color: var(--white);
      padding: 0 0.375rem;
      border-radius: 999px;
    }

    .underline {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: var(--border-selected);
      border-radius: 6px;
    }
  }
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background: rgba(0, 0, 0, 0.2); */
`
