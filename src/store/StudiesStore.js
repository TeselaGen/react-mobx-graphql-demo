import createStore from "./utils/createStore";
import { Study } from "./models/studyModel";

export const StudyStore = createStore("studies", Study, true);
