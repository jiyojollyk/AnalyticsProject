import "./App.css";
import "./styles.css";
import { datadogRum } from "@datadog/browser-rum";
import { datadogLogs } from "@datadog/browser-logs";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Success from "./Success";
import { Client } from "appwrite";
import Cart from "./cart";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("660267fc1a382de83e84");

datadogRum.init({
  applicationId: "0525ec28-0915-4bd3-bec4-17892c972a6b",
  clientToken: "pubf0e23b39f4ac304f67555784c83c854e",
  site: "us5.datadoghq.com",
  service: "analytics-application",
  env: "<ENV_NAME>",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 81,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
});

datadogRum.startView({
  name: "homepage",
  service: "analyticsproject",
  version: "1.0.0",
});

datadogLogs.init({
  clientToken: "pubf0e23b39f4ac304f67555784c83c854e",
  site: "us5.datadoghq.com",
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/detail" Component={ProductDetail} />
          <Route path="/thankyou" Component={Success} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
