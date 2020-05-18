function isEmptyValue(value) {
    return value === '' || value === null || value === undefined
}

function isEmptyObject(obj) {
    return !!obj && Object.keys(obj).length === 0 && obj.constructor === Object
}

function isNil(val) {
    return val === '' || val === null || val === undefined;
}

const helpers = {
    isEmptyObject,
    isEmptyValue,
    isNil
}

export default helpers
