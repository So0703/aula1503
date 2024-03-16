import {DataSource} from "typeorm"
import { join } from "path"
 
const dataBase = new DataSource ({
    type: 'sqlite',
    database: './src/database/database.sqlite',
    logging: true,
    synchronize: true,
    entities: [
        join(__dirname, '..', 'models/*.{ts,js}')
    ]

})

dataBase.initialize()
.then(() => {
    console.log(`Banco de dados inicializado`)
})
.catch((err) => {
    console.error(`Erro ao inicializar`)
})

export default dataBase