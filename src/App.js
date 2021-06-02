import './App.css';
import { DefaultLayout } from './Layout/DefaultLayout';
import { Dashboard } from './pages/pages/dashboard/Dashboard.page';


function App() {
  return (
    <div className="App">
      <DefaultLayout >
          <Dashboard />
      </DefaultLayout>
      {/* <Entry /> */}
    </div>
  );
}

export default App;
