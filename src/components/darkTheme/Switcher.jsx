// import React from 'react'
// import useDarkSide from '../../hooks/useDarkSide.js'
// import {DarkModeSwitch} from 'react-toggle-dark-mode'
// import { useState } from 'react';

// const Switcher = () => {

//     const [colorTheme, setTheme] = useDarkSide();
//     // const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
//     const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? false : true);


//     const toggleDarkMode = (checked) => {
//         setTheme(colorTheme)
//         setDarkSide(checked)
//     }


//   return (
//     <>
//         <div className=' flex flex-col items-center'>
//             <DarkModeSwitch
//                 checked={darkSide}
//                 onChange={toggleDarkMode}
//                 size={28}
//                 moonColor="black"
//                 sunColor="#fff"
//             />
//             {/* <h3 className='text-gray-800 dark:text-gray-300 pt-4'>{ colorTheme === 'light' ? "Dark mode" : "Light mode"}</h3> */}
//         </div>
//     </>
//   )
// }

// export default Switcher