import dotenv from 'dotenv'

dotenv.config();
const db = new Sequelize(
    'db_todo',
    'skillshift-client',
    '@Vi{2~:]f;Kvi`9a',
    {
        host : '34.101.71.233',
        dialect: 'mysql',
        logging: false
    }
)
export default db