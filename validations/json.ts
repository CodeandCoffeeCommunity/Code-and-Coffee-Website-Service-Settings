import {fileURLToPath} from "url";
import Ajv from "ajv/dist/jtd.js";
import {existsSync, readdirSync, readFileSync} from "fs";
import {join} from "path";

console.log('Validating JSON settings...');

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ajv = new Ajv({ allErrors: true });

for (const settingsFile of readdirSync(join(__dirname, "../settings")).filter(
  (filename) => {
    return filename.endsWith(".json");
  }
)) {
  if (!existsSync(join(__dirname, "../schemas", settingsFile))) {
    throw `Schema missing for "${settingsFile}"`;
  }
  const schema = JSON.parse(
    readFileSync(join(__dirname, "../schemas", settingsFile), "utf-8")
  );
  const settings = JSON.parse(
    readFileSync(join(__dirname, "../settings", settingsFile), "utf-8")
  );
  const validate = ajv.compile(schema);
  const valid = validate(settings);
  if (!valid) {
    console.error(validate.errors);
    throw `Invalid settings file "${settingsFile}"`;
  }
}

console.log('All JSON settings files are valid!');