
import "./App.css";
import BackgroundApp from "./components/backgroundApp/backgroundApp";
import FormToAddData from "./pageElements/formToAddData";
import DataCard from "./pageElements/dataCard";

function App() {
  return (
    <div className="flex justify-center p-4">
      <BackgroundApp>
        <FormToAddData />
        <DataCard />
      </BackgroundApp>
    </div>
  )
}

export default App;
