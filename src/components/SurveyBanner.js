import React from 'react'
import './surveyBanner.css'
import surveystar from '../images/survey_star.png'

function SurveyBanner() {
  return (
    <>
      <div id="interest_form" className="survey_banner1">
        <div className="interest_div">
          <h1>Interest Survey</h1>
          <p>We want to know you!
            <br />
            Take this survey so we can create the best product for you!</p>
          <a className="normal" href="/Survey" >Take The Survey</a>
        </div>
      </div>
    </>
  )
}

export default SurveyBanner;