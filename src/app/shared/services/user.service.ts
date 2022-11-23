import ApiClient from './api-client/api-client';

const USERS_ENDPOINT = '/users.json';

const getUsers = () => {
    return ApiClient.get(USERS_ENDPOINT)
        .then(response => response.data)
}
