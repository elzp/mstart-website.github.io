import { useEffect } from 'react';

function useOutsideRef (ref, setVisibility) {

   useEffect( () => {
      function handleClickOutside(event) {
            
         if (ref.current && !ref.current.contains(event.target)) {
            setVisibility();
            }
      }

      // subscribe functionality
      document.addEventListener("mousedown", handleClickOutside);
      // unsubscribe functionality
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
       
   }, [ref])

    
}


export default useOutsideRef;
