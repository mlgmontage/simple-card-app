import "./styles/index.css";
import { withProviders } from "./providers/with-providers";
import Routing from "pages";

const App = () => {
  return (
    <div className="container">
      <Routing />
    </div>
  );
};

export default withProviders(App);
