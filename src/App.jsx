import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './pages/sitelayout';

import HomePage from './pages/home';
import EngPhysPage from './pages/engphys';
import ReflectionsPage from './pages/reflections';
import ProjectsPage from './pages/projects';
import Sim2Real from './pages/projs/sim2real';
import Galaxy from './pages/projs/galaxy';
import Radio from './pages/projs/radio';
import Controller from './pages/projs/controller';

// import ExperiencesPage from './pages/experiences';
// import ReadingsPage from './pages/ReadingsPage';

function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/sim2real" element={<Sim2Real />} />
        <Route path="/projects/galaxy" element={<Galaxy />} />
        <Route path="/projects/rf-interference" element={<Radio/>} />
        <Route path="/projects/controller" element={<Controller />} />
        <Route path="/reflections" element={<ReflectionsPage />} />
        <Route path="/engphys" element={<EngPhysPage />} />
        {/* <Route path="/readings" element={<ReadingsPage />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}

export default App;