import React from "react";

import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import { Fade } from "react-reveal";
import { Icon } from "@iconify/react";

const Projects = () => {
  return (
    <section className="section section-lg">
      <Container>
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              {/* <i className="ni ni-laptop text-info" /> */}
              <Icon icon={"entypo:laptop"} data-inline="false" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">Projects</h4>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          {projects.map((data, i) => {
            return <ProjectsCard key={i} data={data} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
