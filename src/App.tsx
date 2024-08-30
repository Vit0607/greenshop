import './App.css';
import Button from './components/Button/Button';

function App() {
    return (
        <>
            <Button onClick={() => console.log('Клик')}>Shop Now</Button>
        </>
    );
}

export default App;
