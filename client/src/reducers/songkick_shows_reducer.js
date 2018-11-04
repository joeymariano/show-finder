export default function songkickShowsReducer(state = {shows: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_SONGKICK_SHOWS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SONGKICK_SHOWS':
      debugger
      const showsData = action.payload.map(show => show.displayName)
      return {loading: false, shows: showsData}

    default:
      return state
  }
}
