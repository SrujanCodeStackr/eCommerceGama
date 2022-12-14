import React, { useState } from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined,ArrowRightOutlined} from '@material-ui/icons'
import { sliderItems } from '../files/Data'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: aquamarine; */
    position: relative;
    overflow: hidden;
`
const Arrow= styled.div`
    width: 50px;
    height: 50px;
    background-color: #f0e7e7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction==="left" && "10px"};
    right: ${props=>props.direction==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
const Wrapper=styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props)=>props.Index * -100}vw);
    transition: all 1.5s ease;
`;
const Slide=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};  
`;
const ImgContainer= styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const InfoContainer=styled.div`
    flex: 1;
`;
const Image=styled.img`
    height: 80%;
`;
const Title=styled.h1`
    font-size:70px
`;
const Desc=styled.p`
    padding-top: 50px;
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button=styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex,serSlideIndex]=useState(0)
const handleClick=(direction)=>{
    if(direction==="left"){
         serSlideIndex(slideIndex>0?slideIndex-1:2)
    }else{
        serSlideIndex(slideIndex<2?slideIndex+1:0)
    }
}

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper Index={slideIndex}>
        {sliderItems.map((item)=>(
            <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button> Shop Now</Button>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}
export default Slider
