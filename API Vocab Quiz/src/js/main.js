import { toggleNav } from "./utils.mjs";
import {scoring, quizTemplate} from "./quiz.mjs";

document.querySelector("#menu-icon").onclick = toggleNav;

scoring()
quizTemplate()
