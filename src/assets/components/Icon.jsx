import IconStar from '../images/icon-star.svg';

export default function Icon() {
  return(
    <div className='bg-Dark-blue sm:mb-[30px] mb-4 w-10 h-10 sm:h-12 sm:w-12 rounded-full inline-flex items-center justify-center'>
      <img className='w-[13.96px] h-[13.33px] sm:w-[16.75px] sm:h-[16px]' src={IconStar} alt="" />
    </div>
  )
}
