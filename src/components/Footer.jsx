import styled from 'styled-components'
import imageAvatar from '../assets/image-avatar.webp'

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Img = styled.img`
  width: 35px;
  height: 35px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Img src={imageAvatar} alt="Greg Hooper" />
      <p className='fw-bold'>Greg Hooper</p>
    </FooterContainer>
  )
}

export default Footer