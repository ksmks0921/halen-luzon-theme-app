import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import ComingSoon from "../HomeFive/ComingSoon";

class Popup extends Component {
  state = {
    popup: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ popup: true });
    }, 5000);
  }
  render() {
    return (
      <div>
        {this.state.popup && (
          <div
            className="backdrop"
            onClick={() => this.setState({ popup: false })}
          >
            <div className="popup-card">
            <img
                    src="/images/logo.svg"
                    alt="logo"
                    style={{
                      backgroundSize: "contain",
                      overflow: "hidden",
                      width: "4rem",
                      maxWidth: "100px",
                    }}
                  />
              <ComingSoon />
              <p className="popup-title">Invest In Our Company</p>
              <p className="popup-description">
                {" "}
                Halen Technology is actively seeking investors to participate in its start-up phase.
              </p>
              <a
                href="/investor-signup"
                rel="noopener noreferrer"
              >
                <button className="popup-button">Invest In Halen</button>
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Popup;
