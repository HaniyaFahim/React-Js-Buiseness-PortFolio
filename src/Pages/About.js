import React, { Component } from "react";
import client from "./Client";
import marked from "marked";

class About extends Component {
  constructor() {
    super();
    this.state = { aboutpage: [] };
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: "about",
      })
      .then((entries) => {
        this.setState({ aboutpage: entries.items[0] });
      });
  }

  getParsedMarkdown(aboutDescription) {
    return {
      __html: marked(aboutDescription, { sanitize: true }),
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2
            style={{
              color: "#a4b3b6",
              textDecorationLine: "underline",
              textDecorationColor: "#8a6c99",
              textDecorationStyle: "wavy",
            }}
            className="text-center"
          >
            A Little About Me!
          </h2>
          {this.state.aboutpage.length === 0 ? (
            <center>
              <div class="loader"></div>
            </center>
          ) : (
            <center>
              <div className="row">
                <div className="col-md-4">
                  <div
                    dangerouslySetInnerHTML={this.getParsedMarkdown(
                      this.state.aboutpage.fields.aboutDescription
                    )}
                  ></div>
                </div>

                <div className="col-md-8">
                  <div
                    dangerouslySetInnerHTML={this.getParsedMarkdown(
                      this.state.aboutpage.fields.aboutDescription3
                    )}
                  ></div>
                </div>
              </div>
            </center>
          )
          // <p>{this.state.aboutpage.fields.aboutDescription}</p>
          }
        </div>
      </div>
    );
  }
}
export default About;
