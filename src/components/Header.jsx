import styled from 'styled-components'
import Label from './Label'

const Container = styled.header`

`

const Header = () => {
  return (
    <Container>
      <Label info="Learning" />
    </Container>
  )
}

export default Header