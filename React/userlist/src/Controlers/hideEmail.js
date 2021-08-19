export const hideEmail = email => {

    let result = email.split("@");

    let finalEmail = `${result[0].slice(0, 3)}...@${result[1]}`;

    return finalEmail;
}