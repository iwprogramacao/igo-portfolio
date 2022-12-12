import { Button } from "../../components/Button";
import {
  IntroContainer,
  MainContainer,
  Subtitle,
  TechnologiesContainer,
  TechsSymbolsContainer,
  Title,
} from "./styles";
import logoGreen from "../../assets/logoGreenBg.png";
import cssLogo from "../../assets/cssLogo.png";
import htmlLogo from "../../assets/htmlLogo.png";
import jsLogo from "../../assets/jsLogo.png";
import nodeLogo from "../../assets/nodeLogo.png";
import postgreLogo from "../../assets/postgreLogo.png";
import reactLogo from "../../assets/reactLogo.png";
import styledLogo from "../../assets/styledLogo.svg";

export function Main() {
  return (
    <MainContainer>
      <div className="wrapper">
        <IntroContainer>
          <Title>
            <span>I GO</span>
            <img src={logoGreen} />
            <small>Webthinking</small>
          </Title>
        </IntroContainer>
        <Subtitle>
          <p>
            Que tal criarmos um website completo com as mais atuais tecnologias
            do mercado?
          </p>
          <a href="#">
            <Button>Tenho interesse</Button>
          </a>
        </Subtitle>
      </div>
      <TechnologiesContainer>
        <div className="wrapper">
          <h2>Tecnologias utilizadas</h2>
          <TechsSymbolsContainer>
            <div>
              <img
                src={htmlLogo}
                alt="Logo HTML"
              />
              <span>HTML</span>
            </div>
            <div>
              <img
                src={cssLogo}
                alt="Logo CSS"
              />
              <span>CSS</span>
            </div>
            <div>
              <img
                src={jsLogo}
                alt="Logo JavaScript"
              />
              <span>JavaScript</span>
            </div>
            <div>
              <img
                src={reactLogo}
                alt="Logo ReactJS"
              />
              <span>ReactJS</span>
            </div>
            <div>
              <img
                src={styledLogo}
                alt="Logo Styled Components"
              />
              <span>Styled Components</span>
            </div>
            <div>
              <img
                src={nodeLogo}
                alt="Logo Node"
              />
              <span>NodeJS</span>
            </div>
            <div>
              <img
                src={postgreLogo}
                alt="Logo Postgre"
              />
              <span>Postgre</span>
            </div>
          </TechsSymbolsContainer>
        </div>
      </TechnologiesContainer>
    </MainContainer>
  );
}
