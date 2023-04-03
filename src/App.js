import styled from "styled-components";

const Parent = styled.div`
display: flex;
`

const ChildOne = styled.div`
width: 100px;
height: 100px;
background-color:lavender;
`

const ChildTwo = styled.div`
width: 100px;
height: 100px;
background-color:lightcoral;
`

const Text = styled.h3``

function App() {
  return (
  <Parent>
    <ChildOne>
      <Text>hello</Text>
    </ChildOne>
    <ChildTwo />
  </Parent>);
}

export default App;
