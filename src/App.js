import './App.css';
import { DefaultLayout } from './Layout/DefaultLayout';
import { TicketMessage } from './pages/message-area/TicketConversation.page';



function App() {
  return (
    <div className="App">
      <DefaultLayout >
          {/* <Dashboard /> */}
            {/* <AddTicket /> */}
          {/* <TicketsList /> */}
          <TicketMessage/>
      </DefaultLayout>
      {/* <Entry /> */}
    </div>
  );
}

export default App;
