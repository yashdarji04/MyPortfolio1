import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiJava,
  DiJqueryLogo,

} from "react-icons/di";
import {
  SiNextdotjs,
  SiMysql,

} from "react-icons/si";
import { TbBrandGolang, } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <MdCss />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

    </Row>
  );
}

export default Techstack;
