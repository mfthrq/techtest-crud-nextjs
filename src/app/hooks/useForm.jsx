"use client";

import { useState } from "react";

export default function useForm(initialState = {}) {
    const [inputValues, setInputValues] = useState(initialState);

    const resetForm = () => {
        setInputValues(initialState); // Correct reference to initialState
    };

    const handleInputChange = ({ target }) => {
        setInputValues({ ...inputValues, [target.name]: target.value });
    };

    // Return values as an array or object
    return {
        inputValues,
        handleInputChange,
        resetForm,
    };
}
