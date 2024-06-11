const Header = () => {
  return (
    <>
      <header className="site__header sps sps--abv no-animation">
        {/* <!-- id="headroom-init"--> */}
        <div className="container">
          <div className="silc-grid silc-grid--no-gutters silc-grid--justify-between silc-grid--align-center">
            <a href="//www.evms.edu/" className="site__logo">
              <span className="sr-only">Eastern Virginia Medical School</span>
            </a>
            <div className="flex-grow-1">
              {/* <!--<div className="sticky-title">
                Sticky Nav Header
              </div>--> */}
            </div>
            <a
              id="site-nav-give"
              className="site-nav-give"
              href="https://www.givecampus.com/campaigns/2163/donations/new/"
              target="_blank"
              rel="noreferrer"
            >
              Give Now
            </a>
            <form
              id="form-search"
              name="form-search"
              className="form-inline form-search d-none d-lg-flex"
              role="search"
              method="get"
            >
              <div className="form-group">
                {/* <!--Test JC--> */}

                <input
                  className="form-control"
                  aria-label="search"
                  id="query"
                  name="q"
                  type="text"
                  //   onFocus="document.getElementById('site-nav-give').classNameName += ' site-nav-give-move'"
                  //   onBlur="document.getElementById('site-nav-give').classNameName = 'site-nav-give'"
                />
              </div>
              <button type="submit" className="btn btn-search" tabIndex="0">
                <span className="glyphicon glyphicon-search"></span>
                <span className="sr-only">Submit search</span>
              </button>
            </form>
            <button
              id="toggle-site-nav"
              className="site__menu"
              aria-label="Toggle the site navigation"
            >
              <div className="hamburger-menu">
                <div></div>
              </div>
              <div className="site__menu-text">Menu</div>
            </button>
          </div>
        </div>
      </header>

      <div className="default-header container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <header className="page-header-rust">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1 className="page-title">
                      Graduate Medical Education (GME)
                    </h1>
                  </div>
                </div>
              </div>
            </header>
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="//www.evms.edu/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="//www.evms.edu/education/">Education</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="//www.evms.edu/education/gme/">
                    Graduate Medical Education (GME)
                  </a>
                </li>
              </ol>
              {/* <!-- breadcrumbs --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header
