"use string";

const React = require("react");
const ReactDomServer = require("react-dom/server");
const $ = require("whacko");

const Title = require("./Title");

const titleComponent = ReactDomServer.renderToStaticMarkup(
  React.createElement(Title)
);

console.log($(titleComponent).get(0).tagName);
