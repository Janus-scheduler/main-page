import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import PackagesPage from './pages/PackagesPage';
import GettingStartedPage from './pages/GettingStartedPage';
import ApiReferencePage from './pages/ApiReferencePage';
import MonthGridApiPage from './pages/MonthGridApiPage';
import PromptApiPage from './pages/PromptApiPage';
import EventApiPage from './pages/EventApiPage';
import SchedulerManagerPage from './pages/SchedulerManagerPage';
import StorePage from './pages/StorePage';
import TypesPage from './pages/TypesPage';
import UtilitiesPage from './pages/UtilitiesPage';
import EventsPage from './pages/EventsPage';
import NlpPage from './pages/NlpPage';
import ThemingPage from './pages/ThemingPage';
import FaqPage from './pages/FaqPage';
import GoogleCalendarSyncPage from './pages/GoogleCalendarSyncPage';
import AgenticDevelopmentPage from './pages/AgenticDevelopmentPage';

// Framework Guides
import ReactGuidePage from './pages/ReactGuidePage';
import AngularGuidePage from './pages/AngularGuidePage';
import SolidGuidePage from './pages/SolidGuidePage';
import VueGuidePage from './pages/VueGuidePage';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/packages" element={<PackagesPage />} />
      <Route path="/docs/getting-started" element={<GettingStartedPage />} />
      
      {/* Framework Guides */}
      <Route path="/docs/frameworks/react" element={<ReactGuidePage />} />
      <Route path="/docs/frameworks/angular" element={<AngularGuidePage />} />
      <Route path="/docs/frameworks/solid" element={<SolidGuidePage />} />
      <Route path="/docs/frameworks/vue" element={<VueGuidePage />} />
      
      {/* API Reference */}
      <Route path="/docs/api/janus-timeline" element={<ApiReferencePage />} />
      <Route path="/docs/api/janus-month" element={<MonthGridApiPage />} />
      <Route path="/docs/api/janus-prompt" element={<PromptApiPage />} />
      <Route path="/docs/api/janus-event" element={<EventApiPage />} />
      <Route path="/docs/api/scheduler-manager" element={<SchedulerManagerPage />} />
      <Route path="/docs/api/store" element={<StorePage />} />
      <Route path="/docs/api/types" element={<TypesPage />} />
      <Route path="/docs/api/utilities" element={<UtilitiesPage />} />
      <Route path="/docs/api/events" element={<EventsPage />} />

      {/* Topics */}
      <Route path="/docs/topics/nlp" element={<NlpPage />} />
      <Route path="/docs/topics/theming" element={<ThemingPage />} />
      <Route path="/docs/topics/google-calendar-sync" element={<GoogleCalendarSyncPage />} />

      {/* Agentic Development */}
      <Route path="/docs/agentic-development" element={<AgenticDevelopmentPage />} />

      <Route path="/faq" element={<FaqPage />} />
    </Routes>
    </>
  );
}

export default App;
