export const QBconfig = {
  credentials: {
    appId: '85557',
    authKey: 'VP3TPTQSsRu7XZG',
    authSecret: 'qykdMVXOsMhjBBk'
  },
  appConfig: {
    chatProtocol: {
      active: 2
    },
    streamManagement: {
      enable: true
    },
    debug: {
      mode: 1,
      file: null
    }
  }
};

export const CONSTANTS = {
  DIALOG_TYPES: {
    CHAT: 2,
    GROUPCHAT: 2,
    PUBLICCHAT: 1
  },
  ATTACHMENT: {
    TYPE: 'image',
    BODY: '[attachment]',
    MAXSIZE: 2 * 1000000, // set 2 megabytes,
    MAXSIZEMESSAGE: 'Image is too large. Max size is 2 mb.'
  },
  NOTIFICATION_TYPES: {
    NEW_DIALOG: '1',
    UPDATE_DIALOG: '2',
    LEAVE_DIALOG: '3'
  }
};
