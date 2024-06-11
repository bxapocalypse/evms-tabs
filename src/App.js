import Header from './components/Header'
import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

//Create a variable out of the json file
const url = '/why-choose.json'

function App() {
  // this state needs to be available as soon as possible so we will set it to true
  const [loading, setLoading] = useState(true)

  // This hook access the data and will output as an array
  const [incentives, setIncentives] = useState([])

  //This hook will apply the value as an item. We will set to 0 which will show the first record.
  const [value, setValue] = useState(0)

  //We will fetch the data and create an object out of it
  const fetchIncentives = async () => {
    const response = await fetch(url)
    const newIncentives = await response.json()
    setIncentives(newIncentives)
    setLoading(false)
  }

  //This function retrieves the data as an array
  useEffect(() => {
    fetchIncentives()
  }, [])

  //You can see the objects by inspecting and clicking on the Components tab

  //If the app is loading just output the text loading
  if (loading) {
    return (
      <section className="section loading">
        <h1>loading</h1>
      </section>
    )
  }
  // create variables out of each piece of data
  const { dropTitle, dropDesc, vidId, points } = incentives[value]
  return (
    <div className="wrapper">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <a href="#site-footer" className="skip-link">
        Skip to site footer
      </a>

      <Header />
      {/* tabs */}
      <section className="section">
        <div className="title">
          <h2>Why choose EVMS?</h2>
          <div className="underline"></div>
        </div>
        <div className="incentives-center">
          <div className="btn-container">
            {/* map through incentives items. Set parameters to item for the objects and index to be able to go through all the items*/}
            {incentives.map((item, index) => {
              return (
                // we will set the button up. If it is not active then get the job-btn class. It is is then get the active-btn class
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`incentives-btn ${
                    index === value && 'active-btn'
                  }`}
                >
                  {item.title}
                </button>
              )
            })}
          </div>
          {/* Incentive info */}
          <article className="incentive-info">
            <h3>{dropTitle}</h3>
            <div className="incentives-vid">
              <iframe
                className="vidContainer"
                src={`https://www.youtube.com/embed/${vidId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <p className="incentives-info">{dropDesc}</p>
            {points.map((point, index) => {
              return (
                <div key={index} className="incentives-desc">
                  <FaAngleDoubleRight className="incentive-icon"></FaAngleDoubleRight>
                  {point}
                </div>
              )
            })}
          </article>
        </div>
      </section>
      {/* tabs */}
      <div className="section-footer">
        <div className="container-fluid">
          <div className="container footer--content">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3 contact">
                <div className="contact-us">Contact Us</div>
                <div className="address">
                  Eastern Virginia Medical School
                  <br /> Graduate Medical Education
                  <br /> P.O. Box 1980
                  <br /> Norfolk, VA 23501
                </div>
                <p>
                  <a className="phone" href="tel:757-446-6190">
                    757.446.6190
                  </a>
                </p>
                <p>
                  <a className="email" href="mailto:gradmed@evms.edu">
                    gradmed@evms.edu
                  </a>
                </p>
              </div>

              <div className="col-12 col-sm-6 col-md-3 nav-section contact">
                <div className="contact-us">Get Directions&nbsp;</div>
                <p>
                  &nbsp;
                  <a href="//www.evms.edu/maps_directions_parking/#d.en.10358">
                    <img
                      src="//www.evms.edu/media/sample_data/ifactory_files/miniMap.jpg"
                      alt="A map with a blue pin indicating EVMS' main campus location in the Ghent neighborhood of Norfolk, VA."
                    />
                  </a>
                </p>
              </div>

              <div className="col-12 col-sm-6 col-md-3 accreditations">
                <div className="contact-us">Accreditation status&nbsp;</div>

                <p>
                  EVMS sponsors ACGME-accredited residencies and fellowships, an
                  APA-accredited psychology internship and a CPME-accredited
                  podiatry residency.
                </p>
              </div>

              <div className="col-6 col-sm-6 col-md-3 social">
                <div className="contact-us">&nbsp;</div>
              </div>

              <div className="col-12">
                <div className="other-info">
                  <p>
                    <em> </em>
                  </p>
                </div>
              </div>

              <div className="col-12">
                <p className="disclaimer text-center">
                  <em>
                    This website reflects current program information, including
                    admission criteria and curricula. Information is subject to
                    change.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="site-footer" className="container-fluid site-footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-2">
              <a
                href="//www.evms.edu/"
                className="site__logo site__logo--footer"
              >
                <span className="sr-only">Eastern Virginia Medical School</span>
              </a>
              <p>
                <strong className="tc--dark-blue">Mailing address</strong>
              </p>
              <div className="site__footer__vcard vcard">
                <p
                  className="address"
                  itemProp="address"
                  itemScope="itemscope"
                  itemType="http://data-vocabulary.org/Address/"
                >
                  <span
                    className="address__street-address street-address"
                    itemProp="street-address"
                  >
                    P.O. Box 1980
                  </span>
                  <span
                    className="address__locality locality"
                    itemProp="locality"
                  >
                    Norfolk,
                  </span>
                  <span
                    className="address__region region"
                    itemProp="region"
                    title="Virginia"
                  >
                    VA
                  </span>
                  <span
                    className="address__postal-code postal-code"
                    itemProp="postal-code"
                    title="23501-1980"
                  >
                    23501-1980
                  </span>
                </p>
                <p>
                  <a href="tel:757-446-5600" itemProp="tel">
                    757.446.5600
                  </a>
                </p>
                <p className="footer-copyright">
                  &copy; EVMS
                  <span className="footer-year"></span>
                </p>
              </div>
            </div>
            <nav className="col-12 col-md-7 site__footer__nav">
              <div className="footer__nav__list">
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/accessibility/">Accessibility</a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/about_evms/accreditation/">
                    Accreditation
                  </a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/alumni/">Alumni</a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/calendar/">Calendar</a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/about_evms/administrative_offices/human_resources/">
                    Careers
                  </a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/about_evms/leadership/general_counsel/legal_and_compliance/higher_education_opportunity_act_consumer_informat/">
                    Consumers{' '}
                  </a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/contact_us/">Contact</a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/directory/">Directory</a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="https://www.evms.edu/media/evms_public/departments/faculty_affairs/faculty_handbook/EVMS_Faculty_Handbook_-_BOV_Approval_3.21.2023_-_FINAL_-_Industry_link_corrected.pdf">
                    Faculty Handbook
                  </a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/about_evms/leadership/general_counsel/legal_and_compliance/legalcompliance_policies__information/foia/">
                    FOIA
                  </a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/about_evms/leadership/general_counsel/legal_and_compliance/legalcompliance_policies__information/">
                    Legal &amp; Compliance
                  </a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/library/">Library</a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="https://giving.evms.edu/">Make a Gift</a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/maps_directions_parking/">
                    Maps &amp; Parking
                  </a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/about_evms/mission_vision_values/">
                    Mission, Vision, Values
                  </a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="https://myportal.evms.edu">myPortal</a>
                </p>
                <p className="footer__nav__list--item">
                  <a
                    href="//www.evms.edu/medical_group/followmyhealth/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Patient Portal
                  </a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/about_evms/leadership/general_counsel/legal_and_compliance/privacy_policy/">
                    Privacy Policy
                  </a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/education/student_achievement/">
                    Student Achievements
                  </a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/education/resources/student_policies_handbooks/">
                    Student Handbook
                  </a>
                </p>
                <p className="footer__nav__list--item">
                  <a href="//www.evms.edu/materialsmanagement/">Vendors</a>
                </p>
              </div>
            </nav>

            <div className="col-12 col-sm-6 col-md-3">
              <div className="social-menu">
                <a
                  href="https://www.evms.edu/pulse/"
                  className="social-menu-item"
                >
                  <span className="screen-reader-text">EVMS Pulse</span>
                  <svg>{/* <use xlink:href="#pulse"></use> */}</svg>
                </a>
                <a
                  href="https://www.facebook.com/EVMSedu"
                  target="_blank"
                  rel="noreferrer"
                  className="social-menu-item"
                >
                  <span className="screen-reader-text">EVMS Facebook Page</span>
                  <svg>{/* <use xlink:href="#facebook"></use> */}</svg>
                </a>
                <a
                  href="https://twitter.com/EVMSedu"
                  target="_blank"
                  rel="noreferrer"
                  className="social-menu-item"
                >
                  <span className="screen-reader-text">EVMS Twitter Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 0 512 512"
                  />
                </a>
                <a
                  href="https://www.instagram.com/evmsedu/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-menu-item"
                >
                  <span className="screen-reader-text">
                    EVMS Instagram Page
                  </span>
                  <svg
                    version="1.1"
                    id="instagram"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="25px"
                    height="25px"
                    viewBox="0 0 25 25"

                    // xml:space="preserve"
                  >
                    <g>
                      <path
                        className="st0"
                        d="M12.5,2.4c3.3,0,3.7,0,5,0.1c1.2,0.1,1.9,0.3,2.3,0.4c0.6,0.2,1,0.5,1.4,0.9s0.7,0.8,0.9,1.4
                               c0.2,0.4,0.4,1.1,0.4,2.3c0.1,1.3,0.1,1.7,0.1,5s0,3.7-0.1,5c-0.1,1.2-0.3,1.9-0.4,2.3c-0.2,0.6-0.5,1-0.9,1.4s-0.8,0.7-1.4,0.9
                               c-0.4,0.2-1.1,0.4-2.3,0.4c-1.3,0.1-1.7,0.1-5,0.1s-3.7,0-5-0.1c-1.2-0.1-1.9-0.3-2.3-0.4c-0.6-0.2-1-0.5-1.4-0.9s-0.7-0.8-0.9-1.4
                               c-0.2-0.4-0.4-1.1-0.4-2.3c-0.1-1.3-0.1-1.7-0.1-5s0-3.7,0.1-5c0.1-1.2,0.3-1.9,0.4-2.3c0.2-0.6,0.5-1,0.9-1.4s0.8-0.7,1.4-0.9
                               c0.4-0.2,1.1-0.4,2.3-0.4C8.8,2.4,9.2,2.4,12.5,2.4 M12.5,0.2c-3.4,0-3.8,0-5.1,0.1s-2.2,0.3-3,0.6C3.6,1.1,2.9,1.5,2.2,2.2
                               S1.1,3.6,0.8,4.4s-0.5,1.7-0.6,3s-0.1,1.7-0.1,5.1s0,3.8,0.1,5.1c0.1,1.3,0.3,2.2,0.6,3s0.7,1.5,1.4,2.2s1.4,1.1,2.2,1.4
                               s1.7,0.5,3,0.6s1.7,0.1,5.1,0.1s3.8,0,5.1-0.1c1.3-0.1,2.2-0.3,3-0.6c0.8-0.3,1.5-0.7,2.2-1.4c0.7-0.7,1.1-1.4,1.4-2.2
                               c0.3-0.8,0.5-1.7,0.6-3s0.1-1.7,0.1-5.1s0-3.8-0.1-5.1s-0.3-2.2-0.6-3c-0.3-0.8-0.7-1.5-1.4-2.2c-0.7-0.7-1.4-1.1-2.2-1.4
                               c-0.8-0.3-1.7-0.5-3-0.6C16.3,0.2,15.9,0.2,12.5,0.2L12.5,0.2z"
                      />
                      <path
                        className="st0"
                        d="M12.5,6.2C9,6.2,6.2,9,6.2,12.5s2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3S16,6.2,12.5,6.2z M12.5,16.6
                               c-2.3,0-4.1-1.8-4.1-4.1s1.8-4.1,4.1-4.1s4.1,1.8,4.1,4.1S14.8,16.6,12.5,16.6z"
                      />
                      <circle className="st0" cx="19.1" cy="5.9" r="1.5" />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/user/EasternVaMedSchool"
                  target="_blank"
                  rel="noreferrer"
                  className="social-menu-item"
                >
                  <span className="screen-reader-text">EVMS Youtube Page</span>
                  <svg>{/* <use xlink:href="#youtube"></use> */}</svg>
                </a>
                <a
                  href="https://www.linkedin.com/edu/eastern-virginia-medical-school-19574"
                  target="_blank"
                  rel="noreferrer"
                  className="social-menu-item"
                >
                  <span className="screen-reader-text">EVMS LinkedIn Page</span>
                  <svg>{/* <use xlink:href="#linkedin"></use> */}</svg>
                </a>
              </div>{' '}
              <a
                href="https://www.evms.edu/about_evms/campus_safety_alerts/"
                className="button button--outline button--large button--outline--rust button--safety"
              >
                Campus Safety &amp; Alerts
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
