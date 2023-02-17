import React, {useState, useEffect, useContext} from "react";
import "./Signedin.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

function Signedin() {
    return (
        <Fade bottom duration={1000} distance="20px">
         <div>
            hello
         </div>
        </Fade>
      );
    }

export default Signedin;

