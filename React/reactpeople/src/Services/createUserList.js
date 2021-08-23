import { twentyRandomBitUsersUrl} from "../Data/data";
import { User } from "../Entities/users";


// Function for creating random users array

export const createRandomUsers = () => {

    return fetch(twentyRandomBitUsersUrl)

    .then(request => {
        return request.json();
    })
    .then(users => {
        return users.results.map(user => {
            return new User(user.gender, user.name.first, user.name.last, user.email, user.dob.date, user.picture.large)
        })
    })
}