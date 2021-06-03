import Link from 'next/link';

const Navbar = () => (
  <div className="flex justify-between ml-6 mr-6 mt-4">
    <Link href="/">
      <a>
        <img
          alt="home"
          className="logo"
          height="150"
          src="/strapi.png"
          width="150"
        />
      </a>
    </Link>
    <button className="snipcart-checkout flex items-center" type="button">
      <img alt="Cart" src="/cart.svg" />
      <span className="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500" />
    </button>
  </div>
);

export default Navbar;
