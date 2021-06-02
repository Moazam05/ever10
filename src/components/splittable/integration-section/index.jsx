import React from 'react'
import {Player, BigPlayButton, ControlBar} from 'video-react'
import "video-react/dist/video-react.css"

const IntegrationSection = () => (
    <section id="splittable-integration-section">
      <div className="container">
        <div className="row">
          <div className="col-12 splittable-integration-head text-center" id="video">
            <h1>
              <a aria-label="anchor" className="anchor before css-0" href="#video">
                <svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                  <path fill-rule="evenodd"
                        d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                </svg>
              </a> See it in action
            </h1>
            <hr/>
            <p>
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-md-10">
            <Player
                fluid={false}
                width={"auto"}
                height={500}
                className={".video-react.video-react-16-9"}
                aspectRatio={"16:9"}
                playsInline
                poster={require("../../../../static/img/splittable/splittable-preview.png")}
                src="https://ever10.s3.amazonaws.com/splittable-preview.mp4">
              <BigPlayButton position="center"/>
              <ControlBar autoHide={true} className="my-class"/>
            </Player>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-12 splittable-integration-head text-center">
            <img src="https://ever10.s3.amazonaws.com/splittable.gif"/>
          </div>
        </div>

      </div>
    </section>
)

export default IntegrationSection;