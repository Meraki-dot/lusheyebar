import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Lashes_prep_after = () => {
    const [agreed, setAgreed] = useState(false)

    const onClick = () => {
        setAgreed(!agreed)
    }

  useEffect(() => {
    let checkAgree = document.getElementById("agree_button")
    if (agreed === false) {
        checkAgree.style.display = "none"
    }
    else if (agreed === true) {
        checkAgree.style.display = "inline-block"
    }
  })

  return (
    <Layout>
      <div id="prep_after">
        <p id="prep_mobile_title">Things to do</p>
        <p id="mobile_sub_title">Before</p>
        <ul>
          <li>Remove all make-up with an oil free remover</li>
          <li>
            Stop using lash serum 3 days prior to service (Latisse, Revitalash,
            Lash Food, etc.)
          </li>
          <li>Stop using mascara 3 days before appointment.</li>
          <li>
            Please eat and use the bathroom prior to service, as the process can
            take up to 3 hours.
          </li>
          <li>
            Shower before appointment is advised, as you will need to avoid
            water in the eye area for at least 24 hours to allow the adhesive to
            dry.
          </li>
          <li>No caffeine before appointment.</li>
        </ul>
        <p id="mobile_sub_title">After</p>
        <ul>
          <li>Do not use oil base products around the eyes.</li>
          <li>Use only water based makeup & makeup remover.</li>
          <li>Do not rub the eyes.</li>
          <li>
            To extend the life of your lashes, please schedule a touch up every
            2-3 weeks.
          </li>
        </ul>
        <div className="checkbox">
          <input type="checkbox" id="checkbox_1" onClick={onClick} />
          <label for="checkbox_1">
            <div>I have read and agree to do the content above.</div>
          </label>
        </div>
        <div id="button_container">
          <Link to="lashes_policies">
            <button id="agree_button">
              <p>Next</p>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Lashes_prep_after
