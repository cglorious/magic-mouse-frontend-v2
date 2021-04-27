export const incrementStarWars = id => {
  return (dispatch) => {
    dispatch({
    type: 'INCREMENT_STARWARS',
    payload: { id }
    })
  }
}

export const decrementStarWars = id => {
  return (dispatch) =>
    dispatch({
    type: 'DECREMENT_STARWARS',
    payload: { id }
  })
}

export const incrementFantasyland = id => {
  return {
    type: 'INCREMENT_FANTASYLAND',
    payload: { id }
  }
}

export const decrementFantasyland = id => {
  return {
    type: 'DECREMENT_FANTASYLAND',
    payload: { id }
  }
}

export const incrementTomorrowland = id => {
  return {
    type: 'INCREMENT_TOMORROWLAND',
    payload: { id }
  }
}

export const decrementTomorrowland = id => {
  return {
    type: 'DECREMENT_TOMORROWLAND',
    payload: { id }
  }
}

export const incrementAdventureland = id => {
  return {
    type: 'INCREMENT_ADVENTURELAND',
    payload: { id }
  }
}

export const decrementAdventureland = id => {
  return {
    type: 'DECREMENT_ADVENTURELAND',
    payload: { id }
  }
}

export const incrementCritterCountry = id => {
  return {
    type: 'INCREMENT_CRITTERCOUNTRY',
    payload: { id }
  }
}

export const decrementCritterCountry = id => {
  return {
    type: 'DECREMENT_CRITTERCOUNTRY',
    payload: { id }
  }
}

export const incrementFrontierland = id => {
  return {
    type: 'INCREMENT_FRONTIERLAND',
    payload: { id }
  }
}

export const decrementFrontierland = id => {
  return {
    type: 'DECREMENT_FRONTIERLAND',
    payload: { id }
  }
}

export const incrementMainstreet= id => {
  return {
    type: 'INCREMENT_MAINSTREET',
    payload: { id }
  }
}

export const decrementMainstreet = id => {
  return {
    type: 'DECREMENT_MAINSTREET',
    payload: { id }
  }
}

export const incrementMickeysToontown = id => {
  return {
    type: 'INCREMENT_MICKEYSTOONTOWN',
    payload: { id }
  }
}

export const decrementMickeysToontown = id => {
  return {
    type: 'DECREMENT_MICKEYSTOONTOWN',
    payload: { id }
  }
}

export const incrementNola= id => {
  return {
    type: 'INCREMENT_NOLA',
    payload: { id }
  }
}

export const decrementNola = id => {
  return {
    type: 'DECREMENT_NOLA',
    payload: { id }
  }
}
