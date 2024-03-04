import { initServer } from "./app";

async function init(){
    const app = await initServer();

    app.listen(8000, ()=>console.log(`listening at port 8000`))
}

init();