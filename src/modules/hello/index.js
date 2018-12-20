// Actions
export const SHOW = 'HELLO/SHOW';
export const HIDE = 'HELLO/HIDE';

// Reducer
const initialState = { visible: true, pageName: '' };

export default function reducer(state = initialState, action) {
  const { type, body } = action;
  switch (type) {
    case SHOW:
      return { ...state, visible: true, pageName: body.pageName };
    case HIDE:
      return { ...state, visible: false, pageName: '' };
    default:
      return state;
  }
}

// ActionCreators
export function show(pageName) {
  return { type: SHOW, body: { pageName } };
}

export function hide() {
  return { type: HIDE };
}
