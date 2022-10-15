

## Importar datos

Para importar datos a la base de datos, se debe ejecutar el siguiente comando en la consol sql/postgres:

```bash
psql -U postgres -d siat -f database/siat.sql
```

## Exportar datos

Para exportar datos de la base de datos, se debe ejecutar el siguiente comando en la consol sql/postgres:

```bash
pg_dump -U postgres -d siat -f database/siat.sql
```


