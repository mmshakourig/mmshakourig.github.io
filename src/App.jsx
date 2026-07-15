import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './pages/sitelayout';

import HomePage from './pages/home';
import ProjectsPage from './pages/projects';
import Sim2Real from './pages/projs/sim2real';

// import ExperiencesPage from './pages/experiences';
// import ReadingsPage from './pages/ReadingsPage';
// import ReflectionsPage from './pages/ReflectionsPage';
// import EngPhysPage from './pages/EngPhysPage';

function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/sim2real" element={<Sim2Real />} />
        {/* <Route path="/reflections" element={<ReflectionsPage />} /> */}
        {/* <Route path="/engphys" element={<EngPhysPage />} /> */}
        {/* <Route path="/readings" element={<ReadingsPage />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}

export default App;