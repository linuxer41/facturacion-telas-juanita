--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0
-- Dumped by pg_dump version 14.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cliente; Type: TABLE; Schema: public; Owner: linuxer
--

CREATE TABLE public.cliente (
    id integer NOT NULL,
    email character varying,
    name character varying,
    phone character varying,
    nit character varying,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone
);


ALTER TABLE public.cliente OWNER TO linuxer;

--
-- Name: cliente_id_seq; Type: SEQUENCE; Schema: public; Owner: linuxer
--

CREATE SEQUENCE public.cliente_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cliente_id_seq OWNER TO linuxer;

--
-- Name: cliente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: linuxer
--

ALTER SEQUENCE public.cliente_id_seq OWNED BY public.cliente.id;


--
-- Name: cotizacion; Type: TABLE; Schema: public; Owner: linuxer
--

CREATE TABLE public.cotizacion (
    id integer NOT NULL,
    numero integer NOT NULL,
    "clientName" character varying,
    nit character varying,
    items jsonb,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    subtotal numeric NOT NULL,
    descuento numeric NOT NULL,
    total numeric NOT NULL
);


ALTER TABLE public.cotizacion OWNER TO linuxer;

--
-- Name: cotizacion_id_seq; Type: SEQUENCE; Schema: public; Owner: linuxer
--

CREATE SEQUENCE public.cotizacion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cotizacion_id_seq OWNER TO linuxer;

--
-- Name: cotizacion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: linuxer
--

ALTER SEQUENCE public.cotizacion_id_seq OWNED BY public.cotizacion.id;


--
-- Name: factura; Type: TABLE; Schema: public; Owner: linuxer
--

CREATE TABLE public.factura (
    id integer NOT NULL,
    numero integer NOT NULL,
    "clientName" character varying,
    nit character varying,
    items jsonb,
    xml text,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    subtotal numeric NOT NULL,
    descuento numeric NOT NULL,
    total numeric NOT NULL,
    cuf text NOT NULL,
    json jsonb,
    estado text NOT NULL,
    pdf text,
    cufd text DEFAULT ''::text NOT NULL,
    "tipoEmision" text DEFAULT 'EN LINEA'::text NOT NULL,
    "fechaFactura" timestamp without time zone NOT NULL
);


ALTER TABLE public.factura OWNER TO linuxer;

--
-- Name: factura_id_seq; Type: SEQUENCE; Schema: public; Owner: linuxer
--

CREATE SEQUENCE public.factura_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.factura_id_seq OWNER TO linuxer;

--
-- Name: factura_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: linuxer
--

ALTER SEQUENCE public.factura_id_seq OWNED BY public.factura.id;


--
-- Name: file; Type: TABLE; Schema: public; Owner: linuxer
--

CREATE TABLE public.file (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    path character varying NOT NULL
);


ALTER TABLE public.file OWNER TO linuxer;

--
-- Name: forgot; Type: TABLE; Schema: public; Owner: linuxer
--

CREATE TABLE public.forgot (
    id integer NOT NULL,
    hash character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    "userId" integer
);


ALTER TABLE public.forgot OWNER TO linuxer;

--
-- Name: forgot_id_seq; Type: SEQUENCE; Schema: public; Owner: linuxer
--

CREATE SEQUENCE public.forgot_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.forgot_id_seq OWNER TO linuxer;

--
-- Name: forgot_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: linuxer
--

ALTER SEQUENCE public.forgot_id_seq OWNED BY public.forgot.id;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: linuxer
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.migrations OWNER TO linuxer;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: linuxer
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO linuxer;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: linuxer
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: producto; Type: TABLE; Schema: public; Owner: linuxer
--

CREATE TABLE public.producto (
    id integer NOT NULL,
    detalle character varying,
    "codigoProducto" character varying,
    "codigoProductoSiat" character varying NOT NULL,
    "codigoUnidadMedida" character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    cantidad numeric DEFAULT '0'::numeric NOT NULL,
    precio numeric DEFAULT '0'::numeric NOT NULL
);


ALTER TABLE public.producto OWNER TO linuxer;

--
-- Name: producto_id_seq; Type: SEQUENCE; Schema: public; Owner: linuxer
--

CREATE SEQUENCE public.producto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.producto_id_seq OWNER TO linuxer;

--
-- Name: producto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: linuxer
--

ALTER SEQUENCE public.producto_id_seq OWNED BY public.producto.id;


--
-- Name: role; Type: TABLE; Schema: public; Owner: linuxer
--

CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.role OWNER TO linuxer;

--
-- Name: status; Type: TABLE; Schema: public; Owner: linuxer
--

CREATE TABLE public.status (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.status OWNER TO linuxer;

--
-- Name: user; Type: TABLE; Schema: public; Owner: linuxer
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying,
    password character varying,
    provider character varying DEFAULT 'email'::character varying NOT NULL,
    "socialId" character varying,
    "firstName" character varying,
    "lastName" character varying,
    hash character varying,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    "photoId" uuid,
    "roleId" integer,
    "statusId" integer
);


ALTER TABLE public."user" OWNER TO linuxer;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: linuxer
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO linuxer;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: linuxer
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: cliente id; Type: DEFAULT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.cliente ALTER COLUMN id SET DEFAULT nextval('public.cliente_id_seq'::regclass);


--
-- Name: cotizacion id; Type: DEFAULT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.cotizacion ALTER COLUMN id SET DEFAULT nextval('public.cotizacion_id_seq'::regclass);


--
-- Name: factura id; Type: DEFAULT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.factura ALTER COLUMN id SET DEFAULT nextval('public.factura_id_seq'::regclass);


--
-- Name: forgot id; Type: DEFAULT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.forgot ALTER COLUMN id SET DEFAULT nextval('public.forgot_id_seq'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: producto id; Type: DEFAULT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.producto ALTER COLUMN id SET DEFAULT nextval('public.producto_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: cliente; Type: TABLE DATA; Schema: public; Owner: linuxer
--

COPY public.cliente (id, email, name, phone, nit, "createdAt", "updatedAt", "deletedAt") FROM stdin;
\.


--
-- Data for Name: cotizacion; Type: TABLE DATA; Schema: public; Owner: linuxer
--

COPY public.cotizacion (id, numero, "clientName", nit, items, "createdAt", "updatedAt", "deletedAt", subtotal, descuento, total) FROM stdin;
\.


--
-- Data for Name: factura; Type: TABLE DATA; Schema: public; Owner: linuxer
--

COPY public.factura (id, numero, "clientName", nit, items, xml, "createdAt", "updatedAt", "deletedAt", subtotal, descuento, total, cuf, json, estado, pdf, cufd, "tipoEmision", "fechaFactura") FROM stdin;
\.


--
-- Data for Name: file; Type: TABLE DATA; Schema: public; Owner: linuxer
--

COPY public.file (id, path) FROM stdin;
4d1dcadf-321f-4007-9492-e24d76753796	/api/v1/files\\35237ffe-58be-483f-8cb3-bdaef8c0db0d.jpg
e43c4e4f-28ff-465d-9642-1c439c5fe822	/api/v1/files/17ad120b-fac9-4d47-ba57-0bbba86d5451.jpg
8c46dc80-7c98-4cbf-9ee8-8d8c376fbe05	/api/v1/files/a83c4e05-2deb-464c-ba80-dd76a5d13557.jpg
43265a89-df94-4ac4-ab6e-e126d5c92b79	/api/v1/files/42e671e3-664c-40a2-8389-9ac2b75ece4a.jpg
45463ae8-81d2-439e-86ee-cb28c0a01a02	/api/v1/files/invoices/hojas-de-rayas-para-imprimir.pdf
493f8477-c212-43df-b2d5-9692ef4fee84	/api/v1/files/invoices/ic_launcher_round.xml
8f7edc6a-5fa8-4a98-8d91-6de9660a1b5a	/api/v1/files/invoices/hojas-de-rayas-para-imprimir.pdf
be770d7b-b794-494a-9a00-6afed4f66f0d	/api/v1/files/invoices/ic_launcher_round.xml
a0b69223-da51-4a94-956b-c8e8c64262ef	/api/v1/files/invoices/hojas-de-rayas-para-imprimir.pdf
129aaa16-8762-4d0c-ad13-e9272f619510	/api/v1/files/invoices/ic_launcher_round.xml
38982d2c-5559-4367-bb08-058d2fd65805	/api/v1/files/invoices/pruebas finalizadas.pdf
34feea8e-7810-4e74-be32-eec74bb74a6c	/api/v1/files/invoices/ic_launcher_round.xml
44a0f13b-c1da-459a-a6d3-029c67ecec0b	/api/v1/files/invoices/factura_1_11BBF1BD45967D6BD3DE03C13FFF5F349A6888606AE6F4046E387E6D74.pdf
f826a7e8-86c9-4a90-bf76-80e9bd665131	/api/v1/files/invoices/factura_1_11BBF1BD45967D6BD3DE03C13FFF5F349A6888606AE6F4046E387E6D74.pdf
765c007a-ef34-4af5-9f0d-508bb514aecd	/api/v1/files/invoices/factura_2_11BBF1BD45967D6BD438C1501C1902E5E26D5878D526F4046E387E6D74.xml
59aa40e2-7e60-4fff-b794-c3c00a9f00ec	/api/v1/files/invoices/factura_2_11BBF1BD45967D6BD438C1501C1902E5E26D5878D526F4046E387E6D74.pdf
f092fa06-36f7-435f-a7e5-eb980b7c947e	/api/v1/files/invoices/factura_3_11BBF1BD45967D6BD747BF2ECAC30E42A20F88913EB6F4046E387E6D74.xml
65835833-1a8c-4b40-b752-a9c0102a7818	/api/v1/files/invoices/factura_3_11BBF1BD45967D6BD747BF2ECAC30E42A20F88913EB6F4046E387E6D74.pdf
3f5d8d33-8870-4a5b-b7ec-d7d2bddcc895	/api/v1/files/invoices/factura_4_11BBF1BD45967D6BD7BF0A47041DA95AB67708A9A916F4046E387E6D74.xml
37935400-d500-4b26-b700-0e12b93edebd	/api/v1/files/invoices/factura_5_11BBF1BD45967D6BD7C0BEAAB88C058B2A9098C212C6F4046E387E6D74.xml
b02cf2dd-4395-4073-bbfa-a363c8b24008	/api/v1/files/invoices/factura_5_11BBF1BD45967D6BD7C0BEAAB88C058B2A9098C212C6F4046E387E6D74.pdf
8960a878-4391-48e7-8b64-98e8187bcbc7	/api/v1/files/invoices/factura_6_11BBF1BD45967D6BDC1283A3FFF83718A015A8DA7CB6F4046E387E6D74.xml
1a8d9774-37c7-4de4-9eb3-4ce25ab350c3	/api/v1/files/invoices/factura_6_11BBF1BD45967D6BDC1283A3FFF83718A015A8DA7CB6F4046E387E6D74.pdf
a5576a82-f893-4868-ab30-912fda8cc365	/api/v1/files/invoices/factura_7_11BBF1BD45967D6BDC438E7C0C67BF3FCDEB88F2E706F4046E387E6D74.xml
db4ddcb5-5805-4ab6-92b4-6f66df236a54	/api/v1/files/invoices/factura_7_11BBF1BD45967D6BDC438E7C0C67BF3FCDEB88F2E706F4046E387E6D74.pdf
4afa513b-8362-41bf-bd6a-05e2bedec9ae	/api/v1/files/invoices/factura_8_11BBF1BD45967D6BDC7936CD089D87248C17B90B5136F4046E387E6D74.xml
dd5cf319-65cc-4eb7-9fdb-a6b7452c7ce3	/api/v1/files/invoices/factura_8_11BBF1BD45967D6BDC7936CD089D87248C17B90B5136F4046E387E6D74.pdf
0e43f41d-0b49-4f8f-8ff9-15f5dda2e06b	/api/v1/files/invoices/factura_9_11BBF1BD45967D6BDCA15174DC11B168FCF75923BB06F4046E387E6D74.xml
f441b4a3-9d6d-4840-8015-208e9e973046	/api/v1/files/invoices/factura_9_11BBF1BD45967D6BDCA15174DC11B168FCF75923BB06F4046E387E6D74.pdf
04472607-81fc-4316-b823-f6a43662f697	/api/v1/files/invoices/factura_10_11BBF1BD45967D6BDCDFF00FC8CFEC57D09D293C2536F4046E387E6D74.xml
92aaccfd-f65b-45b1-90cd-bfcba408e7d2	/api/v1/files/invoices/factura_10_11BBF1BD45967D6BDCDFF00FC8CFEC57D09D293C2536F4046E387E6D74.pdf
35314a27-4228-483d-9c7f-5de6e03dab65	/api/v1/files/invoices/factura_11_11BBF1BD45967D6BDD22B725171755ABAAF5D9548EB6F4046E387E6D74.xml
43002bfd-feb3-46c4-a497-a80d90946dd5	/api/v1/files/invoices/factura_11_11BBF1BD45967D6BDD22B725171755ABAAF5D9548EB6F4046E387E6D74.pdf
114890d8-b290-4954-8a1c-61403d6a4a15	/api/v1/files/invoices/factura_12_11BBF1BD45967D6ED404ABC87A68EC82F1BCE96CF926F4046E387E6D74.xml
224aa070-2656-4fef-9f31-cf6905cac6c7	/api/v1/files/invoices/factura_12_11BBF1BD45967D6ED404ABC87A68EC82F1BCE96CF926F4046E387E6D74.pdf
5b5b0f73-003f-41ce-9970-eec0239259ae	/api/v1/files/invoices/factura_13_11BBF1BD45967D6ED4B0FAD7F9043ED3166BE98562B6F4046E387E6D74.xml
ed8716a5-7614-455c-8ca1-3f2bf760b486	/api/v1/files/invoices/factura_13_11BBF1BD45967D6ED4B0FAD7F9043ED3166BE98562B6F4046E387E6D74.pdf
4db7244d-36c3-4660-ac25-e0c9365c3c93	/api/v1/files/invoices/factura_14_11BBF1BD45967D6ED4DA00C7C83DFEE8CDDDF99DCD16F4046E387E6D74.xml
06faa067-8144-4a53-9d1f-a03c8a55295f	/api/v1/files/invoices/factura_14_11BBF1BD45967D6ED4DA00C7C83DFEE8CDDDF99DCD16F4046E387E6D74.pdf
04ec4fca-0ea9-4590-b420-62b025450477	/api/v1/files/invoices/factura_15_11BBF1BD45967D6ED557A8704515D7759442BFF63726F4046E387E6D74.xml
b834bcf7-f069-4cd6-a2c6-670bd5326a8f	/api/v1/files/invoices/factura_15_11BBF1BD45967D6ED557A8704515D7759442BFF63726F4046E387E6D74.pdf
1bb160f0-9fdf-4275-a55a-67e24b33f41c	/api/v1/files/invoices/factura_16_11BBF1BD45967D6EDB98703DCA957F8DB1C6500EA0B6F4046E387E6D74.xml
eb6d0f7f-18e0-447b-ac61-46c28bee1b33	/api/v1/files/invoices/factura_16_11BBF1BD45967D6EDB98703DCA957F8DB1C6500EA0B6F4046E387E6D74.pdf
5334e302-cdc6-4390-8362-2157366bb893	/api/v1/files/invoices/factura_17_11BBF1BD45967D6EDBBE5C15B187BF284D7860270B26F4046E387E6D74.xml
b55906fa-74f2-4ec1-85b6-827af676b3b5	/api/v1/files/invoices/factura_17_11BBF1BD45967D6EDBBE5C15B187BF284D7860270B26F4046E387E6D74.pdf
2133eb7a-c492-401b-af93-1036de8207d1	/api/v1/files/invoices/factura_18_11BBF1BD45967D6EE11ACC886E5F8EAD46E1C03F7506F4046E387E6D74.xml
83c16eb3-1810-4a63-b755-b3040944deea	/api/v1/files/invoices/factura_18_11BBF1BD45967D6EE11ACC886E5F8EAD46E1C03F7506F4046E387E6D74.pdf
99a7c45e-bf8c-4d18-be14-8ef6c7834d09	/api/v1/files/invoices/factura_19_11BBF1BD45967D6EE12AD80DA9247956DDC57057DF16F4046E387E6D74.xml
986019d1-b7d3-466b-9325-cdc4ccf19786	/api/v1/files/invoices/factura_19_11BBF1BD45967D6EE129B778817F05D086FC9057DEB6F4046E387E6D74.xml
3e8f768d-d948-4271-8353-3f6a768428bb	/api/v1/files/invoices/factura_19_11BBF1BD45967D6EE129B778817F05D086FC9057DEB6F4046E387E6D74.pdf
e5625375-923b-4202-be94-1aba011fef3d	/api/v1/files/invoices/factura_20_11BBF1BD45967D6EE13D487682453E3F78D4107048A6F4046E387E6D74.xml
35f1e5ad-4f46-45e8-b33f-ab455a9216aa	/api/v1/files/invoices/factura_20_11BBF1BD45967D6EE13D487682453E3F78D4107048A6F4046E387E6D74.pdf
77990240-21bf-4560-8a60-6d04bf76e619	/api/v1/files/invoices/factura_21_11BBF1BD45967D6EE317A51744EA864B305D7A48B2D8C88665FB7E6D74.xml
29e58c17-73b4-4e64-a4fb-edbaa3aa5eac	/api/v1/files/invoices/factura_21_11BBF1BD45967D6EE317A51744EA864B305D7A48B2D8C88665FB7E6D74.pdf
7e878911-946d-45d9-bc20-13cee87979a9	/api/v1/files/invoices/factura_22_11BBF1BD45967D6EE322F71E407B33D9453CFA611D08C88665FB7E6D74.xml
1c14cc57-32f2-4e47-87d8-94eb19187421	/api/v1/files/invoices/factura_22_11BBF1BD45967D6EE322F71E407B33D9453CFA611D08C88665FB7E6D74.pdf
7afc13b0-0502-4d27-9451-7d9a4344ffc5	/api/v1/files/invoices/factura_23_11BBF1BD45967D6EE34E1D079264111CEB64AA798718C88665FB7E6D74.xml
ca62b263-9dea-42f7-846b-371644dc928e	/api/v1/files/invoices/factura_24_11BBF1BD45967D6EE35ECDAD0A181E534EF3FA91F0B8C88665FB7E6D74.xml
8668912a-5ef9-464a-aee3-5dfed8a11ee8	/api/v1/files/invoices/factura_24_11BBF1BD45967D6EE35ECDAD0A181E534EF3FA91F0B8C88665FB7E6D74.pdf
fcccb476-4998-4691-af32-bc8cf8bbc726	/api/v1/files/invoices/factura_25_11BBF1BD45967D6EE363067DA5468107AAD29AAA5AE8C88665FB7E6D74.xml
a5ed4103-1cff-4032-8313-f2ad658e5aa5	/api/v1/files/invoices/factura_25_11BBF1BD45967D6EE363067DA5468107AAD29AAA5AE8C88665FB7E6D74.pdf
810af0f0-482d-4a51-8ca6-3fe9f7c229d9	/api/v1/files/invoices/factura_26_11BBF1BD45967D6EE373536902C1F9DB653F5AC2C4C8C88665FB7E6D74.xml
5e51cd9a-f31b-4120-93ad-0407e7bfbd11	/api/v1/files/invoices/factura_26_11BBF1BD45967D6EE373536902C1F9DB653F5AC2C4C8C88665FB7E6D74.pdf
1a1aeebc-20b9-4d3c-a015-45fcd4c010d3	/api/v1/files/invoices/factura_27_11BBF1BD45967D6EE3B666067D9496A7C2155ADB2F18C88665FB7E6D74.xml
c88a0ae4-e009-4535-b348-2dd67fb27583	/api/v1/files/invoices/factura_27_11BBF1BD45967D6EE3B666067D9496A7C2155ADB2F18C88665FB7E6D74.pdf
e3a756c9-398c-4f5b-8198-fc78d7c9bb45	/api/v1/files/invoices/factura_28_11BBF1BD45967D6EE3E1755829E5F3AE4DFFBAF398E8C88665FB7E6D74.xml
c60221ea-f78b-43bd-80d7-7356fb046e85	/api/v1/files/invoices/factura_28_11BBF1BD45967D6EE3E1755829E5F3AE4DFFBAF398E8C88665FB7E6D74.pdf
de30ae7f-814f-4cc2-95d3-ea2146b2cbb0	/api/v1/files/invoices/factura_29_11BBF1BD45967D6EE401615F31C9C76137131B0C02E8C88665FB7E6D74.xml
1ab62607-0fc3-43af-9ea2-c6965e814edd	/api/v1/files/invoices/factura_29_11BBF1BD45967D6EE401615F31C9C76137131B0C02E8C88665FB7E6D74.pdf
3c9d9a59-3282-4bc9-8c53-3527a2367305	/api/v1/files/invoices/factura_30_11BBF1BD45967D6EE41356954CDCEBF05246CB246CE8C88665FB7E6D74.xml
8ce017f0-3b24-4bad-bbb1-e5459db9a88f	/api/v1/files/invoices/factura_30_11BBF1BD45967D6EE41356954CDCEBF05246CB246CE8C88665FB7E6D74.pdf
4256a27e-7ad0-4003-a215-c6c38914e4d3	/api/v1/files/invoices/factura_31_11BBF1BD45967D719FBF374A22766C455D03FB3CD6D8C88665FB7E6D74.xml
2b5ddd3b-6640-4470-88a6-6102cbfce575	/api/v1/files/invoices/factura_32_11BBF1BD45967D719FC12E4460A34FE68A3E0B554108C88665FB7E6D74.xml
cee58896-3156-4faa-987a-bf84ec9b0622	/api/v1/files/invoices/factura_33_11BBF1BD45967D719FCD24137DB5EFF469A38B6DAB28C88665FB7E6D74.xml
9f2cc5d7-2bc3-42d3-8eef-1898df589fa8	/api/v1/files/invoices/factura_34_11BBF1BD45967D719FCED9CF4D917C31DFE2BB8614B8C88665FB7E6D74.xml
895f3367-19a1-4c5d-9fc4-3e8a61004bf7	/api/v1/files/invoices/factura_35_11BBF1BD45967D719FD38EF5D1B3BB998259AB9E7ED8C88665FB7E6D74.xml
aa7c8d6c-d8f0-4036-be21-7e8d2b6b51c3	/api/v1/files/invoices/factura_36_11BBF1BD45967D719FE5FA5AE20BEAC7BCC83BB6E938C88665FB7E6D74.xml
8e169a86-3cb0-4b74-b01e-8782ee300f7b	/api/v1/files/invoices/factura_37_11BBF1BD45967D719FF55626B8DD6942E2617BCF5306D056354F7E6D74.xml
613f8236-00d6-4ef8-bfda-ffe399b2cf5f	/api/v1/files/invoices/factura_38_11BBF1BD45967D719FF9B3AC199DC4BCEF087BE7BCB6D056354F7E6D74.xml
1b8f989d-8e8c-43f2-b887-7d49504128fa	/api/v1/files/invoices/factura_39_11BBF1BD45967D719FFC198B2E7AA48F4D629C0026D6D056354F7E6D74.xml
fdb9250d-e8a0-4d34-a521-c2cb93a2acb1	/api/v1/files/invoices/factura_40_11BBF1BD45967D71A00BFB3D62A186DF3529BC189106D056354F7E6D74.xml
ce7a9706-b816-4e3d-8550-7a747b8f7b08	/api/v1/files/invoices/factura_41_11BBF1BD45967D71A00D7E0CD4AD27F4C6615C30FAB6D056354F7E6D74.xml
0e286b33-9213-434f-bc17-64c63bcd0a5c	/api/v1/files/invoices/factura_42_11BBF1BD45967D71A08BADEF40C7BBEB400E5C4964A6D056354F7E6D74.xml
6c3a9572-903f-4b3a-a1f5-d4a24a5b0f61	/api/v1/files/invoices/factura_42_11BBF1BD45967D71A08BADEF40C7BBEB400E5C4964A6D056354F7E6D74.pdf
6c138feb-bbc9-4fa6-bf04-9c7bbd8f5c04	/api/v1/files/invoices/factura_43_11BBF1BD45967D71A09DE4146161CA5139208C61CF06D056354F7E6D74.xml
b3553813-cd56-43d0-bef7-efdc0f8fea9b	/api/v1/files/invoices/factura_44_11BBF1BD45967D71A0A8CCE65CC1A96EFE92DC7A38D6D056354F7E6D74.xml
6253b81a-e8e0-4109-896e-222e8fa9af42	/api/v1/files/invoices/factura_45_11BBF1BD45967D71A0AC28B3D08A25A116F84C92A2B6D056354F7E6D74.xml
8aceccec-1c9c-4493-99fc-e07b0b2fbf17	/api/v1/files/invoices/factura_46_11BBF1BD45967D71A0ADD04544497C6927D25CAB0CC6D056354F7E6D74.xml
cad1425a-76cc-4c48-862b-5ae466fc676b	/api/v1/files/invoices/factura_47_11BBF1BD45967D71A0B01A2C45DA1BCA6358ACC376A6D056354F7E6D74.xml
a5e68225-829e-4876-8fd5-ef8d0abf792a	/api/v1/files/invoices/factura_47_11BBF1BD45967D71A0B01A2C45DA1BCA6358ACC376A6D056354F7E6D74.pdf
50d0d807-8a15-45e8-9f2e-0cdaacb1c096	/api/v1/files/invoices/factura_48_11BBF1BD45967D71A0C2AACA75168309CE4EB31BE0F6D056354F7E6D74.xml
3641cfd5-3b81-4607-8341-ccb8d8fb6539	/api/v1/files/invoices/factura_48_11BBF1BD45967D71A0C2AACA75168309CE4EB31BE0F6D056354F7E6D74.pdf
96ba7d6d-1352-4bad-ac2f-b2c9d70f001f	/api/v1/files/invoices/factura_49_11BBF1BD45967D71A16039C599D329108B08B3344AD4FAFE364F7E6D74.xml
bc168810-aae0-4c0b-baf0-22e34961a3f9	/api/v1/files/invoices/factura_49_11BBF1BD45967D71A16039C599D329108B08B3344AD4FAFE364F7E6D74.pdf
65545a5a-7d01-4b7d-963c-4781e1c6bdf5	/api/v1/files/invoices/factura_50_11BBF1BD45967D71A1B17CA3F7E15CB66A19D34CB4E4766FF64F7E6D74.xml
5666b0bf-0151-4dfd-ab75-0d850ddca769	/api/v1/files/invoices/factura_50_11BBF1BD45967D71A1B17CA3F7E15CB66A19D34CB4E4766FF64F7E6D74.pdf
6d582301-b77d-4cbb-9898-d96a5151eff7	/api/v1/files/invoices/factura_51_11BBF1BD45967D71A1F29078BCA0A633971653651EF82A8F574F7E6D74.xml
e6fdf0cd-0f94-4e94-80fe-3cb51e10c57e	/api/v1/files/invoices/factura_51_11BBF1BD45967D71A1F29078BCA0A633971653651EF82A8F574F7E6D74.pdf
7c03d62d-fd0e-4913-8832-cd9fcf10af0d	/api/v1/files/invoices/factura_52_11BBF1BD45967D71A21B6143145FBF5AAAE0237D8915FA6EA74F7E6D74.xml
8dfac97a-2a98-4ee8-b843-a0e2049a1076	/api/v1/files/invoices/factura_52_11BBF1BD45967D71A21B6143145FBF5AAAE0237D8915FA6EA74F7E6D74.pdf
88b3de9c-7220-4341-a9db-a1ea29088369	/api/v1/files/invoices/factura_6_11BBF1BD45967D71A06C081D33DCF6750AF64F1A7CC8C88665FB7E6D74.xml
b535d667-6325-4df7-a05f-668dc4acf06d	/api/v1/files/invoices/factura_6_11BBF1BD45967D71A06C081D33DCF6750AF64F1A7CC8C88665FB7E6D74.pdf
891e7669-e973-4417-8d4e-df46a5f801f9	/api/v1/files/invoices/factura_5_11BBF1BD45967D71A06C081D33DCF6750AF64F021318C88665FB7E6D74.xml
0d7c2f3f-d1b5-449c-98a3-f1d546e9bcc5	/api/v1/files/invoices/factura_5_11BBF1BD45967D71A06C081D33DCF6750AF64F021318C88665FB7E6D74.pdf
6a28848e-81ad-492d-9a36-6b3a45d28011	/api/v1/files/invoices/factura_6_11BBF1BD45967D71A2CD0E1D4D01C47AC56378DA7CB8C88665FB7E6D74.xml
9bfc88c5-69b4-4a1b-881a-d5a77e3cf714	/api/v1/files/invoices/factura_7_11BBF1BD45967D71A2CEEF53A7B2F6ABC60138F2E728C88665FB7E6D74.xml
dde71bd6-9b70-463c-ac00-992e4f784b83	/api/v1/files/invoices/factura_8_11BBF1BD45967D71A2DEA91C861C1EDBE430190B5123D0CBB84F7E6D74.xml
4fc15b28-6678-421e-beb9-cafebb2a2d7a	/api/v1/files/invoices/factura_8_11BBF1BD45967D71A2DEA91C861C1EDBE430190B5123D0CBB84F7E6D74.pdf
5d293dfe-351e-413c-8a28-5d829f19d9e8	/api/v1/files/invoices/factura_1_11BBF1BD45967D71A2E9AB016D66EA9D8CC2B8606B03D0CBB84F7E6D74.xml
a01332d0-9c0e-4507-b28f-49f3d451c04c	/api/v1/files/invoices/factura_1_11BBF1BD45967D71A2E9AB016D66EA9D8CC2B8606B03D0CBB84F7E6D74.pdf
bb661918-d762-49cb-b9c1-b023b7c4d0a3	/api/v1/files/invoices/factura_2_11BBF1BD45967D71A31ECCE7B2F5ED6D743C6878D4D3D0CBB84F7E6D74.xml
950b7516-a4fe-4418-a4ed-a4d948777798	/api/v1/files/invoices/factura_3_11BBF1BD45967D71A32F216C97D0E23BF5E058913F33D0CBB84F7E6D74.xml
59122558-5d6e-4e54-869d-83de429febc2	/api/v1/files/invoices/factura_4_11BBF1BD45967D71A358D2BE0FEC10CC3F0F98A9A923D0CBB84F7E6D74.xml
1458e928-9e11-4c6e-afe1-ec74a502bfec	/api/v1/files/invoices/factura_4_11BBF1BD45967D71A358D2BE0FEC10CC3F0F98A9A923D0CBB84F7E6D74.pdf
58392cf3-5484-422c-8e25-a8f30bd45e15	/api/v1/files/invoices/factura_5_11BBF1BD45967D71A36146A59C154EE8844798C212B3D0CBB84F7E6D74.xml
d7757cbd-27bc-4fbe-89a3-b23fb47c7da5	/api/v1/files/invoices/factura_6_11BBF1BD45967D71A37236E1FDE315E8C38FC8DA7D33D0CBB84F7E6D74.xml
ec0b7fab-07f9-4c89-93bb-b6b10acf5a5a	/api/v1/files/invoices/factura_6_11BBF1BD45967D71A37236E1FDE315E8C38FC8DA7D33D0CBB84F7E6D74.pdf
996c17c1-df10-424e-a02e-c9a9f255be09	/api/v1/files/invoices/factura_7_11BBF1BD45967D71A38A3A5580C98C75010998F2E703D0CBB84F7E6D74.xml
2cb8893f-3c88-449c-9374-b7331e1131c2	/api/v1/files/invoices/factura_7_11BBF1BD45967D71A38A3A5580C98C75010998F2E703D0CBB84F7E6D74.pdf
9a382849-6ada-4aa6-bd91-e132487ce3e5	/api/v1/files/invoices/factura_8_11BBF1BD45967D71A8825C900F79A319E175E90B50E3D0CBB84F7E6D74.xml
5860bb79-08bc-4adf-bafc-b25259b7c3de	/api/v1/files/invoices/factura_8_11BBF1BD45967D71A8825C900F79A319E175E90B50E3D0CBB84F7E6D74.pdf
c8cd69e6-5bcf-4399-bdc3-de5d8fa4035e	/api/v1/files/invoices/factura_9_11BBF1BD45967D71A8DD02DB38452E878E2A9923BAD3D0CBB84F7E6D74.xml
87a6b519-31b3-46c9-ba5c-6673acb47882	/api/v1/files/invoices/factura_9_11BBF1BD45967D71A8DD02DB38452E878E2A9923BAD3D0CBB84F7E6D74.pdf
abdfead7-54bb-4b7f-808e-01b882be03b7	/api/v1/files/invoices/factura_10_11BBF1BD45967D71A91A1AFB059C62B3721E593C24C3D0CBB84F7E6D74.xml
30807370-0def-4791-9ac9-2ae2d23169ec	/api/v1/files/invoices/factura_10_11BBF1BD45967D71A91A1AFB059C62B3721E593C24C3D0CBB84F7E6D74.pdf
4b63009d-63f4-4d14-ac13-9ec9b9634323	/api/v1/files/invoices/factura_11_11BBF1BD45967D71A99958F0822E3706FDA1D9548F257208E05F7E6D74.xml
1dc22c23-1147-407d-bd29-cfb749ba7394	/api/v1/files/invoices/factura_11_11BBF1BD45967D71A99958F0822E3706FDA1D9548F257208E05F7E6D74.pdf
779705c1-5382-40cf-8120-945363d759f8	/api/v1/files/invoices/factura_12_11BBF1BD45967D71AAC44C69DDF18A52DFF6B96CF9057208E05F7E6D74.xml
696bd081-1b4e-48f6-804a-e9245d1098d7	/api/v1/files/invoices/factura_12_11BBF1BD45967D71AAC44C69DDF18A52DFF6B96CF9057208E05F7E6D74.pdf
40804b06-ee67-4900-b7e8-68ae28db18cc	/api/v1/files/invoices/factura_13_11BBF1BD45967D71AB18838833CF09546342198563091B75A25F7E6D74.xml
6818de8c-ca07-41be-8cec-955d07d85cfd	/api/v1/files/invoices/factura_13_11BBF1BD45967D71AB18838833CF09546342198563091B75A25F7E6D74.pdf
29808a3c-d20e-42f5-8c32-d8a41440271e	/api/v1/files/invoices/factura_14_11BBF1BD45967D71B1C8B3A4BC6E96F868FA999DCCD3D0CBB84F7E6D74.xml
e614e5ac-05f1-44e4-8542-8e002fdc21d7	/api/v1/files/invoices/factura_15_11BBF1BD45967D71B1CD40D4AEB15F5372FF39B636E3D0CBB84F7E6D74.xml
768dae9f-7fbc-4ae4-8ca6-cc2262011596	/api/v1/files/invoices/factura_16_11BBF1BD45967D71B1DD553E502139180465A9CEA120C479DA5F7E6D74.xml
6245833d-c15f-4af2-b813-b9ef90e32f3f	/api/v1/files/invoices/factura_16_11BBF1BD45967D71B1DD553E502139180465A9CEA120C479DA5F7E6D74.pdf
0001a3c8-5afb-4918-b7a5-0ede1fec3159	/api/v1/files/invoices/factura_17_11BBF1BD45967D71B22E0352AAE57E806BF6E9E70AA57208E05F7E6D74.xml
b1be4bb5-8fd2-4d2c-af46-ba0f1daa1785	/api/v1/files/invoices/factura_18_11BBF1BD45967D71B231F7BD83B88563C6E4D9FF74A0C479DA5F7E6D74.xml
9e3d7967-1ba3-4ff3-8734-4aac31d43d85	/api/v1/files/invoices/factura_18_11BBF1BD45967D71B231F7BD83B88563C6E4D9FF74A0C479DA5F7E6D74.pdf
003fbe80-87f8-4957-9847-ea380ff9cec1	/api/v1/files/invoices/factura_19_11BBF1BD45967D71B2459EDC0CE699BC8D4F1A17DF00C479DA5F7E6D74.xml
293dc0d3-4d10-4058-81db-9b16e80419df	/api/v1/files/invoices/factura_19_11BBF1BD45967D71B2459EDC0CE699BC8D4F1A17DF00C479DA5F7E6D74.pdf
96c5e1f7-e5b5-4cd3-915a-009ff57d5c06	/api/v1/files/invoices/factura_20_11BBF1BD45967D71B2D940962F8C6DD9517AEA3048D57208E05F7E6D74.xml
ae3dc964-a461-469a-9202-97cc1c56ea2b	/api/v1/files/invoices/factura_21_11BBF1BD45967D71B2E42D069C25F5B7A68D9A48B2D0C479DA5F7E6D74.xml
4bdebfb3-20c4-44aa-95c3-4092fa82eca2	/api/v1/files/invoices/factura_22_11BBF1BD45967D71B2E5760972DA849DDB735A611CD57208E05F7E6D74.xml
ae6fc6d0-b740-4c51-bf54-1011b142722c	/api/v1/files/invoices/factura_23_11BBF1BD45967D71B2E61886B51103FD72ADCA7986C57208E05F7E6D74.xml
8cb185f8-4ff1-4187-b55f-75e67190970e	/api/v1/files/invoices/factura_24_11BBF1BD45967D71B2E673277817B591E5E55A91F0E57208E05F7E6D74.xml
ff0420a9-d9ff-48e8-b3d4-781889c97c5b	/api/v1/files/invoices/factura_25_11BBF1BD45967D71B2E75CAD776233EFB381AAAA5B257208E05F7E6D74.xml
8e532064-16cf-48bc-8e7c-f2ea1ebcb83d	/api/v1/files/invoices/factura_26_11BBF1BD45967D71B2F6C9FFEEE0E000C3DE1AC2C4C063CE2C5F7E6D74.xml
0fee9f2a-e310-452a-b025-9fdfbb62adae	/api/v1/files/invoices/factura_26_11BBF1BD45967D71B2F6C9FFEEE0E000C3DE1AC2C4C063CE2C5F7E6D74.pdf
4808baed-cf9c-4b6c-8676-5556152ba9d6	/api/v1/files/invoices/factura_27_11BBF1BD45967D71B81687A740AFF0698EDE3ADB2F0063CE2C5F7E6D74.xml
6f973666-3f35-441a-a7ac-f97b8ae09f32	/api/v1/files/invoices/factura_27_11BBF1BD45967D71B81687A740AFF0698EDE3ADB2F0063CE2C5F7E6D74.pdf
ea16e1ae-1f67-4a7c-b6fa-adf08ab9a2aa	/api/v1/files/invoices/factura_28_11BBF1BD45967D71B81E3D761C42992EC1FE6AF3992063CE2C5F7E6D74.xml
a58f6ba5-a9f0-4ffc-8f3e-1b87abe15f52	/api/v1/files/invoices/factura_28_11BBF1BD45967D71B81E3D761C42992EC1FE6AF3992063CE2C5F7E6D74.pdf
1b8cad04-366f-48ff-8345-927871d263ae	/api/v1/files/invoices/factura_29_11BBF1BD45967D71B89B6B5E6EBC9D3D3D278B0C02E063CE2C5F7E6D74.xml
7f6ad584-2448-44e3-aad7-850c4f45f870	/api/v1/files/invoices/factura_29_11BBF1BD45967D71B89B6B5E6EBC9D3D3D278B0C02E063CE2C5F7E6D74.pdf
a13d987f-307b-4241-b4ff-15b19ae2d8a0	/api/v1/files/invoices/factura_30_11BBF1BD45967D71B8BF7EE461A899C1D2BE9B246CC063CE2C5F7E6D74.xml
a89c943c-c042-49c4-9aa7-60a1504f7a03	/api/v1/files/invoices/factura_30_11BBF1BD45967D71B8BF7EE461A899C1D2BE9B246CC063CE2C5F7E6D74.pdf
ea4031e1-29b1-4734-bac3-09102a85fc3d	/api/v1/files/invoices/factura_31_11BBF1BD45967D71B8D3C75D0226F12069A5EB3CD6D063CE2C5F7E6D74.xml
ec2562a7-33a5-47b3-9e8a-44a56455cd95	/api/v1/files/invoices/factura_31_11BBF1BD45967D71B8D3C75D0226F12069A5EB3CD6D063CE2C5F7E6D74.pdf
f3c07394-0a3a-4605-985b-7896da2675fe	/api/v1/files/invoices/factura_32_11BBF1BD45967D71B8E146B41A672284E4FF2B5540A063CE2C5F7E6D74.xml
3a97123a-f2f4-4d76-a89f-59bfa9f9f3a9	/api/v1/files/invoices/factura_32_11BBF1BD45967D71B8E146B41A672284E4FF2B5540A063CE2C5F7E6D74.pdf
4e08c6c0-be22-4444-bfbc-c30467fe6d5f	/api/v1/files/invoices/factura_33_11BBF1BD45967D71B8E651FBF218DF06AE923B6DAAF063CE2C5F7E6D74.xml
f82264bd-7ff8-4fdb-ae20-23b1bf1df505	/api/v1/files/invoices/factura_33_11BBF1BD45967D71B8E651FBF218DF06AE923B6DAAF063CE2C5F7E6D74.pdf
68f81270-9035-4c8e-951f-db14cf03d771	/api/v1/files/invoices/factura_34_11BBF1BD45967D71B90A6920563E844BD3C9AB8614E063CE2C5F7E6D74.xml
fae2f5c1-45a1-4ff5-8b53-85e46e2afc4a	/api/v1/files/invoices/factura_34_11BBF1BD45967D71B90A6920563E844BD3C9AB8614E063CE2C5F7E6D74.pdf
f00979f1-0753-4c78-8c21-f6ae850d7851	/api/v1/files/invoices/factura_35_11BBF1BD45967D71B936C298042AAC925B572B9E7EE063CE2C5F7E6D74.xml
24df99a3-9fb1-41a1-bb28-5a56ef21e405	/api/v1/files/invoices/factura_35_11BBF1BD45967D71B936C298042AAC925B572B9E7EE063CE2C5F7E6D74.pdf
945fdca7-01e7-4386-99fd-7be32ab4e463	/api/v1/files/invoices/factura_36_11BBF1BD45967D71B949F2A699D62A92460B7BB6E8D063CE2C5F7E6D74.xml
9d5bd59e-c9f8-47d8-8c75-730675d2f3b5	/api/v1/files/invoices/factura_36_11BBF1BD45967D71B949F2A699D62A92460B7BB6E8D063CE2C5F7E6D74.pdf
623697a5-994c-4eb6-8d42-02d6e85e5a92	/api/v1/files/invoices/factura_37_11BBF1BD45967D71B95DF5CB3D99DD7950ACFBCF52A063CE2C5F7E6D74.xml
2a4ab5f6-d42e-4226-90e1-b0a6247fd14d	/api/v1/files/invoices/factura_37_11BBF1BD45967D71B95DF5CB3D99DD7950ACFBCF52A063CE2C5F7E6D74.pdf
3022f9ce-9c7c-4420-a9c8-61ce16b47917	/api/v1/files/invoices/factura_38_11BBF1BD45967D71B98A7D6DAD360BCD66E44BE7BCE063CE2C5F7E6D74.xml
e865dfc2-8979-4457-8521-d0356ba1ff8f	/api/v1/files/invoices/factura_38_11BBF1BD45967D71B98A7D6DAD360BCD66E44BE7BCE063CE2C5F7E6D74.pdf
7d7a1790-8b27-49dd-89bc-d905a2b1c370	/api/v1/files/invoices/factura_39_11BBF1BD45967D71B9B33151B7499BDCCC852C0026D063CE2C5F7E6D74.xml
c2b2edbe-ccee-4330-b869-7e0b2a307b5c	/api/v1/files/invoices/factura_39_11BBF1BD45967D71B9B33151B7499BDCCC852C0026D063CE2C5F7E6D74.pdf
e92ad993-e3d8-461a-9c31-ef0269fe6f7f	/api/v1/files/invoices/factura_40_11BBF1BD45967D71B9C9A37C033DCE513A45DC1890B063CE2C5F7E6D74.xml
1dc6c75a-4e08-42fa-8ddf-c573f10862b2	/api/v1/files/invoices/factura_40_11BBF1BD45967D71B9C9A37C033DCE513A45DC1890B063CE2C5F7E6D74.pdf
955d66c7-e837-4ced-a6a6-ea080c8c1b3a	/api/v1/files/invoices/factura_41_11BBF1BD45967D71B9EF474FB69B095A4566DC30FAF063CE2C5F7E6D74.xml
6e4095c0-7e46-4b1a-8d9f-d5237f129aa3	/api/v1/files/invoices/factura_41_11BBF1BD45967D71B9EF474FB69B095A4566DC30FAF063CE2C5F7E6D74.pdf
d73fdf6c-80e5-4127-b029-9511d9c04541	/api/v1/files/invoices/factura_42_11BBF1BD45967D71BA115B117CF2ACFC50F53C4964B063CE2C5F7E6D74.xml
4d2e75bb-8877-470a-a21b-e6d1f9113e56	/api/v1/files/invoices/factura_42_11BBF1BD45967D71BA115B117CF2ACFC50F53C4964B063CE2C5F7E6D74.pdf
bf0737cc-4267-4084-a32a-425d2a5a25cb	/api/v1/files/invoices/factura_43_11BBF1BD45967D71BA271141B9B78C06CD8AAC61CEE063CE2C5F7E6D74.xml
423eed21-3136-4739-91a8-4d84155db543	/api/v1/files/invoices/factura_43_11BBF1BD45967D71BA271141B9B78C06CD8AAC61CEE063CE2C5F7E6D74.pdf
f3b9152a-82bb-4ed0-9180-dc490418a463	/api/v1/files/invoices/factura_44_11BBF1BD45967D71BA37DDAA5430E5FB18858C7A38D063CE2C5F7E6D74.xml
5055e351-895b-4648-b571-2c98e4746673	/api/v1/files/invoices/factura_44_11BBF1BD45967D71BA37DDAA5430E5FB18858C7A38D063CE2C5F7E6D74.pdf
ccaa638a-134a-4c2f-bbe7-a3df7d301738	/api/v1/files/invoices/factura_45_11BBF1BD45967D71BA3C3F1D8EF557C28DE94C92A31063CE2C5F7E6D74.xml
4971795d-515f-483e-97c0-5fa56a17566a	/api/v1/files/invoices/factura_45_11BBF1BD45967D71BA3C3F1D8EF557C28DE94C92A31063CE2C5F7E6D74.pdf
3b4e7419-243b-4386-8fc0-ce6170e632a1	/api/v1/files/invoices/factura_46_11BBF1BD45967D71BAF313C94809560DE36CACAB0CC063CE2C5F7E6D74.xml
6f489b24-72f3-47f0-9783-025513cc13eb	/api/v1/files/invoices/factura_46_11BBF1BD45967D71BAF313C94809560DE36CACAB0CC063CE2C5F7E6D74.pdf
b6c824b8-1f16-4843-964b-9df475fc7722	/api/v1/files/invoices/factura_47_11BBF1BD45967D71BB0ADFDE39CA69E4BE9D8CC376A063CE2C5F7E6D74.xml
01ca7dad-ffe7-4eaa-b706-785615d908a0	/api/v1/files/invoices/factura_47_11BBF1BD45967D71BB0ADFDE39CA69E4BE9D8CC376A063CE2C5F7E6D74.pdf
2553552a-04c7-4d60-b412-0c3398432c85	/api/v1/files/invoices/factura_48_11BBF1BD45967D71BB17C9B204E85818728A0CDBE0B063CE2C5F7E6D74.xml
ef593394-39be-49a1-87da-93f0417a92b9	/api/v1/files/invoices/factura_48_11BBF1BD45967D71BB17C9B204E85818728A0CDBE0B063CE2C5F7E6D74.pdf
9385182e-fea7-48a9-bf52-13ad743ed8fe	/api/v1/files/invoices/factura_49_11BBF1BD45967D71BB313AEA6037133D648C0CF44AE063CE2C5F7E6D74.xml
a6beafea-9ca1-4542-be0b-1ecb3904f18e	/api/v1/files/invoices/factura_49_11BBF1BD45967D71BB313AEA6037133D648C0CF44AE063CE2C5F7E6D74.pdf
3641f981-a481-4700-8866-3a43e0041454	/api/v1/files/invoices/factura_50_11BBF1BD45967D71BE6E00A466CA6693127CAD0CB4C063CE2C5F7E6D74.xml
fefefe4b-45fa-462e-9f30-f4f1bfb136b6	/api/v1/files/invoices/factura_50_11BBF1BD45967D71BE6E00A466CA6693127CAD0CB4C063CE2C5F7E6D74.pdf
a99adec3-7b40-412e-b722-eefefcac4fab	/api/v1/files/invoices/factura_51_11BBF1BD45967D71BE7F4CA4B6851B818BB9CD251EA063CE2C5F7E6D74.xml
f4ba1539-4cb0-4f88-8a84-ed8d41cc8c08	/api/v1/files/invoices/factura_51_11BBF1BD45967D71BE7F4CA4B6851B818BB9CD251EA063CE2C5F7E6D74.pdf
91df55c5-fa70-4098-a9cf-5d09ba59e728	/api/v1/files/invoices/factura_52_11BBF1BD45967D71BE9494DE56F9470162844D3D88E063CE2C5F7E6D74.xml
c9a5d77d-491c-400d-b7c3-8941e5c292fe	/api/v1/files/invoices/factura_52_11BBF1BD45967D71BE9494DE56F9470162844D3D88E063CE2C5F7E6D74.pdf
44495d7d-2098-4dd7-9549-9ea8c57d3a71	/api/v1/files/invoices/factura_53_11BBF1BD45967D71BEC0C79D162FAE6EB610FD55F2F063CE2C5F7E6D74.xml
770cb52e-3704-4969-99a0-49499ca7906a	/api/v1/files/invoices/factura_53_11BBF1BD45967D71BEC0C79D162FAE6EB610FD55F2F063CE2C5F7E6D74.pdf
b577816f-561e-4db6-aff8-5048c1e4720e	/api/v1/files/invoices/factura_54_11BBF1BD45967D71BF35075958D21CADF77C4D6E5CB063CE2C5F7E6D74.xml
f2d8a9ff-e559-4ba3-967f-815e5f8ee58a	/api/v1/files/invoices/factura_54_11BBF1BD45967D71BF35075958D21CADF77C4D6E5CB063CE2C5F7E6D74.pdf
cee8ffe6-4810-424f-908d-40f67a5f7ac0	/api/v1/files/invoices/factura_55_11BBF1BD45967D71BF45F41EFDCB71B413B24D86C72063CE2C5F7E6D74.xml
c9c3ebf8-057a-467f-9709-f7bd83c27e22	/api/v1/files/invoices/factura_55_11BBF1BD45967D71BF45F41EFDCB71B413B24D86C72063CE2C5F7E6D74.pdf
1678cae5-0c49-40df-b593-c18910716fa6	/api/v1/files/invoices/factura_56_11BBF1BD45967D71BF5D1133D5716E4FCD859D9F311063CE2C5F7E6D74.xml
7e0dd558-4e29-4b60-a005-be8a72539807	/api/v1/files/invoices/factura_56_11BBF1BD45967D71BF5D1133D5716E4FCD859D9F311063CE2C5F7E6D74.pdf
d16b57aa-4474-436b-931f-a0a6b8220788	/api/v1/files/invoices/factura_57_11BBF1BD45967D71BF871272714B8AF947997DB79AE063CE2C5F7E6D74.xml
daf0349e-b044-4d45-8708-a7d6361cbf32	/api/v1/files/invoices/factura_57_11BBF1BD45967D71BF871272714B8AF947997DB79AE063CE2C5F7E6D74.pdf
49f9f3d9-8708-40f5-8cc5-dd6f9f4a96d3	/api/v1/files/invoices/factura_58_11BBF1BD45967D71BF957228F5829B008BC9FDD004E063CE2C5F7E6D74.xml
8b66635f-2c1d-49d4-a2a2-15b1b38bd8f7	/api/v1/files/invoices/factura_58_11BBF1BD45967D71BF957228F5829B008BC9FDD004E063CE2C5F7E6D74.pdf
7e055ea4-3951-492b-8bcf-540a44de19a5	/api/v1/files/invoices/factura_59_11BBF1BD45967D71BFF11D535F500A2376B60DE86F2063CE2C5F7E6D74.xml
d01a4a29-c909-4488-b524-f123a2e18351	/api/v1/files/invoices/factura_59_11BBF1BD45967D71BFF11D535F500A2376B60DE86F2063CE2C5F7E6D74.pdf
c914099e-8c92-4c05-9d68-7e4b13f16b26	/api/v1/files/invoices/factura_60_11BBF1BD45967D71C1557B97A8CD46A2E74CAE00D8B063CE2C5F7E6D74.xml
721bdaed-fcb8-48a3-aa23-fe8a52833bd8	/api/v1/files/invoices/factura_60_11BBF1BD45967D71C1557B97A8CD46A2E74CAE00D8B063CE2C5F7E6D74.pdf
67a6b863-cbc0-4680-a086-e9ed4fa6ba01	/api/v1/files/invoices/factura_61_11BBF1BD45967D71C1AC736AC7154ABE7791FE1942F063CE2C5F7E6D74.xml
b3568e6a-6515-48c1-9836-e634d45a4cb1	/api/v1/files/invoices/factura_61_11BBF1BD45967D71C1AC736AC7154ABE7791FE1942F063CE2C5F7E6D74.pdf
cb5e66b1-b66c-4185-af6c-ccd12cf09c64	/api/v1/files/invoices/factura_62_11BBF1BD45967D71C1C0EE73207762CB4B8A6E31ACD063CE2C5F7E6D74.xml
50ffed31-40b5-4c3e-8e73-6440efb1dcb5	/api/v1/files/invoices/factura_62_11BBF1BD45967D71C1C0EE73207762CB4B8A6E31ACD063CE2C5F7E6D74.pdf
9e138a14-2741-441e-a322-d51c7bac144c	/api/v1/files/invoices/factura_63_11BBF1BD45967D71C1CFF737BBA1ABACC5234E4A16D063CE2C5F7E6D74.xml
1a910fb1-cd83-470a-a4eb-405e5d9e5235	/api/v1/files/invoices/factura_63_11BBF1BD45967D71C1CFF737BBA1ABACC5234E4A16D063CE2C5F7E6D74.pdf
82120eb3-40c1-4277-a9e3-036a7a4eb752	/api/v1/files/invoices/factura_64_11BBF1BD45967D71C1E22FD8228F267987187E62810063CE2C5F7E6D74.xml
86edeab6-c299-4529-8c61-084fe2a02004	/api/v1/files/invoices/factura_64_11BBF1BD45967D71C1E22FD8228F267987187E62810063CE2C5F7E6D74.pdf
b63702aa-b680-4f58-9181-69a12f24cdcd	/api/v1/files/invoices/factura_65_11BBF1BD45967D71C1F2D845414EDC9B7137DE7AEB3063CE2C5F7E6D74.xml
32e0f2fd-040b-4081-881d-bb16acd4e4fd	/api/v1/files/invoices/factura_65_11BBF1BD45967D71C1F2D845414EDC9B7137DE7AEB3063CE2C5F7E6D74.pdf
7f8bf7cd-eac3-4000-b99f-5970cc07615c	/api/v1/files/invoices/factura_66_11BBF1BD45967D71C21DB271762592B35979FE9354D063CE2C5F7E6D74.xml
123a6b1c-6e1e-48ed-a98b-760fd4d3639e	/api/v1/files/invoices/factura_66_11BBF1BD45967D71C21DB271762592B35979FE9354D063CE2C5F7E6D74.pdf
e1f5563a-32c1-43c9-8926-e1fcc2250bc0	/api/v1/files/invoices/factura_67_11BBF1BD45967D71C22302CB1DE9430CA5108EABBEE063CE2C5F7E6D74.xml
b1b6bd24-d75a-4e4b-aeeb-09adc3ee5f07	/api/v1/files/invoices/factura_67_11BBF1BD45967D71C22302CB1DE9430CA5108EABBEE063CE2C5F7E6D74.pdf
8161f377-75b5-41b9-9739-26f57296b414	/api/v1/files/invoices/factura_68_11BBF1BD45967D71C236B35FA33564AD495C3EC4290063CE2C5F7E6D74.xml
2ea15191-144f-4e29-874e-fd6786c250cc	/api/v1/files/invoices/factura_68_11BBF1BD45967D71C236B35FA33564AD495C3EC4290063CE2C5F7E6D74.pdf
0eaa1b35-2a27-421e-89e3-220802fff34f	/api/v1/files/invoices/factura_69_11BBF1BD45967D71C2482A6360961B3C074D5EDC92E063CE2C5F7E6D74.xml
31369b9d-5fc7-4ecb-9048-13afc3aa9605	/api/v1/files/invoices/factura_69_11BBF1BD45967D71C2482A6360961B3C074D5EDC92E063CE2C5F7E6D74.pdf
\.


--
-- Data for Name: forgot; Type: TABLE DATA; Schema: public; Owner: linuxer
--

COPY public.forgot (id, hash, "createdAt", "deletedAt", "userId") FROM stdin;
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: linuxer
--

COPY public.migrations (id, "timestamp", name) FROM stdin;
1	1661762237009	XmlAFACsjh1661762237009
2	1661781356543	XmlAFA1661781356543
3	1662417854703	XmlAFAj1662417854703
4	1662420204826	XmlAFAjs1662420204826
5	1662420785323	XmlAFAjsds1662420785323
6	1662503726262	XmlAFAjsdsb1662503726262
7	1662534261785	XmlAJB1662534261785
8	1662559143497	XmlAJBl1662559143497
9	1662996195314	XmlAFAjsdsbj1662996195314
10	1662998198785	Xml1662998198785
11	1663013364725	Xml54gf1663013364725
12	1663599756032	XmlAFAjsdsbjjg1663599756032
\.


--
-- Data for Name: producto; Type: TABLE DATA; Schema: public; Owner: linuxer
--

COPY public.producto (id, detalle, "codigoProducto", "codigoProductoSiat", "codigoUnidadMedida", "createdAt", "updatedAt", "deletedAt", cantidad, precio) FROM stdin;
\.


--
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: linuxer
--

COPY public.role (id, name) FROM stdin;
2	User
1	Admin
\.


--
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: linuxer
--

COPY public.status (id, name) FROM stdin;
1	Active
2	Inactive
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: linuxer
--

COPY public."user" (id, email, password, provider, "socialId", "firstName", "lastName", hash, "createdAt", "updatedAt", "deletedAt", "photoId", "roleId", "statusId") FROM stdin;
1	admin@example.com	$2a$10$1/pJHlqyxfJPjJp26IKpWunB8t/NMhcBVauqHmHSwHaPu6w2RKIyO	email	\N	Super	Admin	\N	2022-10-13 15:51:20.15882	2022-10-13 15:51:20.15882	\N	\N	1	1
\.


--
-- Name: cliente_id_seq; Type: SEQUENCE SET; Schema: public; Owner: linuxer
--

SELECT pg_catalog.setval('public.cliente_id_seq', 6975, true);


--
-- Name: cotizacion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: linuxer
--

SELECT pg_catalog.setval('public.cotizacion_id_seq', 1, false);


--
-- Name: factura_id_seq; Type: SEQUENCE SET; Schema: public; Owner: linuxer
--

SELECT pg_catalog.setval('public.factura_id_seq', 56839, true);


--
-- Name: forgot_id_seq; Type: SEQUENCE SET; Schema: public; Owner: linuxer
--

SELECT pg_catalog.setval('public.forgot_id_seq', 1, false);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: linuxer
--

SELECT pg_catalog.setval('public.migrations_id_seq', 12, true);


--
-- Name: producto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: linuxer
--

SELECT pg_catalog.setval('public.producto_id_seq', 7, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: linuxer
--

SELECT pg_catalog.setval('public.user_id_seq', 6, true);


--
-- Name: forgot PK_087959f5bb89da4ce3d763eab75; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.forgot
    ADD CONSTRAINT "PK_087959f5bb89da4ce3d763eab75" PRIMARY KEY (id);


--
-- Name: cliente PK_18990e8df6cf7fe71b9dc0f5f39; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY (id);


--
-- Name: file PK_36b46d232307066b3a2c9ea3a1d; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.file
    ADD CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY (id);


--
-- Name: producto PK_5be023b11909fe103e24c740c7d; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY (id);


--
-- Name: cotizacion PK_84a2ae8abd0e7f658978b29a4b9; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.cotizacion
    ADD CONSTRAINT "PK_84a2ae8abd0e7f658978b29a4b9" PRIMARY KEY (id);


--
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- Name: role PK_b36bcfe02fc8de3c57a8b2391c2; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY (id);


--
-- Name: factura PK_ca804984009ea42a7b46adb9a86; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.factura
    ADD CONSTRAINT "PK_ca804984009ea42a7b46adb9a86" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: status PK_e12743a7086ec826733f54e1d95; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY (id);


--
-- Name: cotizacion UQ_d0d9025c56f5accfe6161a1b629; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.cotizacion
    ADD CONSTRAINT "UQ_d0d9025c56f5accfe6161a1b629" UNIQUE (numero);


--
-- Name: user UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);


--
-- Name: IDX_061a0392f6d4a57ef352ac5fd2; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_061a0392f6d4a57ef352ac5fd2" ON public.cotizacion USING btree (descuento);


--
-- Name: IDX_14d8be3eacee56073ff450f6f1; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_14d8be3eacee56073ff450f6f1" ON public.factura USING btree (cufd);


--
-- Name: IDX_27b31559fedc6d9e9bd64ea627; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_27b31559fedc6d9e9bd64ea627" ON public.cotizacion USING btree (subtotal);


--
-- Name: IDX_330f84bc5b342017cb02d3b813; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_330f84bc5b342017cb02d3b813" ON public.producto USING btree ("codigoProducto");


--
-- Name: IDX_3424338b696621f13af8874a28; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_3424338b696621f13af8874a28" ON public.factura USING btree (descuento);


--
-- Name: IDX_393c240e12215225afd2d32eb4; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_393c240e12215225afd2d32eb4" ON public.factura USING btree (numero);


--
-- Name: IDX_3a722445847d37bb66f41e1c16; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_3a722445847d37bb66f41e1c16" ON public.cliente USING btree (nit);


--
-- Name: IDX_3bc3b7080d5e8b29df6acc2fee; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_3bc3b7080d5e8b29df6acc2fee" ON public.factura USING btree ("clientName");


--
-- Name: IDX_4e1b9c3aed2daf2920da0b5039; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_4e1b9c3aed2daf2920da0b5039" ON public.factura USING btree (total);


--
-- Name: IDX_5015c3f5e604cffd2c410417d2; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_5015c3f5e604cffd2c410417d2" ON public.cotizacion USING btree (nit);


--
-- Name: IDX_58e4dbff0e1a32a9bdc861bb29; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_58e4dbff0e1a32a9bdc861bb29" ON public."user" USING btree ("firstName");


--
-- Name: IDX_6d84001bbabca2564f13d7a174; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_6d84001bbabca2564f13d7a174" ON public.factura USING btree (nit);


--
-- Name: IDX_9a0b36d94e8dcc54df3b04e294; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_9a0b36d94e8dcc54df3b04e294" ON public.factura USING btree ("tipoEmision");


--
-- Name: IDX_9bd2fe7a8e694dedc4ec2f666f; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_9bd2fe7a8e694dedc4ec2f666f" ON public."user" USING btree ("socialId");


--
-- Name: IDX_9bf0080547ccc3a41338f87763; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_9bf0080547ccc3a41338f87763" ON public.factura USING btree (cuf);


--
-- Name: IDX_9f980bea5efb593416923493ec; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_9f980bea5efb593416923493ec" ON public.factura USING btree (subtotal);


--
-- Name: IDX_9fadcf46a3f35232515cf4eeff; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_9fadcf46a3f35232515cf4eeff" ON public.factura USING btree (estado);


--
-- Name: IDX_abfd1103df8e9fee038988e61d; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_abfd1103df8e9fee038988e61d" ON public.cotizacion USING btree ("clientName");


--
-- Name: IDX_b81449bd943da137055cb6bffb; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_b81449bd943da137055cb6bffb" ON public.producto USING btree (detalle);


--
-- Name: IDX_c261516a8a2ff25e75496072b4; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_c261516a8a2ff25e75496072b4" ON public.factura USING btree ("fechaFactura");


--
-- Name: IDX_c9d38e6915a432b12dfe5b13da; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_c9d38e6915a432b12dfe5b13da" ON public.cotizacion USING btree (total);


--
-- Name: IDX_d0d9025c56f5accfe6161a1b62; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_d0d9025c56f5accfe6161a1b62" ON public.cotizacion USING btree (numero);


--
-- Name: IDX_df507d27b0fb20cd5f7bef9b9a; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_df507d27b0fb20cd5f7bef9b9a" ON public.forgot USING btree (hash);


--
-- Name: IDX_e282acb94d2e3aec10f480e4f6; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_e282acb94d2e3aec10f480e4f6" ON public."user" USING btree (hash);


--
-- Name: IDX_f0e1b4ecdca13b177e2e3a0613; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_f0e1b4ecdca13b177e2e3a0613" ON public."user" USING btree ("lastName");


--
-- Name: IDX_f53395511a5b6d0df8e8f6c3b7; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_f53395511a5b6d0df8e8f6c3b7" ON public.cliente USING btree (phone);


--
-- Name: forgot FK_31f3c80de0525250f31e23a9b83; Type: FK CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.forgot
    ADD CONSTRAINT "FK_31f3c80de0525250f31e23a9b83" FOREIGN KEY ("userId") REFERENCES public."user"(id);


--
-- Name: user FK_75e2be4ce11d447ef43be0e374f; Type: FK CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "FK_75e2be4ce11d447ef43be0e374f" FOREIGN KEY ("photoId") REFERENCES public.file(id);


--
-- Name: user FK_c28e52f758e7bbc53828db92194; Type: FK CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES public.role(id);


--
-- Name: user FK_dc18daa696860586ba4667a9d31; Type: FK CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "FK_dc18daa696860586ba4667a9d31" FOREIGN KEY ("statusId") REFERENCES public.status(id);


--
-- PostgreSQL database dump complete
--

