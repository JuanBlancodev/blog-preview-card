import styled from 'styled-components'
import Ilustration from './Ilustration'

const Wrapper = styled.div`
  margin: 80px auto;
  width: 85%;
  height: 470px;

  padding: 25px;

  border-radius: 15px;
  border: 1px solid var(--color-black);
  box-shadow: 10px 10px 0 0 var(--color-black);
`

const Content = styled.div`
  border: 1px solid red;

  width: 100%;
  height: 100%;
`

const App = () => {
  return (
    <Wrapper className='bg-white'>
      <Content>
        <Ilustration />
      </Content>
    </Wrapper>
  )
}

export default App