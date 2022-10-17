import createServer from "./utils/server";
import {getCharacterFromId, getDataFromPages} from "./controller/character.controller";

const port = 3001;

export const app = createServer();

app.post("/pages",  getDataFromPages);


app.post("/character", getCharacterFromId);

app.listen(port, async () => {
  console.log(`App is running at http://localhost:${port}`);
});
