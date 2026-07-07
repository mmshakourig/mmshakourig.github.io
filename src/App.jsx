import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/Home';

import ExperiencesPage from './pages/Experiences';
// import ProjectsPage from './pages/ProjectsPage';
// import ReadingsPage from './pages/ReadingsPage';
// import ReflectionsPage from './pages/ReflectionsPage';
// import EngPhysPage from './pages/EngPhysPage';

function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        {/* <Route path="/reflections" element={<ReflectionsPage />} /> */}
        {/* <Route path="/engphys" element={<EngPhysPage />} /> */}
        {/* <Route path="/readings" element={<ReadingsPage />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}

export default App;