import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { Home } from './pages/Home/Home';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';

function App() {
    return (
        <>
            <Button appearence="big" onClick={() => console.log('Клик')}>
                Shop Now
            </Button>
            <Button appearence="big-white" onClick={() => console.log('Клик')}>
                Shop Now
            </Button>
            <Button onClick={() => console.log('Клик')}>Shop Now</Button>
            <Input placeholder="Email" />
            <div>
                <Link to="/">Главная</Link>
                <Link to="/cart">Корзина</Link>
            </div>
        </>
    );
}

export default App;
