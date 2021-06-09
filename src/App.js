import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
import { AddTicket } from './pages/add-ticket/AddTicket.page';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { Entry } from './pages/entrypage/Entry.page';
import { TicketMessage } from './pages/message-area/TicketConversation.page';
import { TicketsList } from './pages/ticket-table/TicketsList.page';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        
                <Route exact path="/">
                  <Entry />
                </Route>
                
                <PrivateRoute  path="/dashboard">
                  <Dashboard />
                </PrivateRoute>
                <PrivateRoute path="/add-ticket">
                  <AddTicket />
                </PrivateRoute>
                <PrivateRoute path="/tickets-list">
                  <TicketsList />
                </PrivateRoute>
                {/* this is to pull a ticket */}
                <PrivateRoute path="/ticket-message/:tId">
                 <TicketMessage/>
                </PrivateRoute>
          
            
            
        </Switch>
      </Router>
    </div>
  );
}

export default App;
