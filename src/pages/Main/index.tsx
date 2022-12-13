import { Button } from "../../components/Button";
import {
  ContactActives,
  ContactContainer,
  ContactContent,
  ExamplesContainer,
  ExamplesContent,
  Footer,
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
import doctorCareExample from "../../assets/mockups/doctorCareLaptop2.png";
import dtMoneyExample from "../../assets/mockups/dtmoneyLaptop2.png";
import crachaExample from "../../assets/mockups/crachaCelular2.png";
import whatsAppLogo from "../../assets/whatsappLogo.png";
import instagramLogo from "../../assets/instagramLogo.png";
import emailIcon from "../../assets/emailIcon.png";

export function Main() {
  return (
    <MainContainer>
      <div className="wrapper">
        <IntroContainer>
          <Title>
            <span>I GO</span>
            <img src={logoGreen} />
            <h2>Webthinking</h2>
          </Title>
        </IntroContainer>
        <Subtitle>
          <p>
            Que tal criarmos um <strong>website completo</strong> com <br />
            as tecnologias mais atuais do mercado?
          </p>
          <a
            href="https://wa.me/5545988207140"
            target="_blank"
          >
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
      <ExamplesContainer>
        <div className="wrapper">
          <p>Veja alguns exemplos</p>
          <ExamplesContent>
            <img src={doctorCareExample} />
            <img
              src={crachaExample}
              style={{
                width: 280,
                position: "relative",
                top: 250,
                left: 100,
                zIndex: "-1",
              }}
            />
            <img src={dtMoneyExample} />
          </ExamplesContent>
        </div>
      </ExamplesContainer>
      <ContactContainer>
        <div className="wrapper">
          <ContactContent>
            <span>Ficou interessado?</span>
            <strong>Entre em contato!</strong>
          </ContactContent>
          <ContactActives>
            <a
              href="https://wa.me/5545988207140"
              target="_blank"
            >
              <img
                src={whatsAppLogo}
                alt="Logo WhatsApp"
              />
            </a>
            <a
              href="https://www.instagram.com/igo.codes/"
              target="_blank"
            >
              <img
                src={instagramLogo}
                alt="Logo Instagram"
              />
            </a>
            <a
              href="mailto:iw.programacao@gmail.com"
              target="_blank"
            >
              <img
                src={emailIcon}
                alt="Email"
              />
            </a>
          </ContactActives>
        </div>
      </ContactContainer>
      <Footer>
        <p>I GO - Todos os direitos reservados</p>
      </Footer>
    </MainContainer>
  );
}
