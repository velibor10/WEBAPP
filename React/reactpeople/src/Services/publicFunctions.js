// Function for creating shorter email address

export const createShorterEmail = array => {
    return `${array[0].slice(0, 3)}...${array[0].slice(array[0].length - 3, array[0].length)}@${array[1]}`;
}

// Function for crating formatted date object 

export const createFormattedDate = date => {
    let result = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.`;
    return result;
}