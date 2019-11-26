import moment from 'moment';
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
