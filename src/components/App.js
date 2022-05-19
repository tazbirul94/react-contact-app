import AddContact from './AddContact';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
    id: "1",
    name: "Shopan",
    email: "test@gmail.com"
  },
  {
    id: "2",
    name: "Mou",
    email: "mou@gmail.com"
  }
]
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contact={contacts} />
    </div>
  );
}

export default App;
