import reducer, { show, hide, SHOW, HIDE } from '.';

describe('Hello', () => {
  describe('actions', () => {
    it('show()を呼ぶとSHOWのactionが返ること', () => {
      const pageName = 'Top';
      const expectedAction = {
        type: SHOW,
        body: { pageName },
      };
      expect(show(pageName)).toEqual(expectedAction);
    });

    it('hide()を呼ぶとHIDEのactionが返ること', () => {
      const expectedAction = {
        type: HIDE,
      };
      expect(hide()).toEqual(expectedAction);
    });
  });

  describe('reducer', () => {
    describe('action SHOW', () => {
      it('vtisibleがtrueでページ名が取得できること', () => {
        const state = { visible: false, pageName: '' };
        const action = { type: SHOW, body: { pageName: 'Top' } };
        const expected = { visible: true, pageName: 'Top' };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがHIDEの場合', () => {
      it('vtisibleがfalseでページ名が空であること', () => {
        const state = { visible: true, pageName: 'Top' };
        const action = { type: HIDE };
        const expected = { visible: false, pageName: '' };
        expect(reducer(state, action)).toEqual(expected);
      });
    });
  });
});
