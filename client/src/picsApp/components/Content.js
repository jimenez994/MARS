import React from "react";
// import "./style.css";
import './CardItem';
import CardItem from "./CardItem";

const Content = (props) => {
  let content = <h1>Loading ...</h1>;
  if (props.data) {
    content = props.data.map((img) => (
      <CardItem img={img} key={img.id}/>
    ));
  }
  return <section className="photos image-list">{content}</section>;
};

export default Content;
