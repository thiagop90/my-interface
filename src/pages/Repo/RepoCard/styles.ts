import styled, { css } from 'styled-components'
import { RiBookMarkLine } from 'react-icons/ri'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--card);
  border: 1px solid var(--border-2);
  border-radius: 16px;
  transition: transform 0.3s, border 0.3s;

  &:hover,
  &:focus {
    border-color: var(--border-selected);
    transform: translateY(-2px);
  }
`

export const Topside = styled.div`
  padding: 0.75rem;

  > header {
    display: flex;
    align-items: center;
    gap: 1rem;

    > a {
      font-family: 'Plus Jakarta Sans', sans-serif;

      color: var(--text-primary);
      text-decoration: none;

      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }

  > p {
    margin: 0.25rem 0;
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--text-secondary);
  }
`

const iconCSS = css`
  width: 1rem;
  height: 1rem;
  fill: var(--text-secondary);
  flex-shrink: 0;
`

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
}

export const Botside = styled.div`
  display: flex;
  /* align-items: flex-end; */
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .language {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 50%;

      &.css {
        background: var(--other-language);
      }
      &.javascript {
        background: var(--javascript);
      }
      &.typescript {
        background: var(--typescript);
      }
    }

    > span {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-primary);
    }
  }

  > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: ${blue[500]};
    color: var(--white);
    text-decoration: none;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.75rem;
    /* font-weight: 600; */
    padding: 0.5rem 0.75rem;
    border-radius: 12px;
    transition: all 0.2s ease;

    &.disabled {
      opacity: 0.5;
    }

    &:hover {
      background-color: ${blue[600]};
    }

    .icon {
      width: 1rem;
      height: 1rem;
    }
  }
`
