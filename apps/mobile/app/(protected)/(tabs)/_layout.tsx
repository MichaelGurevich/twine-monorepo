import { Tabs } from 'expo-router';

const AppLayout = () => {
  // Renders the navigation stack for all authenticated app routes
  return <Tabs screenOptions={{ headerShown: false }} />;
};

export default AppLayout;
