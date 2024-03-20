import './App.css';
import './styles.css';
import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from "@datadog/browser-logs";
import Home from './Home';
import { Route, Routes, HashRouter } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Success from './Success';

datadogRum.init({
    applicationId: '1ccca677-9a7c-41ed-b968-7e1987b78697',
    clientToken: 'pubdd1edba2a0d1adebfe127c42b280eb82',
    site: 'us5.datadoghq.com',
    service: 'exp-commerce',
    env: '<ENV_NAME>',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    trackViewsManually: true,
    defaultPrivacyLevel: 'mask-user-input',
});

datadogRum.startView({
  name: 'homepage',
  service: 'analyticsproject',
  version: '1.0.0'
})

datadogLogs.init({
  clientToken: 'pubdd1edba2a0d1adebfe127c42b280eb82',
  site: 'us5.datadoghq.com',
  forwardErrorsToLogs: true,
  sessionSampleRate: 100
});

function App() {
  return (
    <div className="App">
        <HashRouter>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='detail' Component={ProductDetail} />
            <Route path='thankyou' Component={Success} />
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
