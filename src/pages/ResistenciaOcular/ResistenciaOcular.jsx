import {
  BlinkDuration,
  BlinkingBlindness,
  ContainerDiv,
  EARBlinks,
  HeadCompensation,
  Header,
  PageSection,
  SingleProgressBar,
  TextBox,
} from "../../components";
import data from "../../data/data";
import {
  HorizontalContainerRO,
  ROStyled,
  VerticalContainerRO,
} from "./ResistenciaOcular.styles";

export const ResistenciaOcular = () => {
  return (
    <PageSection>
      <ROStyled>
        <Header
          upTitle={"VISION PERFORMANCE"}
          title={"OCULAR ENDURANCE"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin quis tellus in facilisis. Aenean aliquet hendrerit felis, sagittis pulvinar augue ullamcorper ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed nec varius felis."
          }
        />
        <HorizontalContainerRO>
          <BlinkDuration radioValue={data.resistenciaOcular.blinkDuration} />
          <EARBlinks />
          <VerticalContainerRO>
            <ContainerDiv title="RESULT">
              <SingleProgressBar
                subtitle={`LEVEL 1`}
                progress={data.resistenciaOcular.resultado}
              />
            </ContainerDiv>
            <BlinkingBlindness
              chartValue={data.resistenciaOcular.blinkingBlindness}
            />
          </VerticalContainerRO>
        </HorizontalContainerRO>
        <TextBox
          title={"INTERPRETACION DE RESULTADO"}
          textL={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin quis tellus in facilisis. Aenean aliquet hendrerit felis, sagittis pulvinar augue ullamcorper ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed nec varius felis. Mauris rutrum dolor"
          }
          textR={
            "eget laoreet commodo. Quisque porttitor erat felis, vitae maximus ex vehicula sit amet. Suspendisse ut tellus urna. Sed quis laoreet turpis. Maecenas lobortis nibh eget lectus tincidunt, in vehicula nulla pretium. Sed venenatis accumsan sagittis."
          }
        />
        <HeadCompensation
          progress={data.resistenciaOcular.headCompensation.percentage}
          progressNivel={data.resistenciaOcular.headCompensation.nivel}
          stackValue1={data.resistenciaOcular.headCompensation.stackValue1}
          stackColor1={data.resistenciaOcular.headCompensation.stackColor1}
          stackValue2={data.resistenciaOcular.headCompensation.stackValue2}
          stackColor2={data.resistenciaOcular.headCompensation.stackColor2}
          stackValue3={data.resistenciaOcular.headCompensation.stackValue3}
          stackColor3={data.resistenciaOcular.headCompensation.stackColor3}
          stackValue4={data.resistenciaOcular.headCompensation.stackValue4}
          stackColor4={data.resistenciaOcular.headCompensation.stackColor4}
          stackValue5={data.resistenciaOcular.headCompensation.stackValue5}
          stackColor5={data.resistenciaOcular.headCompensation.stackColor5}
          stackValue6={data.resistenciaOcular.headCompensation.stackValue6}
          stackColor6={data.resistenciaOcular.headCompensation.stackColor6}
        />
      </ROStyled>
    </PageSection>
  );
};
