import {existsSync, readdirSync, readFileSync} from "fs";
import {fileURLToPath} from "url";
import {join} from "path";
import Ajv from "ajv/dist/jtd.js";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ajv = new Ajv({allErrors: true});

for(const settingsFile of readdirSync(join(__dirname,'/settings'))){

  if(!existsSync(join(__dirname,'/schemas',settingsFile))){
    throw `Schema missing for "${settingsFile}"`
  }
  const schema = JSON.parse(readFileSync(join(__dirname,'/schemas',settingsFile),'utf-8'));
  const settings = JSON.parse(readFileSync(join(__dirname,'/settings',settingsFile),'utf-8'));
  const validate = ajv.compile(schema);
  const valid = validate(settings)
  if(!valid){
    console.error(validate.errors)
    throw `Invalid settings file "${settingsFile}"`
  }
}

console.log('All settings files are valid')