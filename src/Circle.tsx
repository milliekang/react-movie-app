import styled, { keyframes } from "styled-components";

interface circleProps {
  bgColor:string;
  borderColor?:string;
}

interface containerProps{
  bgColor:string;
  borderColor:string;
}

const Container = styled.div<containerProps>`
width:200px;
height:200px;
background-color: ${props => props.bgColor};
border-radius: 100px;
border: 1px solid ${props => props.borderColor};
`;

	
function Circle({ bgColor, borderColor }: circleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor || bgColor} />;
}

export default Circle;

interface player {
  name:string,
  age:number
}

const sayHello = (playerObj : player) => `Hello ${playerObj.name} your age is ${playerObj.age}`;

console.log(sayHello({name:"nico", age:10}))