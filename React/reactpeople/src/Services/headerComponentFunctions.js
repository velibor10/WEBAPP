import { userCardIcon, userListIcon } from "../Data/data";
// Function for send state of userList

export const sendUserListState = (state, func) => {
    if(state === "block") {
        func("hide");
    }
    else {
        func("block");
    }
}

// Function for send state of userCard

export const sendUserCardState = (state, func) => {
    if(state === "block") {
        func("hide");
    }
    else {
        func("block");
    }
}

// Function for changing style of previewing icon

export const changeIcon = (state, func) => {
    if(state === userListIcon) {
        func(userCardIcon);
    }
    else {
        func(userListIcon);
    }
}
