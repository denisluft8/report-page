import { ContainerDiv } from "../Container/ContainerDiv";
import {
  ChartHorizontalLine,
  ChartLine,
  ProgressBarWrapper,
  ProgressFill,
} from "./Recomendaciones.styles";

export const Recomendaciones = ({ data }) => {
  const handleBarColor = (value) => {
    if (value < 34) {
      return "#F96A97";
    } else if (value > 65) {
      return "#C8E263";
    } else {
      return "#ffc661";
    }
  };
  return (
    <ContainerDiv title="RECOMMENDATIONS" titleDirection="right" rounded>
      <ChartLine>
        <span>Technical visual anxiety</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.visualTecnica}
            barcolor={handleBarColor(data.visualTecnica)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Tactical visual anxiety</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.visualTactica}
            barcolor={handleBarColor(data.visualTactica)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Letter/symbol identification</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.letraSimbolo}
            barcolor={handleBarColor(data.letraSimbolo)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Zone and time fixation</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.zonaYTiempo}
            barcolor={handleBarColor(data.zonaYTiempo)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Yaw</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.yaw}
            barcolor={handleBarColor(data.yaw)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Pitch</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.pitch}
            barcolor={handleBarColor(data.pitch)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Roll</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.roll}
            barcolor={handleBarColor(data.roll)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Left-to-right exercises</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.izqADer}
            barcolor={handleBarColor(data.izqADer)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Right-to-left exercises</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.derAIzq}
            barcolor={handleBarColor(data.derAIzq)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartHorizontalLine marginhl="108px" />
      <ChartHorizontalLine marginhl="260px" />
    </ContainerDiv>
  );
};
