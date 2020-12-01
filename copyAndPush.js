const copyAndPush = (arr, item) => {
    const arrCopy = [...arr, item]
    return arrCopy;
}

module.exports = {
    copyAndPush
}