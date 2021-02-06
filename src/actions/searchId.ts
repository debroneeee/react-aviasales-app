export function getSearchIdSucces(id: any) {
  return {
    type: 'SET_SEARCH_ID',
    id,
  };
}

export function getSearchId() {
  return async (dispatch: any) => {
    try {
      const res = await fetch('https://front-test.beta.aviasales.ru/search');
      const result = await res.json();
      dispatch(getSearchIdSucces(result.searchId));
    } catch (error) {
      throw new Error(error.message);
    }
  };
}