import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  min-height: calc(100vh - 9rem);
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1010px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`