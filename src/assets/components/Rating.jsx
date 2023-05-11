/* eslint-disable react/prop-types */
export default function Rating({ number, value, setValue, setShow }) {
  
  const handleClick = (event) => {
    setValue(event.target.value)
  }
  
  const showToggle = () => {
    if(value != 0) {
      setShow(!true)
    } else {
      alert('Choose a number');
    }
  }
  
  return(
    <section className="inline-flex flex-col w-full gap-6 sm:gap-8">
      <div>
        <ul className="flex justify-between">
        {number.map((e,i) =>
          <button onClick={handleClick} className="bg-Dark-blue focus:bg-Orange focus:text-Pure-white hover:bg-Medium-gray hover:text-Pure-white w-[42px] h-[42px] sm:w-[51px] sm:h-[51px] rounded-full inline-flex justify-center text-[14px] sm:text-base items-center text-Medium-gray font-bold" value={e} key={i}>{e}</button>
        )}
        </ul>
      </div>
      <button onClick={showToggle} id="submitBTN" className="bg-Orange w-full h-[45px] rounded-[22.5px] text-Pure-white font-bold uppercase tracking-[1.87px] text-[14px] active:bg-Pure-white active:text-Orange">Submit</button>
    </section>
  )
}
