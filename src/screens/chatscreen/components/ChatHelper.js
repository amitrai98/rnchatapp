import moment from 'moment';

export const MESSAGE_SEEN = 'seen';
export const MESSAGE_UNSEEN = 'unseen';
export const MESSAGE_DELETED = 'deleted';
export const MESSAGE_RECEIVED = 'received';
export const MESSAGE_SENT = 'sent';

export const getMessageObject = (message, receverId, senderId) => {
  return {
    id: `${moment().toISOString()}`,
    to: `${receverId}`,
    from: `${senderId}`,
    time: `${moment().toISOString()}`,
    message: `${message}`,
    viewStatus: 'unseen',
    messageType: 'sent',
  };
};

export const getChatMessage = (
  message,
  messageTo,
  messageFrom,
  messageType,
  messageVisiblity,
) => {
  return {
    id: `${moment().toISOString()}`,
    messageTo: messageTo,
    messageFrom: messageFrom,
    message: message,
    messageTime: `${moment().toISOString()}`,
    viewStatus: messageVisiblity,
    messageType: messageType,
  };
};
