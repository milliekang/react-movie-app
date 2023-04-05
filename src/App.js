import styled from "styled-components";

const Parent = styled.div`
display: flex;
`

const Child = styled.div`
width: 100px;
height: 100px;
background-color:${(props) => props.bgColor};
`
const Button = styled.button`
color: white;
background: tomato;
border-radius:50px;
border:0;
`

const Input = styled.input.attrs({required:true, minLength:10})`
background: tomato;
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
      <Button>Log in</Button>
      <Button as={"a"} href="#">Log in</Button>
    </Child>
    <Circle bgColor="whitesmoke" />
    <Input />
    <Input />
    <Input />
  </Parent>);
}

export default App;
