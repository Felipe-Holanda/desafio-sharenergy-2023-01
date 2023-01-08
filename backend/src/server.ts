import app from "./app";
import { connect } from "./data-source";
import "dotenv/config";

(async () => {

    await connect()
        .catch((err) => {
            console.error("Erro ao conectar-se ao banco de dados.", err)
            return 0;
        }).then(() => {
            console.log("Banco de dados inicializado")
            app.listen(4001, () => {
                console.log("Servidor executando na porta " + process.env.PORT)
            })
        })
})()