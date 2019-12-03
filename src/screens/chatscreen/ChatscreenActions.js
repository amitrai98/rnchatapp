// contants for pulling chats
export const PULL_CHATS = 'PULL_CHATS';
export const PULL_CHATS_INPROGRESS = 'PULL_CHATS_INPROGRESS';
export const PULL_CHATS_SUCCESS = 'PULL_CHATS_SUCCESS';
export const PULL_CHATS_FAILURE = 'PULL_CHATS_FAILURE';

export function pullChats(payload) {
  return {
    type: PULL_CHATS,
    payload: payload,
  };
}

export function pullChatsProgress(payload) {
  return {
    type: PULL_CHATS_INPROGRESS,
    payload: payload,
  };
}

export function pullChatsSuccess(payload) {
  return {
    type: PULL_CHATS_SUCCESS,
    payload: payload,
  };
}
export function pullChatsFailure(payload) {
  return {
    type: PULL_CHATS_FAILURE,
    payload: payload,
  };
}

// contants for sending chat message
export const SEND_CHAT_MESSAGE = 'SEND_CHAT_MESSAGE';
export const SEND_CHAT_MESSAGE_INPROGRESS = 'SEND_CHAT_MESSAGE_INPROGRESS';
export const SEND_CHAT_MESSAGE_SUCCESS = 'SEND_CHAT_MESSAGE_SUCCESS';
export const SEND_CHAT_MESSAGE_FAILURE = 'SEND_CHAT_MESSAGE_FAILURE';

export function sendChatMessage(payload) {
  return {
    type: SEND_CHAT_MESSAGE,
    payload: payload,
  };
}

export function sendChatMessageProgress(payload) {
  return {
    type: SEND_CHAT_MESSAGE_INPROGRESS,
    payload: payload,
  };
}

export function sendChatMessageSuccess(payload) {
  return {
    type: SEND_CHAT_MESSAGE_SUCCESS,
    payload: payload,
  };
}
export function sendChatMessageFailure(payload) {
  return {
    type: SEND_CHAT_MESSAGE_FAILURE,
    payload: payload,
  };
}
