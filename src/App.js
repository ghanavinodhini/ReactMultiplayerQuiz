import './App.css';
import Header from './components/app/header/Header';
import AddQuestionForm from './components/quizAdmin/AddQuestionForm/AddQuestionForm';

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Header />
        <AddQuestionForm />
      </div> 
    </div>
  );
}

export default App;
