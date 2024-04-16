import PropTypes from 'prop-types'
import styled from 'styled-components'

const Content = styled.span`
  padding: 8px 15px;
  border-radius: 5px;
`

const Label = ({ info }) => {
  return (
    <Content className='bg-primary black fw-semibold'>
      { info }
    </Content>
  )
}

Label.propTypes = {
  info: PropTypes.string.isRequired
}

export default Label