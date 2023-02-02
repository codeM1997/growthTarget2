import "./App.css";
import axios from "axios";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [formInfo, setFormInfo] = useState(null);

  const getDataFromStrapi = () => {
    axios.get("http://localhost:1337/form-details/1").then((response) => {
      setFormInfo(response.data);
      /* Static Strapi response if required  */
      //   const res = {
      //     "id": 1,
      //     "name": "New User ",
      //     "description": "Add details to register yourself.",
      //     "published_at": "2023-02-01T09:58:33.006Z",
      //     "created_at": "2023-02-01T09:42:34.666Z",
      //     "updated_at": "2023-02-01T09:58:33.020Z",
      //     "formInputs": [
      //         {
      //             "__component": "form-group.text-field",
      //             "id": 1,
      //             "name": "firstName",
      //             "disabled": null,
      //             "className": null,
      //             "placeholder": "Please enter your first name"
      //         },
      //         {
      //             "__component": "form-group.text-field",
      //             "id": 2,
      //             "name": "lastName",
      //             "disabled": null,
      //             "className": null,
      //             "placeholder": "Please enter your last name"
      //         },
      //         {
      //             "__component": "form-group.dropdown",
      //             "id": 1,
      //             "name": "gender",
      //             "label": "Gender",
      //             "optionsArray": [
      //                 {
      //                     "label": "Male",
      //                     "value": "male"
      //                 },
      //                 {
      //                     "label": "Female",
      //                     "value": "female"
      //                 },
      //                 {
      //                     "label": "Others",
      //                     "value": "others"
      //                 }
      //             ],
      //             "disabled": null
      //         }
      //     ]
      // }
    });
  };

  const handleSubmit = (data) => {
    console.log("Data on Submit", data);
  };

  return (
    <div>
      <h1>Click to Fetch Data from Strapi</h1>
      <button type="button" onClick={getDataFromStrapi}>
        Click
      </button>

      {formInfo && <Form handleSubmit={handleSubmit} formInfo={formInfo} />}
    </div>
  );
}

export default App;
