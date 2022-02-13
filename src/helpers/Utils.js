export const searchFilter = (arr, searchValue) => {
    console.log(arr, 'searchFilter');
    return arr.filter(current => {
        return current.name === searchValue
    }) 
}