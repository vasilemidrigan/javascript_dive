import "./alert.js";
import { spy } from "./alert.js";
import { user } from "./module.js"; // **

console.log(spy);

user.name = "Leo";

console.log(user);
