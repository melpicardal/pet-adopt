import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Pepper" animal="Bird" breed="Cocaktiel"></Pet>
      <Pet name="Beam" animal="Dog" breed="Wheaten Terrier"></Pet>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
