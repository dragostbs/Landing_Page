import Logo from "./img/logo.svg";
import Img1 from "./img/firstImage.svg";
import Img2 from "./img/secondImage.svg";
import Img3 from "./img/thirdImage.svg";
import Elements from "./img/elements.svg";
import Bubbles from "./img/bubbles.svg";
import Footer from "./img/footer.svg";

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="top-header">
          <div className="top-header__text">
            Trendy theme for companies, agencies and startups
          </div>
          <a className="top-header__phone" href="phone">
            +44 141 552 3000
          </a>
        </div>
      </div>
      <hr className="divider" />
      <div className="wrapper">
        <div className="header">
          <div className="header-navbar">
            <img src={Logo} alt="Logo" className="header__logo" />
            <ul className="header__menu">
              <li className="header__menu-item">
                <a href="#1" className="header__menu-link">
                  Home
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#2" className="header__menu-link">
                  Pages
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#3" className="header__menu-link">
                  Services
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#4" className="header__menu-link">
                  Portfolio
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#5" className="header__menu-link">
                  Blog
                </a>
                <ul className="header__submenu">
                  <li className="header__menu-item">
                    <a href="#7" className="header__menu-link">
                      Team
                    </a>
                  </li>
                  <li className="header__menu-item">
                    <a href="#8" className="header__menu-link">
                      Members
                    </a>
                  </li>
                  <li className="header__menu-item">
                    <a href="#9" className="header__menu-link">
                      Pricing
                    </a>
                  </li>
                  <li className="header__menu-item">
                    <a href="#10" className="header__menu-link">
                      Testimonials
                    </a>
                  </li>
                  <li className="header__menu-item">
                    <a href="#11" className="header__menu-link">
                      Page
                    </a>
                  </li>
                </ul>
              </li>
              <li className="header__menu-item">
                <a href="#6" className="header__menu-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="header-actions">
            <button className="btn btn-light">Login</button>
            <span className="header-actions__space">or</span>
            <button className="btn btn-light">Create Account</button>
          </div>
        </div>
        <div className="stage">
          <div className="stage-content">
            <h1 className="stage__title">Realize your full potential</h1>
            <p className="stage__text">
              We help our clients make realize their most important business
              goals.
            </p>
            <div className="stage__actions">
              <a href="#13" className="btn btn-dark">
                Contact Us
              </a>
              <a href="#14" className="link link-arrow">
                Order Similar
              </a>
            </div>
          </div>
          <img src={Img1} alt="Img1" className="image__one" />
          <a href="#features" className="btn-bottom">
            <i className="fas fa-long-arrow-alt-down"></i>
          </a>
        </div>
        <div className="features" id="features">
          <div className="info-block">
            <i className="fas fa-dollar-sign"></i>
            <h2 className="info-block__title">Corporate finance</h2>
            <p className="info-block__text">
              Leverage agile frameworks to provide a robust synopsis
            </p>
            <a className="link link-arrow info-block__link" href="#16">
              Read more
            </a>
          </div>
          <div className="info-block">
            <i className="fas fa-file-invoice-dollar"></i>
            <h2 className="info-block__title">Audit & Evaluation</h2>
            <p className="info-block__text">
              Bring to the table win-win survival strategies to ensure proactive
            </p>
            <a className="link link-arrow info-block__link" href="#16">
              Read more
            </a>
          </div>
          <div className="info-block">
            <i className="fas fa-comments-dollar"></i>
            <h2 className="info-block__title">Market analysis</h2>
            <p className="info-block__text">
              Create new market analysis through technical and fundamental
              analysis
            </p>
            <a className="link link-arrow info-block__link" href="#16">
              Read more
            </a>
          </div>
        </div>
        <div className="article">
          <img src={Img2} alt="Img2" className="article__image" />
          <div className="article__content">
            <h2 className="article__title">
              Get the ultimate tool and learn how to grow your audience
            </h2>
            <p className="article__text">
              At this stage we will improve the quality of the content by
              publishing and developping new features. Many desktop publishing
              packages and web.
            </p>
            <div className="article__action">
              <a className="btn btn-dark" href="#17">
                Get Started
              </a>
              <a className="link link-arrow" href="#18">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="video">
          <img src={Elements} alt="Elements" className="video__elements" />
          <a href="#17" className="btn-play">
            <i className="fas fa-play"></i>
          </a>
          <div className="video__content">
            <h2 className="video__title">How it works</h2>
            <p className="video__text">
              This app does everything you could want it to do it <br /> is
              beautifully and extremely intuitive to use.
            </p>
          </div>
        </div>
        <div className="article article__services">
          <img src={Img3} alt="Img3" className="services__image" />
          <div className="article__content">
            <h2 className="services__title">
              We offer a full range of digital marketing services
            </h2>
            <p className="article__text">
              Latin words, combined with a handful of model sentence structures,
              to generate Lorem Ipsum which looks reasonable. The generated
              Lorem Ipsum is therefore always free.
            </p>
            <div className="article__action">
              <a className="btn btn-dark" href="#17">
                View prices
              </a>
              <a className="link link-arrow" href="#18">
                More info
              </a>
            </div>
          </div>
        </div>
        <div className="solutions">
          <div className="solutions-cards">
            <div className="info-block info__solutions">
              <i className="fas fa-dollar-sign"></i>
              <h2 className="info-block__title">Corporate finance</h2>
              <p className="info-block__text">
                Leverage agile frameworks to provide a robust synopsis
              </p>
              <a className="link link-arrow info-block__link" href="#16">
                Read more
              </a>
            </div>
            <div className="info-block info__solutions">
              <i className="fas fa-file-invoice-dollar"></i>
              <h2 className="info-block__title">Audit & Evaluation</h2>
              <p className="info-block__text">
                Bring to the table win-win survival strategies to ensure
                proactive
              </p>
              <a className="link link-arrow info-block__link" href="#16">
                Read more
              </a>
            </div>
            <div className="info-block info__solutions">
              <i className="fas fa-comments-dollar"></i>
              <h2 className="info-block__title">Market analysis</h2>
              <p className="info-block__text">
                Create new market analysis through technical and fundamental
                analysis
              </p>
              <a className="link link-arrow info-block__link" href="#16">
                Read more
              </a>
            </div>
            <div className="info-block info__solutions">
              <i className="fas fa-funnel-dollar"></i>
              <h2 className="info-block__title">Sales & Trade</h2>
              <p className="info-block__text">
                Find new ways to make new sales and profitable trades
              </p>
              <a className="link link-arrow info-block__link" href="#16">
                Read more
              </a>
            </div>
          </div>
          <div className="solutions__content">
            <h2 className="article__title">
              Get a solutions to your businesses
            </h2>
            <p className="article__text">
              Our consultants help address your most challenging issues by
              providing strategic, financial, operational, and IT services.
            </p>
            <a className="btn btn-dark" href="#17">
              All services
            </a>
          </div>
        </div>
        <div className="contact">
          <img src={Bubbles} alt="Elements" className="contact__elements" />
          <div className="contact__content">
            <h2 className="contact__title">
              Build your successful business with us !
            </h2>
            <button className="btn btn-light btn-contact">Contact us</button>
          </div>
        </div>
        <div className="plan">
          <div className="plan-block">
            <h2 className="info-block__title">Basic</h2>
            <hr className="plan__hr" />
            <h1 className="plan__money">15$</h1>
            <p className="info-block__text">Per month</p>
            <ul className="plan__list">
              <li className="plan-list plan__basic">Free updates</li>
              <li className="plan-list plan__basic">Custom domain</li>
              <li className="plan-list plan__basic">Outstanding support</li>
              <li className="plan-list plan__basic">Unlimited storage</li>
              <li className="plan-list plan__basic">Build website</li>
            </ul>
            <div className="plan__btn">
              <a href="#19" className="btn btn-dark">
                Getting started
              </a>
            </div>
          </div>
          <div className="plan-block">
            <h2 className="info-block__title">Standard</h2>
            <hr className="plan__hr" />
            <h1 className="plan__money">37$</h1>
            <p className="info-block__text">Per month</p>
            <ul className="plan__list">
              <li className="plan-list plan__standard">Free updates</li>
              <li className="plan-list plan__standard">Custom domain</li>
              <li className="plan-list plan__standard">Outstanding support</li>
              <li className="plan-list plan__standard">Unlimited storage</li>
              <li className="plan-list plan__standard">Build website</li>
            </ul>
            <div className="plan__btn">
              <a href="#19" className="btn btn-dark">
                Getting started
              </a>
            </div>
          </div>
          <div className="plan-block">
            <h2 className="info-block__title">Advance</h2>
            <hr className="plan__hr" />
            <h1 className="plan__money">42$</h1>
            <p className="info-block__text">Per month</p>
            <ul className="plan__list">
              <li className="plan-list plan__advance">Free updates</li>
              <li className="plan-list plan__advance">Custom domain</li>
              <li className="plan-list plan__advance">Outstanding support</li>
              <li className="plan-list plan__advance">Unlimited storage</li>
              <li className="plan-list plan__advance">Build website</li>
            </ul>
            <div className="plan__btn">
              <a href="#19" className="btn btn-dark">
                Getting started
              </a>
            </div>
          </div>
        </div>
        <div className="support">
          <div className="support-content">
            <div className="support-sign">
              <i className="fas fa-question-circle"></i>
            </div>
            <div className="title__support">
              <h2 className="info-block__title">View common questions</h2>

              <p className="info-block__text support__text">
                Be the first to ask the most common questions about the work and
                expectations about our work and experience.
              </p>
              <a className="link link-arrow" href="#22">
                Read more
              </a>
            </div>
          </div>
          <div className="support-content">
            <div className="support-sign">
              <i className="fas fa-headset"></i>
            </div>
            <div className="title__support">
              <h2 className="info-block__title">Looking for support?</h2>

              <p className="info-block__text support__text">
                On the other hand, we denounce with righteous dislike so men who
                are beguiled indignation and they foresee.
              </p>
              <a className="link link-arrow" href="#22">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="footer">
          <img src={Footer} alt="Elements" className="footer__elements" />
          <div className="footer__content">
            <div className="content__one">
              <h2 className="footer__title">Contacts</h2>
              <div className="contact__info">
                <div className="support-sign">
                  <i className="fas fa-headset"></i>
                </div>
                <div className="contact__text">
                  <p>Have questions ?</p>
                  <h1 className="contact__phone">+44 141 552 3000</h1>
                </div>
              </div>
              <p className="contact__address">
                Address: 2 St Gabriel Walk, London SE1 6FG, United Kingdom
              </p>
              <p className="contact__mail">E-mail: info@workdesign.com</p>
            </div>
            <div className="content__two">
              <h2 className="contact__links">Links</h2>
              <div className="list__links">
                <li className="link__li">
                  <a className="link__element" href="#23">
                    About company
                  </a>
                </li>
                <li className="link__li">
                  <a className="link__element" href="#24">
                    Our services
                  </a>
                </li>
                <li className="link__li">
                  <a className="link__element" href="#25">
                    Team members
                  </a>
                </li>
                <li className="link__li">
                  <a className="link__element" href="#26">
                    Portfolio
                  </a>
                </li>
                <li className="link__li">
                  <a className="link__element" href="#27">
                    Pricing plans
                  </a>
                </li>
                <li className="link__li">
                  <a className="link__element" href="#28">
                    Testimonials
                  </a>
                </li>
                <li className="link__li">
                  <a className="link__element" href="#29">
                    Contact
                  </a>
                </li>
              </div>
              <hr className="right__hr" />
              <p className="rights">© Design 2022. Landing Page Template</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
