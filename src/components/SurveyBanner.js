import React from 'react'
import './surveyBanner.css'

function SurveyBanner() {
  return (
    <>
      <div id="interest_form" className="survey_banner1">
        <div className="interest_div">
          <h1>Interest Survey</h1>
          <p>We want to know you!
            <br />

            Save 10% off our first release by taking the survey!</p>
          <a className="normal" href="/Survey" >Take The Survey</a>
        </div>
      </div>
    </>
  )
}

export default SurveyBanner;