import styled from 'styled-components'

const CardBaseStyle = styled.div`
  min-width: 400px;
  width: 30vw;
  border-radius: 10px;
  background-color: white;
  text-align: center;
  padding: 30px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1);
  margin: auto;
  @media (max-width: 768px) {
    min-width: 80%;
    width: 80%;
  }
`

export default CardBaseStyle
