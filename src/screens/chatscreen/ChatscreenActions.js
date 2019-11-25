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
