export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    let arrayPages = []
    for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i)
    }

    return arrayPages
}