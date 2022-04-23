import { SET_LOADING, SET_JOB, REMOVE_JOB, HANDLE_PAGE, SET_ITEM } from "../constants/actions";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_JOB: {
      const {
        payload: { jobArray, pages },
      } = action;

      const salaryJobArray = jobArray.map((item, index) => {
        return {
          ...item,
          salary: getRandomIntInclusive(700, 3000),
          aImage: `${index % 5}.jpeg`,
        };
      });
      return { ...state, jobArray: salaryJobArray, pages, isLoading: false };
    }

    case SET_ITEM: {
      const { payload } = action;
      console.log(action);
      // console.log(id);
      return {
        ...state,
        curItem: payload,
      };
    }
  }
};

export default reducer;
