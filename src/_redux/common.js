import { db } from 'utils/firebase'

const GET_MAINTAIN_STATUS_SUCCESS = 'GET_MAINTAIN_STATUS_SUCCESS'
const GET_MAINTAIN_STATUS_FAIL = 'GET_MAINTAIN_STATUS_FAIL'

const getMaintainStatusSuccess = status => ({
  type: GET_MAINTAIN_STATUS_SUCCESS,
  payload: { status }
})

const getMaintainStatusFail = error => ({
  type: GET_MAINTAIN_STATUS_FAIL,
  payload: { error }
})

export const getMaintainStatus = () => async dispatch => {
  try {
    const doc = await db
      .collection('settings')
      .doc('maintainMode')
      .get()
    if (doc.exists) {
      const status = doc.data().value
      return dispatch(getMaintainStatusSuccess(status))
    }
    throw Error('Document not found.')
  } catch (err) {
    return dispatch(getMaintainStatusFail(err))
  }
}

const initialState = {
  maintainMode: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MAINTAIN_STATUS_SUCCESS:
      return {
        ...state,
        maintainMode: action.payload.status
      }
    case GET_MAINTAIN_STATUS_FAIL:
      console.log(action.payload.error)
      return {
        ...state,
        maintainMode: false
      }
    default:
      return state
  }
}
