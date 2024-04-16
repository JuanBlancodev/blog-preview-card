import styled from 'styled-components'
import Ilustration from './Ilustration'
import Header from './Header'
import MainSection from './MainSection'

const Wrapper = styled.div`
  margin: 50px auto;
  width: 85%;
  height: 550px;

  padding: 25px;

  border-radius: 15px;
  border: 1px solid var(--color-black);
  box-shadow: 10px 10px 0 0 var(--color-black);
`

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 35px;
`

const App = () => {
  return (
    <Wrapper className='bg-white'>
      <Content>
        <Ilustration />
        <Header />
        
        <MainSection />
      </Content>
    </Wrapper>
  )
}

export default App