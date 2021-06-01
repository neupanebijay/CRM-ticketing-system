import './App.css';
import { DefaultLayout } from './Layout/DefaultLayout';


function App() {
  return (
    <div className="App">
      <DefaultLayout >
      Now after making this we can pass it as props in default layout section.
      </DefaultLayout>
      {/* <Entry /> */}
    </div>
  );
}

export default App;
