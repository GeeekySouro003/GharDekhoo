import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Values.css";
const Value = () => {
return (
  <section id="value" className="v-wrapper">
  <div className="paddings innerWidth flexCenter v-container">
    {/* left side */}
    <div className="v-left">
      <div className="image-container">
        <img src="./value-image.jpg" alt="" />
      </div>
    </div>

      {/*right side*/}
      <div className="flexColStart v-right">
      <span className="orangeText">Our Values</span>

<span className="primaryText">Where Value Meets Vision</span>

 <span className="secondaryText1">
  Embark on a journey through our Value Section, where your dream home meets affordability without compromise.
  <br />
  We stand prepared to deliver our utmost commitment to providing exemplary services tailored to your needs
</span>

<Accordion 
className="accordion"
allowMultipleExpanded={false}
preExpanded={[0]} >

{
  data.map((item,i)=>{

    const [className,setClassName]=useState(null)
    return (
      <AccordionItem className={`accordionItem  ${className}`} key={i} uuid={i}> 
        <AccordionItemHeading>
          <AccordionItemButton className=" flexCenter accordionBtn">
            
            <AccordionItemState>
              {({expanded})=>
              expanded
              ? setClassName("expanded")
              : setClassName("collapsed")
              }
            </AccordionItemState>
            <div className="flexCenter icon">{item.icon}</div>

            <span className="thirdText">
              {item.heading}
            </span>
            <div className="flexCenter icon">
              <MdOutlineArrowDropDown size={28}/>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>


        <AccordionItemPanel>
          <p className="secondaryText">{item.detail}</p>
        </AccordionItemPanel>
      </AccordionItem>
    )
  })
}

</Accordion>
      </div>
    </div>
  </section>
)

}
export default Value;