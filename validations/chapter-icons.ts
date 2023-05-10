import {fileURLToPath} from "url";
import {readdirSync, statSync} from "fs";
import {join} from "path";

console.log('Validating city icons...');

const MAX_ICON_SIZE_KB = 30;
const BYTE_TO_KB = 1024

const __dirname = fileURLToPath(new URL(".", import.meta.url));
for(const iconFile of readdirSync(join(__dirname, "../settings/chapter-icons"))){
  const fileUrl = join(__dirname, "../settings/chapter-icons",iconFile);
  if(!fileUrl.endsWith('.png')){
    throw `File "${fileUrl}" is not a png file! Only png files allowed as icons!`;
  }
  const fileSize = statSync(fileUrl).size / BYTE_TO_KB;
  if(fileSize > MAX_ICON_SIZE_KB){
    throw `File "${fileUrl}" is ${fileSize.toFixed(2)}kb large. Maximum allowed size of icon is ${MAX_ICON_SIZE_KB}kb.`
  }
}

console.log('All city icons are valid!');