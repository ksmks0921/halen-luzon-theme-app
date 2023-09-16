import React, { Component, useRef, useState } from "react";
import Link from "next/link";

const BlogSidebar = (props) => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Change this number based on your desired items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = props.content.slice(startIndex, endIndex);
  const totalPages = Math.ceil(props.content.length / itemsPerPage);
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  const dateFormat = (date) => {
    var t = new Date(date);
    return (
      t.getDate() + " " + props.monthNames[t.getMonth()] + " " + t.getFullYear()
    );
  };

  const lastRef = useRef();

  return (
    <div className="widget-area pl-15" id="secondary">
      {/* <div className="widget widget_search">
        <div className="post-wrap">
          <form className="search-form">
            <label>
              <span className="screen-reader-text">Search for:</span>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>

            <button type="submit">
              <i className="bx bx-search"></i>
            </button>
          </form>
        </div>
      </div> */}

      <div className="widget widget-posts-thumb">
        <h3 className="widget-title">Popular Posts</h3>

        <div className="post-wrap">
          {itemsToDisplay.map((item) => (
            <article className="item">
              <Link href={{ pathname: "/newsroom", query: { id: item.id } }}>
                <a className="thumb">
                  {/* <span className="fullimage cover bg1" role="img"></span> */}
                  <img
                    src={item.imageurl}
                    alt="Image"
                    style={{
                      objectFit: "cover",
                      width: "80px",
                      height: "80px",
                    }}
                  />
                </a>
              </Link>

              <div className="info">
                <time>{dateFormat(item.date)}</time>

                <h4 className="title usmall">
                  <Link
                    href={{ pathname: "/newsroom", query: { id: item.id } }}
                  >
                    <a>{item.title}</a>
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>
          ))}

          {/* <article className="item">
            <Link href="/blog-details">
              <a className="thumb">
                <span className="fullimage cover bg2" role="img"></span>
              </a>
            </Link>

            <div className="info">
              <time>February 21, 2020</time>
              <h4 className="title usmall">
                <Link href="/blog-details">
                  <a>Be Healthy, Enjoy Life With Trifles Organic</a>
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/blog-details">
              <a className="thumb">
                <span className="fullimage cover bg3" role="img"></span>
              </a>
            </Link>

            <div className="info">
              <time>February 22, 2020</time>
              <h4 className="title usmall">
                <Link href="/blog-details">
                  <a>Buy Organic Food Online And Be Healthy</a>
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
        </div>
      </div>

      <div className="widget widget_categories">
        <h3 className="widget-title">Categories</h3>

        <div className="post-wrap">
          <ul>
            <li>
              <Link href="/blog">
                <a>
                  Business <span>(10)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>
                  Privacy <span>(20)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>
                  Technology <span>(10)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>
                  Tips <span>(12)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>
                  Uncategorized <span>(16)</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="widget widget_tag_cloud">
        <h3 className="widget-title">Tags</h3>

        <div className="post-wrap">
          <div className="tagcloud">
            <Link href="/blog">
              <a>IT Solution (3)</a>
            </Link>
            <Link href="/blog">
              <a>Uncategorized (3)</a>
            </Link>
            <Link href="/blog">
              <a>Tips (2)</a>
            </Link>
            <Link href="/blog">
              <a>AI Solution (2)</a>
            </Link>
            <Link href="/blog">
              <a>Technology (1)</a>
            </Link>
            <Link href="/blog">
              <a>Privacy (1)</a>
            </Link>
            <Link href="/blog">
              <a>Business (1)</a>
            </Link>
          </div>*/}
        </div>
        <hr />
        {props.content.length > itemsPerPage && (
          <div className="pagination-buttons d-flex justify-content-center">
            {currentPage > 1 && (
              <button  onClick={handlePreviousPage}>Previous</button>
            )}
            {endIndex < props.content.length && (
              <button className="ms-1" onClick={handleNextPage}>Next</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSidebar;
