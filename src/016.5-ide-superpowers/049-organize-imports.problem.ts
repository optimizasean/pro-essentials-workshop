import {
  MAX_PAGE
} from "./dummy-import-2";

const handlePage = (page: number) => {
  if (page > MAX_PAGE) {
    console.log("Page is too large!");
  }
};


//NOTE CTRL . can remove all unused imports if selected on a file
//NOTE can also use SHIFT ALT O to organize imports anywhere in the file