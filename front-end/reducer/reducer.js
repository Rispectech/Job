import {
  SET_LOADING,
  SET_JOB,
  REMOVE_JOB,
  HANDLE_PAGE,
  SET_ITEM,
  SET_FILTERS_TYPE,
  RESEST_DATA,
  SET_FILTERS_LOCATION,
  SET_PREFERENCE,
  SET_PREF_TRUE,
  ADD_PREFERENCE,
} from "../constants/actions";

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
      return {
        ...state,
        jobArray: salaryJobArray,
        filterArray: salaryJobArray,
        pages,
        isLoading: false,
      };
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

    case RESEST_DATA: {
      return {
        ...state,
        jobArray: state.filterArray,
      };
    }

    case SET_FILTERS_TYPE: {
      const { payload } = action;
      console.log(payload, state.jobLocation);

      return {
        ...state,
        jobArray: state.jobArray.filter((item) => {
          // console.log(
          //   item.job_type === payload,
          //   payload,
          //   item.job_type,
          //   state.jobLocation.label
          // );

          if (state.jobLocation.label) {
            return (
              item.job_type === payload.label &&
              item.candidate_required_location === state.jobLocation.label
            );
          } else return item.job_type === payload.label;
        }),
      };
    }

    case SET_FILTERS_LOCATION: {
      const { payload } = action;
      console.log(payload);
      return {
        ...state,
        jobArray: state.jobArray.filter((item) => {
          console.log(item.candidate_required_location === payload, payload, item.job_type);
          return item.candidate_required_location === payload.label;
        }),
      };
    }

    case SET_PREFERENCE: {
      const { payload } = action;
      return {
        ...state,
        prefArray: payload,
      };
    }

    case SET_PREF_TRUE: {
      return {
        ...state,
        preference: action.payload,
      };
    }
  }
};

export default reducer;
