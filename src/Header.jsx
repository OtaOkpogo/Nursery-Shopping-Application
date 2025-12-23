import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const totalItems = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="header">
      <h1>í¼¿ Cozy Haven</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart">í»’ {totalItems}</Link>
      </nav>
    </header>
  );
};

export default Header;

