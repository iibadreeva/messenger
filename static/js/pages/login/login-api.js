import HTTP from "../../core/modules/http.js";
import { BaseAPI } from "../../core/modules/http/base-api.js";
import { host } from "../../core/modules/actions.js";
const userAPIInstance = new HTTP(host);
export class LoginAPI extends BaseAPI {
    create(data) {
        return userAPIInstance.post('/api/v2/auth/signin', {
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify(data)
        });
    }
}
//# sourceMappingURL=login-api.js.map