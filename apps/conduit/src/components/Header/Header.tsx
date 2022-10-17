import Link from 'next/link'

export const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link href="/" passHref>
          <a className="navbar-brand">conduit</a>
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link href="/home" passHref>
              <a className="nav-link active">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/articles/new" passHref>
              <a className="nav-link">
                <i className="ion-compose"></i>&nbsp;New Article
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/settings" passHref>
              <a className="nav-link">
                <i className="ion-gear-a"></i>&nbsp;Settings
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/sign-in" passHref>
              <a className="nav-link">Sign in</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/sign-up" passHref>
              <a className="nav-link">Sign up</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
