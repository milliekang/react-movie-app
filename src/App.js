import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
from{
  transform:rotate(0deg);
}
to{
  transform: rotate(360deg);
  border-radius:100px;
}
`

const Parent = styled.div`
display: flex;
`

const Box = styled.div`
display: flex;
align-items:center;
justify-content:center;
height: 100px;
width: 100px;
background: tomato;
animation: ${rotateAnimation} 1s linear infinite;
span{
  font-size:30px;
  &:hover{
    background-color:lavender;
  }
}
`

function App() {
  return (
  <Parent>
    <Box>
      <span>🐣</span>
    </Box>
  </Parent>);
}

export default App;
