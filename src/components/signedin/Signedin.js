import React, {useState, useEffect, useContext} from "react";
import "./Signedin.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom"



export default function Blogs() {

  const [mediumBlogs, setMediumBlogs] = useState([]);
  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }

  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split("p>")
          .filter(el => !el.includes(">"))
          .map(el => el.replace("</", ".").replace("<", ""))
          .join(" ")
      : NaN;
  }

  useEffect(() => {
    if (blogSection.displayMediumBlogs === "true") {
      const getProfileData = () => {
        fetch("/blogs.json") //might need to switch to "blogs.json" if errors occur
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setMediumBlogsFunction(response.items);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
            );
            setMediumBlogsFunction("Error");
            blogSection.displayMediumBlogs = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (!blogSection.display) {
    return null;
  }  
  
  return (
    <Fade bottom duration={1000} distance="20px">
                
<div class="line-up">
    <div class="left-item">
                <Link to="/signin/signedin/myClients">
                <div>
                <button class="myClients"><i class="fas fa-users"></i> My Clients</button>
                
                </div>
                </Link>
    </div>

<div class="right-item">

                <Link to="/signin/signedin/review">
                <div>
                <button class="mybtn">Leave a review <i class="fas fa-comment"></i></button><br></br>
                </div>
                </Link>
      </div>
</div>

      <div className="main">
        <div className="blog-header">
          <h1 className="blog-header-text">Select A Case</h1>
          <p
            className="subTitle blog-subtitle"
            
          >
            Upon selecting a case you will only need to fill out each element once. You can then save client's info to never have to fill out the same element more than once. Selecting a case will allow you to automate both local files and the portals.
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogSection.displayMediumBlogs !== "true" ||
            mediumBlogs === "Error"
              ? blogSection.blogs.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      
                      blog={{
                        url: blog.url,
                        image: blog.image,
                        title: blog.title,
                        description: blog.description
                      }}
                    />
                  );
                })
              : mediumBlogs.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      blog={{
                        url: blog.link,
                        title: blog.title,
                        description: extractTextContent(blog.content)
                      }}
                    />
                  );
                })}
          </div>
          
        </div>

                
      </div>
                
    </Fade>
    
  );
}





