import * as React from "react";
import { render } from "react-dom";

import { StudiesList } from "./components/StudiesList";
import { StudyStore } from "./models/StudiesStore";

const store = StudyStore.create();

render(<StudiesList studiesStore={store} />, document.getElementById("app"));
