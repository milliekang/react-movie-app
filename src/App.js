import styled from "styled-components";

const Parent = styled.div`
display: flex;
`

const Child = styled.div`
width: 100px;
height: 100px;
background-color:${(props) => props.bgColor};
`


// styled component의 함수형 사용
const Circle = styled(Child)`
border-radius:100px;
`

// const ChildTwo = styled.div`
// width: 100px;
// height: 100px;
// background-color:lightcoral;
// `

const Text = styled.h3``

function App() {
  return (
  <Parent>
    <Child bgColor="lavender">
      <Text>hello</Text>
    </Child>
    <Circle bgColor="whitesmoke" />
  </Parent>);
}

export default App;
