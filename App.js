/**
 *
 * ReactElement(object) => HTML(Browser understand)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Child 1 H1 tag"),
    React.createElement("h2", {}, "Child 1 H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Child 2 H1 tag"),
    React.createElement("h2", {}, "Child 2 H2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

// console.log(heading); // object not html element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
