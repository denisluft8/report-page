import {
  AsimetriaFuncional,
  BajoPresion,
  EloIndex,
  PageSection,
  TextBox,
  TopInformation,
} from "../../components";
import { VisionPerformance } from "../../components/VisionPerformance/VisionPerformance";
import data from "../../data/data";
import useFormattedDate from "../../hooks/useFormattedDate";
import { DuoContainer, HomeFooter, HomeStyled } from "./Home.styles";

export const Home = () => {
  const formattedDate = useFormattedDate();
  return (
    <PageSection>
      <HomeStyled>
        <TopInformation
          id={data.id}
          firstName={data.firstName}
          lastName={data.lastName}
        />
        <DuoContainer>
          <EloIndex ranking={data.home.ranking} />
          <VisionPerformance progress={data.home.visionPerformance} />
        </DuoContainer>
        <DuoContainer>
          <AsimetriaFuncional radioValue={data.home.asimetriaFuncional} />
          <BajoPresion needleData={data.home.decisionBajoPresion} />
        </DuoContainer>
        <DuoContainer>
          <TextBox
            title="RESULT INTERPRETATION"
            textL="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin quis tellus in facilisis. Aenean aliquet hendrerit felis, sagittis pulvinar augue ullamcorper ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed nec varius felis. Nulla sapien neque, ullamcorper eu suscipit eu, condimentum eget ligula.  "
            textR="Mauris id vulputate urna. Praesent rhoncus velit a quam scelerisque, et maximus erat viverra. In hac habitasse platea dictumst. Mauris rutrum dolor eget laoreet commodo. Quisque porttitor erat felis, vitae maximus ex vehicula sit amet. Suspendisse ut tellus urna. Sed quis laoreet turpis. Maecenas lobortis nibh eget lectus tincidunt, in vehicula nulla pretium.  "
          />
        </DuoContainer>
        <HomeFooter>
          <h3>EVALUATION DATE | {formattedDate}</h3>
        </HomeFooter>
      </HomeStyled>
    </PageSection>
  );
};
