import React, { Component, useEffect, useState } from "react";
import NewsroomSidebar from "./NewsroomSidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const NewsroomContent = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function newsroomFetch() {
      await axios
        .get("https://api.gethalen.com/newsrooms")
        .then((response) => {
          console.log(response.data);
          setdata(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }

    newsroomFetch();
  }, []);

  const router = useRouter();
  var idArray = router.asPath.split("=");
  var id = parseInt(idArray[1]);

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const firstIndex = data[props.index - 3];

  const dateFormat = (date) => {
    var t = new Date(date);
    return t.getDate() + " " + monthNames[t.getMonth()] + " " + t.getFullYear();
  };

  return (
    <section className="news-details-area ptb-100">
      <div className="container">
        {firstIndex ? (
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image" style={{ textAlign: "center" }}>
                  <img
                    src={firstIndex.imageurl}
                    alt="Image"
                    style={{ maxHeight: "500px" }}
                    key={firstIndex.id}
                  />
                </div>
                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On: {dateFormat(firstIndex.date)}</span>
                      </li>
                      <li>
                        <span>Posted By: {firstIndex.author}</span>{" "}
                      </li>
                    </ul>
                  </div>

                  <h3>{firstIndex.title}</h3>
                  {firstIndex.details.split("\\n").map((i) => {
                    return <p>{i}</p>;
                  })}

                  <a href={firstIndex.link} target="_blank">
                    <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
                      Read The Full article
                    </p>
                  </a>
                </div>

                {/* <div className="article-footer">
                <div className="article-tags">
                  <span>
                    <i className="bx bx-share-alt"></i>
                  </span>
                  <Link href="#">
                    <a>Share</a>
                  </Link>
                </div>

                <div className="article-share">
                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/" target="_blank">
                        <i className="bx bxl-pinterest-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
                {/* <div className="post-navigation">
                <div className="navigation-links">
                  <div className="nav-previous">
                    <Link>
                      <a>
                        <i className="bx bx-left-arrow-alt"></i> Prev Post
                      </a>
                    </Link>
                  </div>

                  <div className="nav-next">
                    <Link>
                      <a>
                        Next Post <i className="bx bx-right-arrow-alt"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div> */}
                {/* Comments Area */}
                {/* <CommentsArea /> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <NewsroomSidebar monthNames={monthNames} content={data} />
            </div>
          </div>
        ) : (
          <div>
            <h1>No News To Show</h1>{" "}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsroomContent;
