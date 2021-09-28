import { baseClient } from "../base.provider";

export const searchCurrentPosition = async () => {
    return await baseClient.post('/service/queue', {}, {})
}
