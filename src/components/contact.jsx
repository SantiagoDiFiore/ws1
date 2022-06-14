/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  firstname: '',
  lastname: '',
  company: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ firstname, lastname, company, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstname, lastname, company, email, message)
    emailjs
      .sendForm(
        'service_lmcxrrm', 'template_ez7uyqb', e.target, 'eyAX4XPYstU_NTZsW'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8 contact-main-container'>
            <div className='row'>
              <h2>Contact Us</h2>
              <div className='contact-section'>
                <div className='contact-section-info'>
                  <p>
                    Contact one of our specialists and clarify all your doubts about our services
                  </p>
                  <p>
                    Please fill out the form below to send us an email and we will get back to you as soon as possible
                  </p>
                  <div className='social-media'>
                    <img src='img/social-logo.png' alt='' className='social-media-main'/>
                    <div>
                      <h6 className='social-title'>Community</h6>
                      {/* <a href='https://instagram.com'  rel='noopener noreferrer' target='_blank' className='fa fa-instagram social-icon'></a>
                      <a href='https://facebook.com'  rel='noopener noreferrer' target='_blank' className='fa fa-facebook-square social-icon'></a> */}
                      <a href='https://linkedin.com/company/cloudbull'  rel='noopener noreferrer' target='_blank' className='fa fa-linkedin-square social-icon'></a>
                    </div>
                  </div>
                </div>
                <form name='sentMessage' className='contact-form' validate onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='firstname'
                          name='firstname'
                          className='form-control'
                          placeholder='First Name'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='lastname'
                          name='lastname'
                          className='form-control'
                          placeholder='Last Name'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='company'
                          name='company'
                          className='form-control'
                          placeholder='Company'
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='form-control'
                          placeholder='Email'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      rows='4'
                      placeholder='Message'
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                  <div id='success'></div>
                  <button type='submit' className='btn btn-custom btn-lg'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 The Cloud Bull, Inc. All rights reserved - hello@thecloudbull.com
          </p>
        </div>
      </div>
    </div>
  )
}
