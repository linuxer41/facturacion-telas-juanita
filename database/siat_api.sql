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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: typeorm_metadata; Type: TABLE; Schema: public; Owner: linuxer
--

CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);


ALTER TABLE public.typeorm_metadata OWNER TO linuxer;

--
-- Name: user_entity; Type: TABLE; Schema: public; Owner: linuxer
--

CREATE TABLE public.user_entity (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.user_entity OWNER TO linuxer;

--
-- Name: user_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: linuxer
--

CREATE SEQUENCE public.user_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_entity_id_seq OWNER TO linuxer;

--
-- Name: user_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: linuxer
--

ALTER SEQUENCE public.user_entity_id_seq OWNED BY public.user_entity.id;


--
-- Name: user_entity id; Type: DEFAULT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.user_entity ALTER COLUMN id SET DEFAULT nextval('public.user_entity_id_seq'::regclass);


--
-- Data for Name: typeorm_metadata; Type: TABLE DATA; Schema: public; Owner: linuxer
--

COPY public.typeorm_metadata (type, database, schema, "table", name, value) FROM stdin;
\.


--
-- Data for Name: user_entity; Type: TABLE DATA; Schema: public; Owner: linuxer
--

COPY public.user_entity (id, email, password, "createdAt", "updatedAt") FROM stdin;
2	Linuxer41@gmail.com	$2b$10$hj7jR1giP2m.eKWhe1hwyOQbx8009nBCcDfVYXaz.i2iprJXzO3KS	2022-07-28 21:25:16.041215	2022-07-28 21:25:16.041215
3	example@email.com	$2b$10$mzK2HCHMNWR/LW1hjK4uBOUjzE3NkbmqWaOYbQIv6gzDvExwi.cva	2022-07-29 08:13:00.302075	2022-07-29 08:13:00.302075
\.


--
-- Name: user_entity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: linuxer
--

SELECT pg_catalog.setval('public.user_entity_id_seq', 3, true);


--
-- Name: user_entity PK_b54f8ea623b17094db7667d8206; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.user_entity
    ADD CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY (id);


--
-- Name: user_entity UQ_415c35b9b3b6fe45a3b065030f5; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.user_entity
    ADD CONSTRAINT "UQ_415c35b9b3b6fe45a3b065030f5" UNIQUE (email);


--
-- PostgreSQL database dump complete
--

