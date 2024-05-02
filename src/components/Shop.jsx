
import Product from './Product.jsx';

export default function Shop({ children }) {
  return (
    <section id="shop">

      <ul id="products">
        {children}
      </ul>
    </section>
  );
}
