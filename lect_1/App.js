const root = ReactDOM.createRoot(document.getElementById("root"));

const child = React.createElement("img",{src:"",alt:"image not found"},"child of heading");
const parent = React.createElement("div", {}, child);


root.render(parent);