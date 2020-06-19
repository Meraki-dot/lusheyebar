import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Brow_prep_after = () => {
  const [agreed, setAgreed] = useState(false)

  const onClick = () => {
    setAgreed(!agreed)
  }

  useEffect(() => {
    let checkAgree = document.getElementById("agree_button")
    if (agreed === false) {
      checkAgree.style.display = "none"
    } else if (agreed === true) {
      checkAgree.style.display = "inline-block"
    }
  })

  return (
    <Layout>
      <div id="prep_after">
        <p id="prep_mobile_title">Things to do</p>
        <p id="mobile_sub_title">Before</p>
        <ul>
          <li>
            Do not take Aspirin, Niacin, Vitamin E, Fish Oil or Ibuprofen 24
            hours before procedure.
          </li>
          <li>No alcohol or caffeine 2 days before the procedure.</li>
          <li>
            No tweezing/ waxing at least 48 hours before procedure; electrolysis
            no less than five days before. Do not resume any method of hair
            removal for at least two weeks.
          </li>
        </ul>
        <p id="mobile_sub_title">After</p>
        <ul>
          <li>
            NO water, cleansers, creams, makeup or any other products on treated
            area for 10 days, unless given by your technician.
          </li>
          <li>
            3-4 hours after your procedure clean your eyebrows with the sterile
            water & the cotton squares that was given in the after care kit.
            Wiping off well any ointments or lymph fluids.
          </li>
          <li>
            DO NOT rub, pick or scratch the treated area. Let any scabbing or
            dry skin naturally exfoliate off. Picking your scabs can cause
            scarring.
          </li>
          <li>
            Avoid direct sun exposure or tanning for 3-4 weeks after procedure.
          </li>
          <li>Avoid heavy sweating for the first 10 days.</li>
          <li>
            NO facials, Botox, chemical treatments and microdermabrasion for 4
            weeks.
          </li>
          <li>
            DO NOT let water touch your eyebrows when showering or washing your
            hair.
          </li>
        </ul>
        <div className="checkbox">
          <input type="checkbox" id="checkbox_1" onClick={onClick} />
          <label for="checkbox_1">
            <div>I have read and agree to do the content above.</div>
          </label>
        </div>
        <div id="button_container">
          <Link to="/schedule">
            <button id="agree_button">
              <p>Book</p>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Brow_prep_after
