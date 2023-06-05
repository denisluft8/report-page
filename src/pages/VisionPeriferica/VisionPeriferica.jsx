import { lettersChart } from "../../assets";
import {
  AverageAcuraccy,
  BlinkingBlindness,
  ContainerDiv,
  HeadCompensation,
  Header,
  PageSection,
  SingleProgressBar,
  TextBox,
} from "../../components";
import data from "../../data/data";
import {
  DuoContainerVP,
  TextBoxImg,
  VPStyled,
  VerticalHolder,
} from "./VisionPeriferica.styles";

export const VisionPeriferica = () => {
  return (
    <PageSection>
      <VPStyled>
        <Header
          upTitle="VISION PERFORMANCE"
          title="PERIPHERAL VISION"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin quis tellus in facilisis. Aenean aliquet hendrerit felis, sagittis pulvinar augue ullamcorper ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed nec varius felis. Nulla sapien neque, ullamcorper eu suscipit eu, condimentum eget ligula."
        />
        <DuoContainerVP>
          <AverageAcuraccy />
          <VerticalHolder>
            <ContainerDiv
              title="RESULT"
              contwidth="100px"
              titleDirection="right"
            >
              <SingleProgressBar
                subtitle="LEVEL 1"
                progress={data.visionPeriferica.resultado1}
              />
            </ContainerDiv>
            <BlinkingBlindness
              chartValue={data.visionPeriferica.blinkingBlindness}
            />
          </VerticalHolder>
        </DuoContainerVP>
        <TextBox
          title="RESULTS INTERPRETATION"
          textL={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin quis tellus in facilisis. Aenean aliquet hendrerit felis, sagittis pulvinar augue ullamcorper ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed nec varius felis. Nulla sapien neque, ullamcorper eu suscipit eu, condimentum eget ligula. Mauris id vulputate urna. Praesent rhoncus velit a quam scelerisque, et maximus erat viverra. In hac habitasse platea dictumst. In hac habitasse platea dictumst. In hac habitasse platea dictumst."
          }
        >
          <TextBoxImg src={lettersChart} />
        </TextBox>
        <HeadCompensation
          progress={data.visionPeriferica.headCompensation.percentage}
          progressNivel={data.visionPeriferica.headCompensation.nivel}
          stackValue1={data.visionPeriferica.headCompensation.stackValue1}
          stackColor1={data.visionPeriferica.headCompensation.stackColor1}
          stackValue2={data.visionPeriferica.headCompensation.stackValue2}
          stackColor2={data.visionPeriferica.headCompensation.stackColor2}
          stackValue3={data.visionPeriferica.headCompensation.stackValue3}
          stackColor3={data.visionPeriferica.headCompensation.stackColor3}
          stackValue4={data.visionPeriferica.headCompensation.stackValue4}
          stackColor4={data.visionPeriferica.headCompensation.stackColor4}
          stackValue5={data.visionPeriferica.headCompensation.stackValue5}
          stackColor5={data.visionPeriferica.headCompensation.stackColor5}
          stackValue6={data.visionPeriferica.headCompensation.stackValue6}
          stackColor6={data.visionPeriferica.headCompensation.stackColor6}
        />
      </VPStyled>
    </PageSection>
  );
};
