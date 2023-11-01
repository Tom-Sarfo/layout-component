/**
 * useToggle - Toggle between the boolean values (true and false)
 * @param: {initialValue} initial value to pass to this function, by default is false
 * @returns: returns an object of the current boolean state and a method to set the boolean state
 * 
 * @description: This defines a custom hook that takes an initital value of boolean type, 
 * create a state variable and a method to update state variable
 */

import { useState } from "react";

export default function useToggle(initialValue = false) {
    const [state, setState] = useState(initialValue);

    const updatState = () => {
        setState(state => !state);
    }

  return [state, updatState];
}
