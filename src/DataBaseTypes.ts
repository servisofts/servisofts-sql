
export type DataBaseTypeConfig = {
    querys: {
        'list_tables': string,
        'list_columns': string
    }
}

const PostgreSQL: DataBaseTypeConfig = {
    querys: {
        list_tables: `SELECT tablename as name FROM pg_tables WHERE schemaname = 'public'`,
        list_columns: `select column_name, data_type from information_schema.columns where table_name = '$1' order by ordinal_position`
    }
}
const SQLServer: DataBaseTypeConfig = {
    querys: {
        list_tables: `select * from sysobjects where xtype = 'U'`,
        list_columns: `select COLUMN_NAME as column_name, DATA_TYPE as data_type from information_schema.columns where table_name = '$1' order by ordinal_position`
    }
}
export default {
    PostgreSQL,
    SQLServer
}