import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const viewDir = "../../src/view"

export const indexHTML = path.join(__dirname, viewDir, "index.html");
export const notFound404 = path.join(__dirname, viewDir, "notFound-404.html");

export const logFolder = path.join(__dirname, "../../src/");