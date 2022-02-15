import "./App.css";
import BackgroundApp from "./Components/BackgroundApp/BackgroundApp";
import FormSection from "./PageElements/FormSection/FormSection";
import CardsSection from "./PageElements/CardsSection/CardsSection";
import HelpIcon from "./PageElements/HelpSection/HelpIcon";
import Copyright from "./PageElements/Copyright/Copyright";

function App() {
  return (
    <div className="flex justify-center py-4">
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
