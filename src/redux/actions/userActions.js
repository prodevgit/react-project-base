// You can use CONSTANTS.js file for below definitions of constants and import here.
import { UPDATE_USER } from "../CONSTANTS"

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: {...user}
})
