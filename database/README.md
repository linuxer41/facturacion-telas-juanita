

## Importar datos

Para importar datos a la base de datos, se debe ejecutar el siguiente comando en la consol sql/postgres:

```bash
psql -U postgres -d siat -f database/siat.sql
pg_restore -Fc -j 8 -d siat_api siat_api.dump
```

## Exportar datos

Para exportar datos de la base de datos, se debe ejecutar el siguiente comando en la consol sql/postgres:

```bash
pg_dump -U postgres -W -Fc -Z 9 --file=siat_api.dump siat_api
pg_dump -U postgres -d siat -f database/siat.sql
```


