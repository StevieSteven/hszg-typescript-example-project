import fs from "fs";
import {getTodoList} from "./restClient/todoCalls";
import {htmlFrame} from "./htmlElements/htmlFrame";

getTodoList().then(list => {
    const htmlText = htmlFrame(list);

    fs.writeFileSync("./index.html", htmlText, "utf-8");
})

