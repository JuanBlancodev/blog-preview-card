import styled from 'styled-components'
import Ilustration from './Ilustration'
import Label from './Label'

const Container = styled.header`
  display: grid;
  row-gap: 20px;
`

const Header = () => {
  return (
    <Container>
      <Ilustration />
      <Label info="Learning" />
      <p className='fw-normal'>Published 21 Dec 2023</p>
      <h1 className='active fw-bold fs-medium nowarp'>HTML & CSS foundations</h1>
    </Container>
  )
}

export default Header