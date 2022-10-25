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
    "fechaFactura" timestamp without time zone NOT NULL,
    "userId" integer
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
-- Name: factura id; Type: DEFAULT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.factura ALTER COLUMN id SET DEFAULT nextval('public.factura_id_seq'::regclass);


--
-- Name: factura PK_ca804984009ea42a7b46adb9a86; Type: CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.factura
    ADD CONSTRAINT "PK_ca804984009ea42a7b46adb9a86" PRIMARY KEY (id);


--
-- Name: IDX_14d8be3eacee56073ff450f6f1; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_14d8be3eacee56073ff450f6f1" ON public.factura USING btree (cufd);


--
-- Name: IDX_3424338b696621f13af8874a28; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_3424338b696621f13af8874a28" ON public.factura USING btree (descuento);


--
-- Name: IDX_393c240e12215225afd2d32eb4; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_393c240e12215225afd2d32eb4" ON public.factura USING btree (numero);


--
-- Name: IDX_3bc3b7080d5e8b29df6acc2fee; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_3bc3b7080d5e8b29df6acc2fee" ON public.factura USING btree ("clientName");


--
-- Name: IDX_4e1b9c3aed2daf2920da0b5039; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_4e1b9c3aed2daf2920da0b5039" ON public.factura USING btree (total);


--
-- Name: IDX_6d84001bbabca2564f13d7a174; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_6d84001bbabca2564f13d7a174" ON public.factura USING btree (nit);


--
-- Name: IDX_9a0b36d94e8dcc54df3b04e294; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_9a0b36d94e8dcc54df3b04e294" ON public.factura USING btree ("tipoEmision");


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
-- Name: IDX_c261516a8a2ff25e75496072b4; Type: INDEX; Schema: public; Owner: linuxer
--

CREATE INDEX "IDX_c261516a8a2ff25e75496072b4" ON public.factura USING btree ("fechaFactura");


--
-- Name: factura FK_eba1a13a501d3bd6ebb02ffa063; Type: FK CONSTRAINT; Schema: public; Owner: linuxer
--

ALTER TABLE ONLY public.factura
    ADD CONSTRAINT "FK_eba1a13a501d3bd6ebb02ffa063" FOREIGN KEY ("userId") REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--

