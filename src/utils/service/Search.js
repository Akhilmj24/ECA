export const keywordOrderSearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase()
    return array.filter(value => {
        return value.phone.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
        value.address.name.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
        value.orderstatus.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
        value.amount.toLowerCase().match(new RegExp(searchTerm, 'g'))
    })
}