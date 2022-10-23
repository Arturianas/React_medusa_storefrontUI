import useScrollPosition from '../../hooks/useScrollPosition'

const Announcement = () => {

  const {isScrolled} = useScrollPosition(30)



  return (
    <div className={`bg-announcement h-7 flex justify-center items-center  ${isScrolled && 'hidden'}`}>
        <span className='text-[#fff] text-xs font-bold tracking-wider'>FREE SHIPPING & RETURNS ON ALL ORDERS</span>
    </div>
  )
}

export default Announcement