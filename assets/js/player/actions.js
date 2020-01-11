// Connectivity-related events
export const JOIN_ROOM = "JOIN_ROOM";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

// Initialize event listeners
export const joinRoom = (socket, room_id) => {
  return dispatch => {
    const channel = socket.channel(`room:${room_id}`, {});

    channel
      .join()
      .receive("ok", ({ player }) => {
        dispatch({
          type: JOIN_ROOM,
          room: room_id,
          channel,
          player
        });
      })
      .receive("error", ({ reason }) => {
        dispatch({
          type: RECEIVE_ERROR,
          error: reason
        });
      });
  };
};
