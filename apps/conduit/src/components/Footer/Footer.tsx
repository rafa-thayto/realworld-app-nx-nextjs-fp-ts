import Link from 'next/link'

export const Footer = () => (
  <footer>
    <div className="container">
      <Link href="/" passHref>
        <a className="logo-font">conduit</a>
      </Link>
      <span className="attribution">
        An interactive learning project from{' '}
        <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
        under MIT.
      </span>
    </div>
  </footer>
)
