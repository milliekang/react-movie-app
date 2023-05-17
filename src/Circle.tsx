import styled, { keyframes } from "styled-components";

interface circleProps {
  bgColor:string;
}

interface containerProps{
  bgColor:string
}

const Container = styled.div<containerProps>`
width:200px;
height:200px;
background-color: ${props => props.bgColor};
border-radius: 100px;
`;

function Circle({bgColor} : circleProps){
  return <Container bgColor={bgColor} />
}

export default Circle;

interface player {
  name:string,
  age:number
}

const sayHello = (playerObj : player) => `Hello ${playerObj.name} your age is ${playerObj.age}`;

console.log(sayHello({name:"nico", age:10}))