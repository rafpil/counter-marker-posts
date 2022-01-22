
import "./App.css";
import BackgroundApp from "./components/backgroundApp/backgroundApp";
import FormToAddData from "./pageElements/formToAddData";

function App() {
  return (
    <div className="flex justify-center p-4">
      <BackgroundApp>
        <FormToAddData />
      </BackgroundApp>
    </div>
  )
}

export default App;
