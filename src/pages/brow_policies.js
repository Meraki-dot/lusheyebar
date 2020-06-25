import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Brow_policies = () => {
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
        <p id="prep_mobile_title">Policies</p>
        <p id="mobile_sub_title">Deposit</p>
        <p className="policy_text">
          When booking your appointment, you will be asked to place a $50
          deposit for your service. The deposit will be applied toward your
          remaining balance the day of your appointment. Please bring CASH for
          the remainder balance. Deposits are non refundable and non
          transferable.
          <br />
          Before making a deposit please make sure you read through the
          frequently asked questions and be able to follow the before and
          aftercare procedures. Once you book the appointment your deposit is
          non refundable.
          <br />
        </p>
        <p id="mobile_sub_title">Cancellation</p>
        <p className="policy_text">
          If you are more than 15 minutes late or any cancellation or
          rescheduling 7 days before your appointment, your deposit will be
          forfeited. You are responsible for paying the difference of your
          scheduled service full price.
        </p>
        <div className="checkbox">
          <input type="checkbox" id="checkbox_1" onClick={onClick} />
          <label for="checkbox_1">
            <div>I have read and agree to do the content above.</div>
          </label>
        </div>
        <div id="button_container">
          <Link to="brow_faq">
            <button id="agree_button">
              <p>Next</p>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Brow_policies
