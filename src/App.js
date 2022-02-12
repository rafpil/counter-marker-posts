import "./App.css";
import BackgroundApp from "./components/BackgroundApp/BackgroundApp";
import FormSection from "./PageElements/FormSection/FormSection";
import CardsSection from "./PageElements/CardsSection/CardsSection";
import HelpIcon from "./components/help/helpIcon";
import Copyright from "./components/copyright/copyright";

function App() {
  return (
    <div className="flex justify-center p-4">
      <BackgroundApp>
        <HelpIcon />
        <FormSection />
        <CardsSection />
        <Copyright />
      </BackgroundApp>
    </div>
  );
}

export default App;
