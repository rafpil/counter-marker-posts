
import "./App.css";
import BackgroundApp from "./components/backgroundApp/backgroundApp";
import FormToAddData from "./pageElements/formToAddData";
import DataCard from "./pageElements/dataCard";
import HelpIcon from "./components/help/helpIcon";

function App() {
  return (
    <div className="flex justify-center p-4">
      <BackgroundApp>
        <HelpIcon />
        <FormToAddData />
        <DataCard />
      </BackgroundApp>
    </div>
  )
}

export default App;
