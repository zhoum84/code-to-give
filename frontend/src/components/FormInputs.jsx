import Name from "./questions/1name"
import OptIn from "./questions/OptIn"
import Shipping from "./questions/Shipping"
import useFormContext from "../hooks/useFormContext"
import React from 'react';

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <Name/>,
        1: <Shipping />,
        2: <OptIn />
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs