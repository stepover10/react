export function userData(params) {
    return {
        action: 'USER_DATA',
        type: params
    };
}

export function userAction(params) {
    return {
        action: 'USER_ACTION',
        type: params
    };
}


