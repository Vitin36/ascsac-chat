export const types = {
    CHANGE_DISPLAY_WORKER_NAME: 'CONFIG/CHANGE_DISPLAY_WORKER_NAME',
    CHANGE_DISPLAY_CLOSE_ICON: 'CONFIG/CHANGE_DISPLAY_CLOSE_ICON',
    CHANGE_DISPLAY_SUBTITLE: 'CONFIG/CHANGE_DISPLAY_SUBTITLE',
    CHANGE_DISPLAY_WORKER_IMAGE: 'CONFIG/CHANGE_DISPLAY_WORKER_IMAGE',
    CHANGE_DISPLAY_MESSAGE_TIME: 'CONFIG/CHANGE_DISPLAY_MESSAGE_TIME',
}

export const actions = {
    changeDisplayWorkerName: data => ({ type: types.CHANGE_DISPLAY_WORKER_NAME, data }),
    changeDisplayCloseIcon: data => ({ type: types.CHANGE_DISPLAY_CLOSE_ICON, data }),
    changeDisplaySubtitle: data => ({ type: types.CHANGE_DISPLAY_SUBTITLE, data }),
    changeDisplayWorkerImage: data => ({ type: types.CHANGE_DISPLAY_WORKER_IMAGE, data }),
    changeDisplayMessageTime: data => ({ type: types.CHANGE_DISPLAY_MESSAGE_TIME, data }),
}