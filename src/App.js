import logo from './logo.svg';
import './App.css';
import './styles.css';
import { datadogRum } from '@datadog/browser-rum';
import Home from './Home';


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
    defaultPrivacyLevel: 'mask-user-input',
});

function App() {
  return (
    <div className="App">
        <Home />
    </div>
  );
}

export default App;