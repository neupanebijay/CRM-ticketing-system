import './App.css';
import { DefaultLayout } from './Layout/DefaultLayout';
import { AddTicket } from './pages/add-ticket/AddTicket.page';



function App() {
  return (
    <div className="App">
      <DefaultLayout >
          {/* <Dashboard /> */}
          <AddTicket />
      </DefaultLayout>
      {/* <Entry /> */}
    </div>
  );
}

export default App;
