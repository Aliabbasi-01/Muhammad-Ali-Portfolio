import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCode,
  faMobileScreenButton,
  faServer,
  faDatabase,
  faBug,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { Tooltip } from "react-tooltip";

const Media = () => {
  return (
    <div className="flex flex-col gap-6 lgl:gap-0 justify-between">

      {/* Social Media */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>

        <div className="flex flex-wrap gap-4">

          {/* GitHub */}
          <a
            target="_blank"
            href="https://github.com/Aliabbasi-01"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon" data-tooltip-id="github">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>

          {/* LinkedIn */}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/muhammad-ali-488060380/"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon" data-tooltip-id="linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
          </a>

        </div>
      </div>

      {/* Best Skills */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Best Skills On
        </h2>

        <div className="flex flex-wrap gap-4">

          {/* Kotlin */}
          <span
            className="bannerIcon"
            data-tooltip-id="kotlin"
          >
            <FontAwesomeIcon icon={faCode} />
          </span>

          {/* Android */}
          <span
            className="bannerIcon"
            data-tooltip-id="android"
          >
            <FontAwesomeIcon icon={faMobileScreenButton} />
          </span>

          {/* Backend */}
          <span
            className="bannerIcon"
            data-tooltip-id="backend"
          >
            <FontAwesomeIcon icon={faServer} />
          </span>

          {/* Database */}
          <span
            className="bannerIcon"
            data-tooltip-id="database"
          >
            <FontAwesomeIcon icon={faDatabase} />
          </span>

          {/* Testing */}
          <span
            className="bannerIcon"
            data-tooltip-id="testing"
          >
            <FontAwesomeIcon icon={faBug} />
          </span>

        </div>
      </div>

      {/* Tooltips */}

      <Tooltip id="github" place="top" effect="solid">
        GitHub
      </Tooltip>

      <Tooltip id="linkedin" place="top" effect="solid">
        LinkedIn
      </Tooltip>

      <Tooltip id="kotlin" place="top" effect="solid">
        Kotlin
      </Tooltip>

      <Tooltip id="android" place="top" effect="solid">
        Android Development
      </Tooltip>

      <Tooltip id="backend" place="top" effect="solid">
        .NET Core / REST APIs
      </Tooltip>

      <Tooltip id="database" place="top" effect="solid">
        SQL Server / Room / Firebase
      </Tooltip>

      <Tooltip id="testing" place="top" effect="solid">
        Software Testing / Katalon
      </Tooltip>

    </div>
  );
};

export default Media;