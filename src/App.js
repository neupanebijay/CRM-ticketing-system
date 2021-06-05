import './App.css';
import { DefaultLayout } from './Layout/DefaultLayout';
import { TicketsList } from './pages/ticket-table/TicketsList.page';



function App() {
  return (
    <div className="App">
      <DefaultLayout >
          {/* <Dashboard /> */}
            {/* <AddTicket /> */}
          <TicketsList />
      </DefaultLayout>
      {/* <Entry /> */}
    </div>
  );
}

export default App;
