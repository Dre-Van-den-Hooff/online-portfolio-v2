import React from "react";
import { Button } from "reactstrap";
import { Icon } from "@iconify/react";
import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.facebook && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="facebook"
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener"
          aria-label="Facebook">
          <span className="btn-inner--icon">
            {/* <i className="fa fa-facebook-square" /> */}
            <Icon icon={"brandico:facebook-rect"} data-inline="false" />
          </span>
        </Button>
      )}
      {socialLinks.instagram && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="instagram"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram">
          <span className="btn-inner--icon">
            {/* <i className="fa fa-instagram" /> */}
            <Icon icon={"carbon:logo-instagram"} data-inline="false" />
          </span>
        </Button>
      )}
      {socialLinks.github && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank">
          <span className="btn-inner--icon">
            {/* <i className="fa fa-github" /> */}
            <Icon icon={"carbon:logo-github"} data-inline="false" />
          </span>
        </Button>
      )}
      {socialLinks.linkedin && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank">
          <span className="btn-inner--icon">
            {/* <i className="fa fa-linkedin" /> */}
            <Icon icon={"carbon:logo-linkedin"} data-inline="false" />
          </span>
        </Button>
      )}
      {socialLinks.twitter && (
        <Button
          className="btn-icon-only rounded-circle"
          color="twitter"
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener"
          aria-label="Twitter">
          <span className="btn-inner--icon">
            {/* <i className="fa fa-twitter" /> */}
            <Icon icon={"carbon:logo-github"} data-inline="false" />
          </span>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;
