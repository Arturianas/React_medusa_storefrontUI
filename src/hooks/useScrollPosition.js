import { useEffect, useState } from 'react'

const useScrollPosition = (Ypx) => {
    const [isScrolled, setIsScrolled] = useState(false)

    //useEffect that detects if window is scrolled > 5px on the Y axis
    useEffect(() => {
    
        const detectScrollY = () => {
            if (window.scrollY > Ypx) {
            setIsScrolled(true)
            } else {
            setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", detectScrollY)

        return () => {
            window.removeEventListener("scroll", detectScrollY)
        }
        
    }, [Ypx])

  return isScrolled
}

export default useScrollPosition


// To use this hook: const {isScrolled} = useScrollPosition(30) where 30 is 30px
