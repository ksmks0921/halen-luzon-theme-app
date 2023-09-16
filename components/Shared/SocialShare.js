import React, { Component } from "react";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinIcon, LinkedinShareButton, EmailShareButton, EmailIcon} from 'react-share';

export default class SocialShare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            is_visible: false,     
            url: "",
            quote: ""       
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }
    
    toggleVisibility() {
        
        if (window.pageYOffset > 100 && window.pageYOffset < document.body.offsetHeight - window.screen.height || window.screen.width < 768) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }  


    render() {
        console.log("here:", window.screen.width);
        const { is_visible } = this.state;
        const buttonStyle = {            
            backgroundColor: "transparent",
            border: "none",
            padding: "0px",
            font: "inherit",
            color: "inherit",
            cursor: "pointer",                    
        };
     
        return (
          <>
            {is_visible && (
              <div
                className="social-share"                
              >
                <p className="hidden--portable">Share</p>
    
                <FacebookShareButton
                    url={this.props.url}
                    quote={this.props.quote}
                    hashtag="#muo"
                    className="share-button"
                    
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton
                url={this.props.url}
                quote={this.props.quote}
                hashtag="#muo"
                className="share-button"                
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>

                <EmailShareButton
                url={this.props.url}
                quote={'Dummy text!'}
                hashtag="#muo"
                className="share-button"                
                >
                    <EmailIcon size={32} round />
                </EmailShareButton>

                <LinkedinShareButton
                url={this.props.url}
                quote={this.props.quote}
                hashtag="#muo"
                className="share-button"                
                >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>

                <button
                  className="social-share-button share-button"
                  style={buttonStyle}
                  onClick={() => {navigator.clipboard.writeText(this.props.url)}}
                >                
                  <img src="/images/social-share/icons8-link-64.png" alt="image" style={{ width: "32px", height: "32px" }} />
                </button>

              </div>
            )}
          </>
        );
      }
  
};

