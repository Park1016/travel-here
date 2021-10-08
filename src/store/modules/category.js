import { dbService } from "firebase.js";

const initPhoto =
  "https://firebasestorage.googleapis.com/v0/b/travel-here-36a2e.appspot.com/o/HlCc4DymorVti0MHAKahOG2TDEv2%2F2148e2a6-0ee1-4adb-927c-873bb956c872?alt=media&token=26e06540-1638-4abc-ab51-6ae1506082f2";
const oceania = 
  "https://firebasestorage.googleapis.com/v0/b/travel-here-36a2e.appspot.com/o/spHew7JcHCU6DbdHLjnrardmPSx1%2F8562fd8e-9556-4ef4-817a-b3a24b4af096?alt=media&token=d74de282-9882-4353-953f-fe1c1310926a";
const asia = 
  "https://firebasestorage.googleapis.com/v0/b/travel-here-36a2e.appspot.com/o/bKbR43GoLUQAgYJyd1O3RnbLol43%2F812d8dfc-ebf6-4086-aaf1-aed49c32566d?alt=media&token=5a23c005-a1c5-4b2b-be57-e0eb2d021c02";
const africa =
  "https://firebasestorage.googleapis.com/v0/b/travel-here-36a2e.appspot.com/o/iVFXU2ZvqOgnhESolOtVinFHDem1%2Fe3f6935e-55ac-4280-9c5b-e0da2a7e2d7c?alt=media&token=c376fa0f-27c3-41f7-b03e-d7b22dc4927f";
const south_america =
  "https://firebasestorage.googleapis.com/v0/b/travel-here-36a2e.appspot.com/o/spHew7JcHCU6DbdHLjnrardmPSx1%2F6d3e26a2-6e58-41fd-b5dd-3dfa103c3db5?alt=media&token=c6776e2f-0616-4a58-8d5c-b6da880e0c42";
const north_america =
  "https://firebasestorage.googleapis.com/v0/b/travel-here-36a2e.appspot.com/o/bKbR43GoLUQAgYJyd1O3RnbLol43%2Faae13343-de3a-448d-8cf3-142577b29d9e?alt=media&token=200106f2-301f-4b8a-b3e4-4babfad4ddd7";
const europe =
  "https://firebasestorage.googleapis.com/v0/b/travel-here-36a2e.appspot.com/o/bKbR43GoLUQAgYJyd1O3RnbLol43%2F15953182-ed79-40f6-8843-9a4c78ef23a6?alt=media&token=ba6efdba-9822-40f0-8036-164e07f5ad83";

  //actions
const GET_CATEGORY_START = "category/GET_CATEGORY_START";
const GET_CATEGORY_SUCCESS = "category/GETCATEGORY_SUCCESS";
const GET_CATEGORY_FAIL = "category/GET_CATEGORY_FAIL";

//action constructor
export function getCategoryStart() {
  return {
    type: GET_CATEGORY_START,
  };
}

export function getCategorySuccess(data) {
  return {
    type: GET_CATEGORY_SUCCESS,
    data,
  };
}

export function getCategoryFail(error) {
  return {
    type: GET_CATEGORY_FAIL,
    error,
  };
}

// initial
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case GET_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
} // redux-thunk
export function getCategoryThunk() {
  return async (dispatch, getState) => {
    try {
      dispatch(getCategoryStart());
      const res = await dbService.collection("post").get();
      let resArray = [
        {
          region: "asia",
          photo: asia,
        },
        {
          region: "north_america",
          photo: north_america,
        },
        {
          region: "south_america",
          photo: south_america,
        },
        {
          region: "africa",
          photo: africa,
        },
        {
          region: "europe",
          photo: europe,
        },
        {
          region: "oceania",
          photo: oceania,
        },
      ];
      // res.forEach((res) => {
      //   if (res.data().post_photo.length > 0) {
      //     const random = Math.floor(
      //       Math.random() * res.data().post_photo.length
      //     );
      //     for (let i = 0; i < resArray.length; i++) {
      //       if (resArray[i].region === res.data().post_region) {
      //         resArray[i].photo = res.data().post_photo[random];
      //       }
      //     }
      //   }
      // });
      dispatch(getCategorySuccess(resArray));
    } catch (e) {
      dispatch(getCategoryFail(e));
    }
  };
}
