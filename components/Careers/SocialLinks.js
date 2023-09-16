import React from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    EmailIcon
  } from 'react-share';
  
export default function SocialLinks({postText}) {
    let shareUrl = "https://gethalen.com/careers/";
    if (typeof window !== "undefined") {
        shareUrl= window.location.href;
    }

    return (
        <>
            <FacebookShareButton
                url={shareUrl}
                quote={postText}
            >
                <FacebookIcon size={35} round />
            </FacebookShareButton>

            <TwitterShareButton
                url={shareUrl}
                title={postText}
            >
                <TwitterIcon size={35} round />
            </TwitterShareButton>

            <LinkedinShareButton
                url={shareUrl}
                title={postText}
                summary={postText}
            >
                <LinkedinIcon size={35} round />
            </LinkedinShareButton>

            <EmailShareButton
                url={shareUrl}
                subject={postText}
                body={"Check out this "+postText+" I think you'd be a great fit and should consider applying. Here is a link to the position. Good luck!"}
            >
                <EmailIcon size={35} round />
            </EmailShareButton>
        </>
    );
}