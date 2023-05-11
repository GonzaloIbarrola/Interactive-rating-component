import { useEffect, useState } from "react"

export default function Rating() {
  const [number, setNumber] = useState(Array)
  const [value, setValue] = useState(Number)

  
  // const handleClick = (event) => {
  //   setValue(event.target.value)
  //   console.log(value);
  // }

  useEffect(() => {
    const handleClick = (event) => {
      setValue(event.target.value)
      console.log(value);
    }
    
    function handleClickSubmit(value) {
      if(value > 1) {
        console.log(`Apreto el ${value}`);
      } else {
        console.log('Ningun número apretado');
      }
    }
    
    const boton = document.getElementById('submitBTN');
    boton.addEventListener('click', handleClickSubmit);
    
    const btn = document.getElementById('btn');
    btn?.addEventListener('click', handleClick);

    return () => {
      console.log('Hola');
    }
  }, [value])
  

  useEffect(() => {
    setNumber([1,2,3,4,5])
  }, [])
  
  return(
    <section className="inline-flex flex-col w-full gap-6">
      <div>
        <ul className="flex justify-between">
        {number.map((e,i) =>
          <button id="btn" className="bg-Dark-blue focus:bg-Orange focus:text-Pure-white hover:bg-Medium-gray hover:text-Pure-white w-[42px] h-[42px] rounded-full inline-flex justify-center text-[14px] items-center text-Medium-gray font-bold" value={e} key={i}>{e}</button>
        )}
        </ul>
      </div>
      <button id="submitBTN" className="bg-Orange w-full h-[45px] rounded-[22.5px] text-Pure-white font-bold uppercase tracking-[1.87px] text-[14px] active:bg-Pure-white active:text-Orange">Submit</button>
    </section>
  )
}
