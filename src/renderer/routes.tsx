import { Router, Route } from 'electron-router-dom';

import { MainScreen } from './screens';

export function AppRoutes() {
  return <Router main={<Route path="/" element={<MainScreen />} />} />;
}
