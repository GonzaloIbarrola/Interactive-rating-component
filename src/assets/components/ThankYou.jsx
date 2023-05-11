/* eslint-disable react/prop-types */
import ThankYouImg from "../images/illustration-thank-you.svg";

export default function ThankYou({value,number}) {
  return(
    <section className="flex flex-col justify-center items-center gap-6 sm:gap-8 sm:py-[13px] sm:px-[4px]">
      <div>
        <img src={ThankYouImg} alt="" />
      </div>
      <div className=" bg-Dark-blue px-3 sm:px-5 py-[5px] rounded-[22.5px]">
        <p className="text-Orange">You selected {value} out of {number.length}</p>
      </div>
      <div className="text-center">
        <h1 className="mb-[10px]">Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    </section>
  )
}
