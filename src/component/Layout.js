import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "./component/Header/Header.js";
import Footer from "./component/Footer/Footer.js";
import GridContainer from "./component/Grid/GridContainer.js";
import GridItem from "./component/Grid/GridItem.js";

import Parallax from "./component/Parallax/Parallax.js";
// sections for this page

import SectionTabs from "./compiler.js";


import styles from "./assets/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Learn With Me"
        color="primary"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "success"
        }}
        {...rest}
      />
      <Parallax image={require("./assets/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
               
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax> 

      <div className={classNames(classes.main, classes.mainRaised)}>
      
        <SectionTabs /> 
        
       
      </div>
      <Footer />
    </div>
  );
}
