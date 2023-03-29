// modules/direBonjour.js
export function direBonjour(prenom) {
  console.log(`Bonjour ${prenom} !`);
}

// index.js
import { direBonjour } from "./modules/direBonjour.js";

direBonjour("John");

// index.html
<script type="module" src="index.js"></script>;
