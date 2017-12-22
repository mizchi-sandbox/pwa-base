/* @flow */

// Constants
export const INCREMENT = 'counter/increment'

// Action Creators
export async function increment(): Promise<{
  type: typeof INCREMENT
}> {
  return {
    type: INCREMENT
  }
}

// Reducer
export type Action = $ReturnType<typeof increment>

export type State = {
  value: number
}

const initialState: State = {
  value: 0
}

// Reducer
export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case INCREMENT: {
      return { value: state.value + 1 }
    }
    default: {
      return state
    }
  }
}
