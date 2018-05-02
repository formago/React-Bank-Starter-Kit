/*
 * Actions describe changes of state in your application
 */

// We import constants to name our actions' type
import { 
    LOGOUT  
  } from 'constants'

  export function logout() {
    return { type: LOGOUT }
  }
