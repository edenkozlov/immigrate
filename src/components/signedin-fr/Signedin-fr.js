import React, {useState, useEffect, useContext} from "react";
import "./Signedin-fr.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";



export default function BlogsFr() {

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
      <div className="main">
        <div className="blog-header">
          <h1 className="blog-header-text">Sélectionnez Un Cas</h1>
          <p
            className="subTitle blog-subtitle"
            
          >
            Lors de la sélection d'un cas, vous n'aurez qu'à remplir chaque élément une seule fois. Vous pouvez ensuite enregistrer les informations du client pour ne jamais avoir à remplir le même élément plus d'une fois. La sélection d'un cas vous permettra d'automatiser à la fois les fichiers locaux et les portails.
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogSection.displayMediumBlogs !== "true" ||
            mediumBlogs === "Error"
              ? blogSection.blogsFr.map((blog, i) => {
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





