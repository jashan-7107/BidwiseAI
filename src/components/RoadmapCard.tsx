import React from "react";
import styled from "styled-components";
import { CiCircleCheck } from "react-icons/ci";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  min-height: 495px;
`;

const RoadmapStep = styled.div`
  margin: 0 0 22px;
  line-height: 1.7;
`;

const Span = styled.span`
  color: #27cd49;
  text-transform: uppercase;
  /* font-weight: 700; */
  font-size: 16px;
  line-height: 1;
`;

const StepName = styled.h3`
  text-transform: uppercase;
  font-size: 32px;
  line-height: 1;
  margin: 0 0 26px;
  font-weight: 700;
  letter-spacing: 2px;
`;

const Desc = styled.p`
  font-size: 20px;
  line-height: 1.45;
  margin: 0 0;
  font-weight: 400;
  font-family: "Mabry Pro Medium";
  color: #b7b4bb;
`;

const UL = styled.ul`
  list-style: none;
  padding-left: 0;
  &::before {
    content: "";
    display: block;
    width: 80px;
    height: 1px;
    background: rgba(131, 131, 131, 0.25);
    margin: 35px 0;
  }
  li {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;


const RoadmapCard = ({item, key} : any) => {
  const {step, name, desc, programme} = item;
  return (
    <div key={key} className=" col-12 col-md-6 col-lg-4 py-3 ps-4">
      <CardWrapper className="p-4">
        <RoadmapStep>
          <Span>{step}</Span>
        </RoadmapStep>
        <StepName>{name}</StepName>
        <Desc>{desc}</Desc>
        <UL>
          <li>
            <CiCircleCheck style={{color:"#27cd49"
            }} className="me-1 fs-4"/>
            {programme[0]}
          </li>
          <li>
          <CiCircleCheck style={{color:"#27cd49"
            }} className="me-1 fs-4"/>
            {programme[1]}
          </li>
          <li>
          <CiCircleCheck style={{color:"#27cd49"
            }} className="me-1 fs-4"/>
           {programme[2]}
          </li>
        </UL>
      </CardWrapper>
    </div>
  );
};

export default RoadmapCard;
