import styled from 'styled-components'
import Label from './Label'

const Container = styled.header`
  display: grid;
  row-gap: 15px;
`

const Header = () => {
  return (
    <Container>
      <Label info="Learning" />
      <p className='fw-normal'>Published 21 Dec 2023</p>
      <h1 className='fw-bold fs-medium nowarp'>HTML & CSS foundations</h1>
    </Container>
  )
}

export default Header