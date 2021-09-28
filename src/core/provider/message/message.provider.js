import { baseClient } from "../base.provider";

export const sendMessage = async (data) => {
    return await baseClient.post('/messages', data, {})
}

export const sendFileMessage = async (data) => {
    return await baseClient.post('/messages/file', data, {})
}