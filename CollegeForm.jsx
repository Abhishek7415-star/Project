// CollegeForm.js
import React, { useReducer, useState } from "react";
import { collegeReducer, initialState } from "./reducer";

function CollegeForm() {
  const [state, dispatch] = useReducer(collegeReducer, initialState);
  const [courseInput, setCourseInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError(null);
  };

  const handleErrorWrapper = (fn) => (...args) => {
    try {
      fn(...args);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>College Form</h2>
      {error && <div style={{ color: "red" }}>Error: {error}</div>}

      <form onSubmit={handleErrorWrapper(handleSubmit)}>
        <input
          placeholder="College Name"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", payload: { field: "name", value: e.target.value } })
          }
        />
        <input
          placeholder="Establishment Year"
          value={state.establishment_year}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              payload: { field: "establishment_year", value: e.target.value }
            })
          }
        />
        <input
          placeholder="Building"
          value={state.address.building}
          onChange={(e) =>
            dispatch({
              type: "SET_ADDRESS_FIELD",
              payload: { field: "building", value: e.target.value }
            })
          }
        />
        <input
          placeholder="Street"
          value={state.address.street}
          onChange={(e) =>
            dispatch({
              type: "SET_ADDRESS_FIELD",
              payload: { field: "street", value: e.target.value }
            })
          }
        />
        <input
          placeholder="City Name"
          value={state.address.city.name}
          onChange={(e) =>
            dispatch({
              type: "SET_CITY_FIELD",
              payload: { field: "name", value: e.target.value }
            })
          }
        />
        <input
          placeholder="Pin Code"
          value={state.address.city.locality.pinCode}
          onChange={(e) =>
            dispatch({
              type: "SET_LOCALITY_FIELD",
              payload: { field: "pinCode", value: e.target.value }
            })
          }
        />
        <input
          placeholder="Landmark"
          value={state.address.city.locality.landmark}
          onChange={(e) =>
            dispatch({
              type: "SET_LOCALITY_FIELD",
              payload: { field: "landmark", value: e.target.value }
            })
          }
        />
        <input
          placeholder="State"
          value={state.address.state}
          onChange={(e) =>
            dispatch({
              type: "SET_ADDRESS_FIELD",
              payload: { field: "state", value: e.target.value }
            })
          }
        />
        <input
          placeholder="Latitude"
          value={state.address.coordinates.latitude}
          onChange={(e) =>
            dispatch({
              type: "SET_COORDINATES",
              payload: { field: "latitude", value: e.target.value }
            })
          }
        />
        <input
          placeholder="Longitude"
          value={state.address.coordinates.longitude}
          onChange={(e) =>
            dispatch({
              type: "SET_COORDINATES",
              payload: { field: "longitude", value: e.target.value }
            })
          }
        />

        <input
          placeholder="Add Course"
          value={courseInput}
          onChange={(e) => setCourseInput(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "ADD_COURSE", payload: courseInput });
            setCourseInput("");
          }}
        >
          Add Course
        </button>

        <br />
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            dispatch({ type: "RESET_FORM" });
          }}
        >
          Reset Form
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted College Data:</h3>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default CollegeForm;
