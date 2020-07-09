import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import { Link } from "gatsby"
import Footer from "../components/footer_components/Footer"

const Brow_faq = () => {
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
      <div className="container" id="faq">
        <h1 className="title">Brow FAQ</h1>
        <Accordion className="accordion_container" allowZeroExpanded="true">
          <AccordionItem className="accordion_item">
            <AccordionItemHeading>
              <AccordionItemButton>
                If I have previous cosmetic tattoos, will I be a good cover-up
                candidate?{" "}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Please send photos of your bare brow, in several different
                lighting and angles prior to your appointment. If you have
                previous work it will cost an additional $100 and may require
                more than one touch up. If you book an appointment before
                submitting pictures, you might be turned away on the day of your
                appointment and your deposit will be forfeited.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What can restrict me from permanent makeup?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul>
                <li>Being pregnant or nursing</li>
                <li>
                  Tendency to keloid or over keloids, birthmarks or moles in
                  eyebrow area
                </li>
                <li>Diabetic</li>
                <li>
                  Serious diseases such as cancer, epilepsy, autoimmune
                  disorders
                </li>
                <li>Circulatory disorders</li>
                <li>Any bleeding disorder</li>
                <li>Taking blood thinning medication</li>
                <li>
                  Currently on Accutane or other strong Retinoid (must wait
                  until 6 months after treatment ended.)
                </li>
                <li>
                  If any skin disease symptoms or irritation appears in the
                  area.
                </li>
                <li>You’ve recently had Botox, must wait 1 month.</li>
                <li>You have a broken capillary in the eyebrow area.</li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion_item">
            <AccordionItemHeading>
              <AccordionItemButton>
                What age qualifies me for permanent makeup?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>The legal age is 18 years old.</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion_item">
            <AccordionItemHeading>
              <AccordionItemButton>How long does it last?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                The retention depends on a number of factors, including skin
                type, lifestyle, health condition, sun exposure, etc. Generally
                it last for two years but often clients come in at one year for
                an annual color booster.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion_item">
            <AccordionItemHeading>
              <AccordionItemButton>Does it hurt?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                We will numb your brow area before we begin. You may experience
                slight discomfort during the first pass but we will numb your
                brow again when the skin is open. You will not feel much
                afterwards.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion_item">
            <AccordionItemHeading>
              <AccordionItemButton>
                How long will my brow take to heal?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                The initial healing period is 7-10 days. The complete healing
                process takes between 6-8 weeks. It should not be a problem
                going to work or doing daily activities as long as you are
                following the aftercare instructions.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion_item">
            <AccordionItemHeading>
              <AccordionItemButton>
                How long is the appointment?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Please allow up to 4-5 hours for your initial appointment.</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion_item">
            <AccordionItemHeading>
              <AccordionItemButton>
                What happens after the appointment?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Immediately after the procedure, the tattooed area will appear
                to be darker, bolder in color and more defined. This will last
                up to 7-10 days after the treatment, while the initial healing
                process takes place.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="accordion_item">
            <AccordionItemHeading>
              <AccordionItemButton>
                Will my skin be red or swollen?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Swelling and redness is minimal with most clients and will
                disappear within 24-48 hours.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <div className="checkbox">
          <input type="checkbox" id="checkbox_1" onClick={onClick} />
          <label for="checkbox_1">
            <div id="checkbox-text">
              I have read and agree to do the content above.
            </div>
          </label>
        </div>
        <div id="button_container">
          <Link to="brow_prep_after">
            <button id="agree_button">
              <p>Next</p>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default Brow_faq
