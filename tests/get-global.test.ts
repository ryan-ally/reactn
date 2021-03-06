import getGlobal from '../src/get-global';
import GlobalStateManager from '../src/global-state-manager';
import { G, INITIAL_STATE } from './utils/initial';
import spyOn from './utils/spy-on-global-state-manager';



describe('getGlobal', (): void => {

  let globalStateManager: GlobalStateManager<G>;
  const spy = spyOn('state');

  beforeEach((): void => {
    globalStateManager = new GlobalStateManager<G>(INITIAL_STATE);
  });



  it('should be a function with 1 argument', (): void => {
    expect(getGlobal).toBeInstanceOf(Function);
    expect(getGlobal).toHaveLength(1);
  });

  it('should call GlobalStateManager.state', (): void => {
    getGlobal(globalStateManager);
    expect(spy.state).toHaveBeenCalledTimes(1);
    expect(spy.state).toHaveBeenCalledWith();
  });

  it('should return a copy of the state', (): void => {
    const state: G = getGlobal(globalStateManager);
    expect(state).toEqual(INITIAL_STATE);
    expect(state).not.toBe(INITIAL_STATE);
  });
});
