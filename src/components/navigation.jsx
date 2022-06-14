import {Link} from 'react-scroll';

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src='img/bull-logo.png' alt="" className='nav-logo' />
            <p className='brand-name'>The Cloud Bull</p>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="features" spy={true} smooth={true} offset={-80} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
                Contact
              </Link>
            </li>
            <li>
              <a href='https://wa.me/' rel="noopener noreferrer" target="_blank">
                Whatsapp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
