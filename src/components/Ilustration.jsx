import styled from 'styled-components'
import ilustrationSVG from '../assets/illustration-article.svg'

const SVGContainer = styled.section`
  width: 100%;
  height: 200px;
  overflow: hidden;

  border-radius: 10px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Ilustration = () => {
  return (
    <SVGContainer>
      <Img src={ilustrationSVG} alt="Ilustration" />
    </SVGContainer>
  )
}

export default Ilustration