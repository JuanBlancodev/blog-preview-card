import styled from 'styled-components'

const Info = styled.p`
  text-align: justify;
  letter-spacing: -0.2px;
`

const MainSection = () => {
  return (
    <main>
      <Info className="grey fw-normal">
        These languages are the backbone of every website, defining structure, content, and presentation.
      </Info>
    </main>
  )
}

export default MainSection