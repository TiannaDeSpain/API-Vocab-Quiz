import { toggleNav } from "./utils.mjs";
import {quizTemplate, scoring} from "./quiz.mjs";

document.querySelector("#menu-icon").onclick = toggleNav;
quizTemplate()
scoring()
