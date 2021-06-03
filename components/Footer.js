const Footer = () => (
  <div className="flex justify-between m-6">
    <p className="text-xs font-semibold text-gray-600">
      Strapi Starter Next.js E-commerce
    </p>
    <div className="flex gap-3 ml-4">
      <a className="max-w-xs ml-4" href="https://twitter.com/strapijs">
        <img alt="Twitter" src="/twitter.svg" />
      </a>
      <a className="ml-3" href="https://facebook.com/strapijs">
        <img alt="Facebook" src="/facebook.svg" />
      </a>
      <a
        className="ml-3"
        href="https://github.com/strapi/strapi-starter-next-ecommerce"
      >
        <img alt="GitHub" src="/github.svg" />
      </a>
    </div>
  </div>
);

export default Footer;
