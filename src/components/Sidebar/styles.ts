import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 18.75rem;
  height: 100vh;
  background: var(--primary);
  border-left: 1px solid var(--border);
  border-radius: 10px 0 0 10px;
  z-index: 2;
  translate: 22.5rem 0;
  transition: translate 0.3s;

  &.isOpen {
    translate: 0;
  }

  @media (min-width: 768px) {
    width: 22.5rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    border-bottom: 1px solid var(--border);
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.25rem 1rem;

    > p {
      font-size: 0.875rem;
    }
  }
`

export const ToggleButtonGroup = styled.button`
  width: 100%;
  border-radius: 10px;
  display: inline-flex;

  button:not(:first-of-type) {
    margin-left: -1px;
    border-left: 1px solid var(--border-selected);
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  button:not(:last-of-type) {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    gap: 0.5rem;
    border: 1px solid var(--border-2);
    border-radius: 10px;
    color: var(--text-secondary);
    font-size: 0.875rem;
    line-height: 1.75;

    cursor: pointer;

    &:hover {
      background: var(--hover);
    }

    &.isSelected {
      color: var(--text-terciary);
      background: var(--background-selected);
      border-color: var(--border-selected);

      &:hover {
        background: var(--hover-selected);
      }
    }
  }
`

export const Overlay = styled.div`
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;

  &.isOpenOverlay {
    visibility: visible;
    opacity: 1;
  }
`
