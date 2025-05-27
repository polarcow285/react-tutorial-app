import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";
import Main from "./components/Main";

function App() {
  const items = ["a", "b", "c", "d"];
  const handleSelect = (item: string) => console.log(item);
  return (
    <div>
      <Main></Main>
      <Alert>
        <h2>the alert using children props</h2>
      </Alert>
      <ListGroup items={items} heading="Cities" onSelect={handleSelect} />
      <ListGroup items={items} heading="names" onSelect={handleSelect} />
    </div>
  );
}
export default App;
