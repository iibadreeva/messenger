import HTTP from "../../core/modules/http.js";
import { BaseAPI } from "../../core/modules/http/base-api.js";
import { host } from "../../core/modules/actions.js";
const userAPIInstance = new HTTP(host);
export class ChangePasswordApi extends BaseAPI {
    update(data) {
        return userAPIInstance.put('/api/v2/user/password', {
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify(data)
        });
    }
}
//# sourceMappingURL=change-password-api.js.map