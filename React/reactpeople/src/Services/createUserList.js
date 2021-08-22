import { twentyRandomBitUsersUrl} from "../Data/data";

// Function for creating random users array

export const createRandomUsers = () => {

    return fetch(twentyRandomBitUsersUrl)

    .then(request => {
        return request.json();
    })
    .then(users => {
        return users;
    })
}