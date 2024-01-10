import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col className="" size={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={6} className="text-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/madhukar-shukla-242338194" target="_blank"><FaLinkedinIn /></a>
                <a href="https://github.com/madhukar008" target="_blank"><FaGithub /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}