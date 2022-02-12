import "./App.css";
import BackgroundApp from "./components/backgroundApp/backgroundApp";
import FormToAddData from "./PageElements/formToAddData";
import CardsSection from "./PageElements/CardsSection/CardsSection";
import HelpIcon from "./components/help/helpIcon";
import Copyright from "./components/copyright/copyright";

function App() {
  return (
    <div className="flex justify-center p-4">
      <BackgroundApp>
        <HelpIcon />
        <FormToAddData />
        <CardsSection />
        <Copyright />
      </BackgroundApp>
    </div>
  );
}

export default App;
