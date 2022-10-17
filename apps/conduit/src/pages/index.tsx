import Link from 'next/link'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function Index() {
  return (
    <>
      <Header />
      <main>
        <div className="home-page">
          <div className="banner">
            <div className="container">
              <h1 className="logo-font">conduit</h1>
              <p>A place to share your knowledge.</p>
            </div>
          </div>

          <div className="container page">
            <div className="row">
              <div className="col-md-9">
                <div className="feed-toggle">
                  <ul className="nav nav-pills outline-active">
                    <li className="nav-item">
                      <Link href="/" passHref>
                        <a className="nav-link disabled">Your Feed</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/" passHref>
                        <a className="nav-link active">Global Feed</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="article-preview">
                  <div className="article-meta">
                    <Link href="/" passHref>
                      <a href="profile.html">
                        <img src="http://i.imgur.com/Qr71crq.jpg" />
                      </a>
                    </Link>
                    <div className="info">
                      <Link href="/" passHref>
                        <a className="author">Eric Simons</a>
                      </Link>
                      <span className="date">January 20th</span>
                    </div>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                      <i className="ion-heart"></i> 29
                    </button>
                  </div>
                  <Link href="/" passHref>
                    <a className="preview-link">
                      <h1>How to build webapps that scale</h1>
                      <p>This is the description for the post.</p>
                      <span>Read more...</span>
                    </a>
                  </Link>
                </div>

                <div className="article-preview">
                  <div className="article-meta">
                    <Link href="/" passHref>
                      <a href="profile.html">
                        <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                      </a>
                    </Link>
                    <div className="info">
                      <Link href="/" passHref>
                        <a className="author">Albert Pai</a>
                      </Link>
                      <span className="date">January 20th</span>
                    </div>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                      <i className="ion-heart"></i> 32
                    </button>
                  </div>
                  <Link href="/" passHref>
                    <a className="preview-link">
                      <h1>
                        The song you won&apos;t ever stop singing. No matter how
                        hard you try.
                      </h1>
                      <p>This is the description for the post.</p>
                      <span>Read more...</span>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-md-3">
                <div className="sidebar">
                  <p>Popular Tags</p>

                  <div className="tag-list">
                    <Link href="/" passHref>
                      <a className="tag-pill tag-default">programming</a>
                    </Link>
                    <Link href="/" passHref>
                      <a className="tag-pill tag-default">javascript</a>
                    </Link>
                    <Link href="/" passHref>
                      <a className="tag-pill tag-default">emberjs</a>
                    </Link>
                    <Link href="/" passHref>
                      <a className="tag-pill tag-default">angularjs</a>
                    </Link>
                    <Link href="/" passHref>
                      <a className="tag-pill tag-default">react</a>
                    </Link>
                    <Link href="/" passHref>
                      <a className="tag-pill tag-default">mean</a>
                    </Link>
                    <Link href="/" passHref>
                      <a className="tag-pill tag-default">node</a>
                    </Link>
                    <Link href="/" passHref>
                      <a className="tag-pill tag-default">rails</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Index
