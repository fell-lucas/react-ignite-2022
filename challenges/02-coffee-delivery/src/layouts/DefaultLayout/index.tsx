import { Outlet } from 'react-router-dom';
import { Header } from '../../components';
import { ProjectInformation } from './components/ProjectInformation';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <ProjectInformation />
    </>
  );
}
