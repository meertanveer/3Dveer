const validateCapacity = (input) => {
    const regex = /^[0-9]*$/;
    return regex.test(input) ? null : 'Please enter digits only';
};

const validateYrofMake = (input) => {
    const regex = /^[0-9]{4}$/;
    return regex.test(input) ? null : 'Enter valid 4-digit year';
};


export{
    validateCapacity,
    validateYrofMake,
};
