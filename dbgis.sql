-- perintah import : psql -U username -d database -a -f file.sql
-- perintah export : pg_dump -d database --format=p --file=file.sql
-- PostgreSQL database dump
--

-- Dumped from database version 10.5 (Ubuntu 10.5-0ubuntu0.18.04)
-- Dumped by pg_dump version 10.5 (Ubuntu 10.5-0ubuntu0.18.04)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: tbl_item_peta; Type: TABLE; Schema: public; Owner: mandan
--

CREATE TABLE public.tbl_item_peta (
    id_item integer NOT NULL,
    nm_item character varying(100) NOT NULL,
    geojson json NOT NULL,
    id_titem smallint,
    id_kitem smallint DEFAULT '1'::smallint NOT NULL
);




--
-- Name: tbl_kategori_item; Type: TABLE; Schema: public; Owner: mandan
--

CREATE TABLE public.tbl_kategori_item (
    id_kitem integer NOT NULL,
    nm_kitem character varying(100) NOT NULL,
    detail character varying(255) NOT NULL
);



--
-- Name: tbl_tipe_item; Type: TABLE; Schema: public; Owner: mandan
--

CREATE TABLE public.tbl_tipe_item (
    id_titem integer NOT NULL,
    nm_titem character varying(50) NOT NULL,
    style json NOT NULL
);



--
-- Name: daftar_item; Type: VIEW; Schema: public; Owner: mandan
--

CREATE VIEW public.daftar_item AS
 SELECT a.id_item,
    a.nm_item,
    a.geojson,
    a.id_titem,
    b.nm_titem AS tipe_item,
    c.nm_kitem AS kategori_item,
    a.id_kitem
   FROM ((public.tbl_item_peta a
     JOIN public.tbl_tipe_item b ON ((a.id_titem = b.id_titem)))
     JOIN public.tbl_kategori_item c ON ((a.id_kitem = c.id_kitem)));



--
-- Name: tbl_item_peta_id_item_seq; Type: SEQUENCE; Schema: public; Owner: mandan
--

CREATE SEQUENCE public.tbl_item_peta_id_item_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;




--
-- Name: tbl_item_peta_id_item_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mandan
--



--
-- Name: tbl_kategori_item_id_kitem_seq; Type: SEQUENCE; Schema: public; Owner: mandan
--

CREATE SEQUENCE public.tbl_kategori_item_id_kitem_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;




--
-- Name: tbl_kategori_item_id_kitem_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mandan
--



--
-- Name: tbl_tipe_item_id_titem_seq; Type: SEQUENCE; Schema: public; Owner: mandan
--

CREATE SEQUENCE public.tbl_tipe_item_id_titem_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;



--
-- Name: tbl_tipe_item_id_titem_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mandan
--



--
-- Name: tbl_item_peta id_item; Type: DEFAULT; Schema: public; Owner: mandan
--

ALTER TABLE ONLY public.tbl_item_peta ALTER COLUMN id_item SET DEFAULT nextval('public.tbl_item_peta_id_item_seq'::regclass);


--
-- Name: tbl_kategori_item id_kitem; Type: DEFAULT; Schema: public; Owner: mandan
--

ALTER TABLE ONLY public.tbl_kategori_item ALTER COLUMN id_kitem SET DEFAULT nextval('public.tbl_kategori_item_id_kitem_seq'::regclass);


--
-- Name: tbl_tipe_item id_titem; Type: DEFAULT; Schema: public; Owner: mandan
--

ALTER TABLE ONLY public.tbl_tipe_item ALTER COLUMN id_titem SET DEFAULT nextval('public.tbl_tipe_item_id_titem_seq'::regclass);


--
-- Data for Name: tbl_item_peta; Type: TABLE DATA; Schema: public; Owner: mandan
--

COPY public.tbl_item_peta (id_item, nm_item, geojson, id_titem, id_kitem) FROM stdin;
34	Maluku	{"type":"Feature","properties":{"detail":{"Ibukota":"Ambon","Lokasi":"Indonesia Timur"},"style":{"color":"#000","fillColor":"#AA00FF","dashArray":"5","weight":"1","fillOpacity":"0.2"}},"geometry":{"type":"Polygon","coordinates":[[[129.243164,0.703107],[129.199219,3.030812],[127.529297,2.855263],[126.166992,0.527336],[124.145508,-0.922812],[124.189453,-2.855263],[126.210938,-4.039618],[129.199219,-5.003394],[131.879883,-4.521666],[131.704102,-2.32846],[130.561523,-1.45004],[129.287109,-1.318243],[129.243164,0.703107]]]}}	1	1
35	Bengkulu	{"type":"Feature","properties":{"detail":{"Ibukota":"Mukomuko","Bapak Kota":"Bengkulu"},"style":{"color":"#000","fillColor":"#AA00FF","dashArray":"5","weight":"1","fillOpacity":"0.2"}},"geometry":{"type":"Polygon","coordinates":[[[101.013794,-2.481362],[101.299438,-2.27829],[101.574097,-2.437457],[101.541138,-2.536241],[101.694946,-2.536241],[101.881714,-2.728298],[102.090454,-2.766706],[102.255249,-3.024555],[102.332153,-3.073924],[102.420044,-3.073924],[102.485962,-3.128775],[102.513428,-3.260406],[102.661743,-3.34815],[102.815552,-3.34815],[103.002319,-3.370085],[103.002319,-3.507167],[102.919922,-3.633265],[102.821045,-3.518133],[102.821045,-3.6223],[102.738647,-3.731937],[102.606812,-3.803194],[102.86499,-3.97309],[102.897949,-3.95117],[102.941895,-4.005969],[103.134155,-3.98953],[103.189087,-4.131994],[103.189087,-4.225129],[103.304443,-4.27991],[103.480225,-4.356596],[103.584595,-4.345641],[103.62854,-4.416843],[103.562622,-4.493515],[103.62854,-4.564704],[103.721924,-4.701584],[103.798828,-4.778225],[103.710938,-4.832964],[103.579102,-4.926009],[103.227539,-5.057345],[101.45874,-3.847042],[100.93689,-2.997127],[101.013794,-2.481362]]]}}	1	1
33	Papua Barat	{"type":"Feature","properties":{"detail":{"Ibukota":"Manokwari","Lokasi":"Indonesia Timur"},"style":{"color":"#000","fillColor":"#00A3FF","dashArray":"5","weight":"1","fillOpacity":"0.2"}},"geometry":{"type":"Polygon","coordinates":[[[134.703369,-2.842747],[134.417725,-3.007327],[134.439697,-3.117034],[134.219971,-3.380281],[134.373779,-3.435116],[134.46167,-3.489947],[135.296631,-3.74213],[135.065918,-3.97232],[134.87915,-4.290095],[134.560547,-4.563933],[132.780762,-4.344871],[131.44043,-2.908582],[130.814209,-1.690104],[130.067139,-0.77846],[129.935303,-0.0424],[129.528809,0.473952],[132.000732,0.616767],[134.197998,-0.50382],[134.868164,-2.140291],[134.703369,-2.842747]]]}}	1	1
31	Sumatera Barat	{"type":"Feature","properties":{"detail":{"Ibukota":"Padang","Nama":"Nilai"},"style":{"color":"#000","fillColor":"#35FF00","fillOpacity":"0.2","weight":"1","dashArray":"5"}},"geometry":{"type":"Polygon","coordinates":[[[97.613525,-0.053387],[98.459473,0.375077],[99.173584,0.210285],[99.228516,0.342119],[99.338379,0.364091],[99.437256,0.495924],[99.744873,0.440994],[99.909668,0.473952],[99.854736,0.649724],[99.810791,0.847461],[100.05249,0.836476],[100.206299,0.693667],[100.294189,0.430008],[100.535889,0.408036],[100.843506,0.25423],[100.843506,0.001545],[100.722656,-0.075359],[100.777588,-0.196209],[100.898438,-0.415932],[100.964355,-0.317057],[101.096191,-0.536777],[101.381836,-0.668606],[101.656494,-0.921267],[101.843262,-0.976191],[101.887207,-1.22883],[101.66748,-1.250797],[101.733398,-1.514392],[101.535645,-1.613232],[101.359863,-1.701086],[101.107178,-1.701086],[101.162109,-1.953643],[101.282959,-2.118334],[101.304932,-2.315939],[101.173096,-2.392779],[101.04126,-2.491566],[100.83252,-3.182852],[100.283203,-3.577671],[98.514404,-1.920703],[97.613525,-0.053387]]]}}	1	3
29	Aceh	{"type":"Feature","properties":{"detail":{"Ibukota":"Banda Aceh","Status":"Daerah Istimewa"},"style":{"color":"#000","fillColor":"#FF0000","fillOpacity":"0.5","weight":"1","dashArray":"5"}},"geometry":{"type":"Polygon","coordinates":[[[98.267212,4.28145],[98.481445,4.374568],[98.085938,4.631179],[98.02002,4.959615],[97.36084,5.331644],[96.767578,5.287887],[96.196289,5.375398],[95.625,5.790897],[95.009766,5.965754],[94.812012,5.812757],[95.229492,4.893941],[95.756836,4.302591],[96.240234,3.842332],[96.833496,3.447625],[97.250977,2.986927],[97.602539,2.262595],[98.10791,1.978691],[98.162842,2.143379],[98.129883,2.428796],[98.074951,2.670256],[97.954102,2.966527],[97.954102,3.26272],[97.800293,3.712324],[97.921143,3.964442],[98.267212,4.28145]]]}}	1	1
32	Bangka Belitung	{"type":"Feature","properties":{"detail":{"Ibukota":"Pangkalpinang","Banyak Pulau":"banyak","Banyak Orang":"Banyak","Banyak Tanah":"Banyak"},"style":{"color":"#FF9797","fillColor":"#FF9797","fillOpacity":"0.2"}},"geometry":{"type":"Polygon","coordinates":[[[105.985107,-1.503409],[106.204834,-1.755993],[106.237793,-2.162248],[106.45752,-2.502542],[106.820068,-2.491566],[107.874756,-2.48059],[108.314209,-2.634245],[108.413086,-3.007327],[108.500977,-3.314476],[108.138428,-3.391249],[107.479248,-3.347379],[106.479492,-3.182852],[106.138916,-2.963441],[105.88623,-2.820801],[105.787354,-2.491566],[105.622559,-2.21714],[105.13916,-2.21714],[104.996338,-1.975603],[105.292969,-1.525374],[105.985107,-1.503409]]]}}	1	3
27	Batas ZEE	{"type":"Feature","properties":{"detail":{"Keterangan":"ZEE adalah batas laut Indonesia sebesar 200 mil dari garis pantai. Batas ZEE digagas oleh PM Indonesia Ir. H. Djuanda pada tahun 1957. Gagasan tersebut disebut 'Deklarasi Djuanda' dan deklarasi tersebut diakui PBB pada tahun 1982.","Jarak":"200mil"},"style":{"color":"#FF0000", "weight":2, "dashArray":3}},"geometry":{"type":"LineString","coordinates":[[93.955078,5.709597],[95.097656,1.456218],[96.459961,-0.74087],[98.129883,-3.638832],[100.371094,-6.090715],[102.304688,-7.443497],[104.72168,-9.009199],[108.149414,-9.572991],[112.763672,-10.352072],[116.586914,-11.042973],[119.223633,-12.119222],[122.34375,-12.505632],[125.15625,-11.60314],[125.419922,-10.308839],[124.628906,-8.835545],[125.419922,-8.574911],[126.035156,-8.270612],[127.22168,-8.053111],[128.408203,-8.878966],[129.726563,-9.442966],[131.660156,-9.442966],[133.945313,-8.748687],[136.274414,-9.269523],[138.779297,-10.006044],[141.064453,-10.006044],[141.064453,-1.268131],[139.96582,-0.389325],[139.086914,-0.037766],[137.768555,-0.037766],[136.40625,0.533516],[134.912109,0.621402],[133.681641,1.148681],[132.407227,1.148681],[131.52832,1.016869],[130.341797,1.763714],[130.03418,2.993099],[129.155273,3.651167],[127.880859,5.184637],[126.958008,5.359674],[125.991211,4.834418],[124.013672,4.089617],[122.167969,4.133449],[120.410156,4.133449],[118.959961,4.133449],[117.817383,4.133449],[117.246094,4.352573],[116.015625,4.352573],[115.048828,2.729756],[114.741211,1.500149],[113.422852,1.280487],[112.412109,1.500149],[111.928711,1.016869],[110.566406,0.841111],[109.555664,1.807638],[110.43457,3.958106],[111.137695,5.840764],[109.863281,7.194232],[107.973633,6.758033],[106.655273,5.534662],[105.249023,3.036983],[105.512695,1.719789],[105.380859,0.79717],[104.458008,0.35774],[103.40332,1.368354],[101.601563,2.246815],[99.228516,4.615438],[97.734375,5.928191],[96.328125,6.801671],[94.96582,6.845305],[93.779297,6.277761],[94.262695,4.790627]]}}	2	1
42	Marker	{"type":"Feature","properties":{"detail":{"Ibukota":"Jakarta"},"style":{"iconUrl":"https://leafletjs.com/examples/geojson/baseball-marker.png"}},"geometry":{"type":"Point","coordinates":[106.045532,-2.24064]}}	4	1
28	Medan, Sumatera Utara	{"type":"Feature","properties":{"detail":{"Nama Provinsi":"Sumatera Utara","Ibukota":"Medan"},"style":{"color":"#000","fillColor":"#FFF000","fillOpacity":"0.2","weight":"1","dashArray":"5"}},"geometry":{"type":"Polygon","coordinates":[[[100.327148,2.565223],[100.27771,2.395094],[100.288696,2.279834],[100.327148,2.170053],[100.327148,2.060265],[100.299683,1.944979],[100.299683,1.868117],[100.371094,1.829685],[100.426025,1.719874],[100.431519,1.593585],[100.387573,1.544165],[100.085449,1.395898],[100.085449,1.357457],[100.134888,1.30254],[100.145874,1.236638],[100.217285,1.181719],[100.211792,1.060893],[100.222778,0.940061],[100.222778,0.863167],[100.17334,0.819226],[100.189819,0.736836],[100.008545,0.797256],[99.893188,0.846689],[99.772339,0.863167],[99.689941,0.901614],[99.728394,0.824719],[99.799805,0.769792],[99.84375,0.692894],[99.887695,0.621488],[99.937134,0.539095],[99.871216,0.4567],[99.821777,0.4567],[99.766846,0.473179],[99.695435,0.473179],[99.662476,0.544588],[99.585571,0.517123],[99.536133,0.517123],[99.497681,0.544588],[99.404297,0.484165],[99.360352,0.40177],[99.332886,0.33036],[99.261475,0.33036],[99.195557,0.297402],[99.162598,0.225992],[99.148865,0.313109],[99.113159,0.346067],[99.132385,0.436702],[99.121399,0.4779],[99.074707,0.57128],[98.986816,0.900842],[98.76709,1.428075],[98.723145,1.55712],[98.786316,1.570848],[98.833008,1.653213],[98.76709,1.716357],[98.670959,1.73832],[98.624268,1.801461],[98.528137,1.900286],[98.473206,1.957932],[98.432007,1.999106],[98.371582,1.996361],[98.157349,2.142607],[98.190308,2.318255],[98.162842,2.422536],[98.091431,2.428024],[98.080444,2.592661],[98.129883,2.669484],[98.069458,2.817629],[98.00354,2.883466],[97.954102,2.916382],[97.932129,3.059011],[97.987061,3.086437],[97.948608,3.163227],[97.888184,3.25098],[98.031006,3.300337],[98.031006,3.366144],[97.943115,3.377111],[97.943115,3.470328],[97.904663,3.547088],[97.855225,3.623842],[97.800293,3.738961],[97.915649,3.82666],[97.88269,3.91983],[97.948608,3.892428],[97.981567,3.947231],[98.036499,4.002031],[98.036499,4.111619],[98.069458,4.199278],[98.074951,4.254061],[98.135376,4.254061],[98.135376,4.297884],[98.217773,4.297884],[98.267212,4.292406],[98.569336,3.973861],[98.778076,3.710782],[99.173584,3.601142],[99.437256,3.436658],[100.096436,2.767478],[100.272217,2.723583],[100.327148,2.565223]]]}}	1	1
\.


--
-- Data for Name: tbl_kategori_item; Type: TABLE DATA; Schema: public; Owner: mandan
--

COPY public.tbl_kategori_item (id_kitem, nm_kitem, detail) FROM stdin;
1	Tidak Ada	Item peta yang tidak berkategori ditampilkan dikategori ini
3	Wilayah Sumatera Selatan	Wilayah sumsel
4	Indonesia Tengah	Deskripsi
\.


--
-- Data for Name: tbl_tipe_item; Type: TABLE DATA; Schema: public; Owner: mandan
--

COPY public.tbl_tipe_item (id_titem, nm_titem, style) FROM stdin;
1	Polygon	{\r\n"color": "#000",\r\n"fillColor": "#000",\r\n"dashArray": 3,\r\n"weight": 3, \r\n"fillOpacity":\t0.2}
2	Polyline	{"color": "#000", "weight": 2, "opacity": 0.2}
3	Rectangle	{\r\n"color": "#000",\r\n"fillColor": "#000",\r\n"dashArray": 3,\r\n"weight": 3, \r\n"fillOpacity":\t0.2}
5	Circle	{\r\n"color": "#000",\r\n"fillColor": "#000",\r\n"dashArray": 3,\r\n"weight": 3, \r\n"fillOpacity":\t0.2}
4	Marker	{"iconUrl": ""}
\.


--
-- Name: tbl_item_peta_id_item_seq; Type: SEQUENCE SET; Schema: public; Owner: mandan
--

SELECT pg_catalog.setval('public.tbl_item_peta_id_item_seq', 42, true);


--
-- Name: tbl_kategori_item_id_kitem_seq; Type: SEQUENCE SET; Schema: public; Owner: mandan
--

SELECT pg_catalog.setval('public.tbl_kategori_item_id_kitem_seq', 4, true);


--
-- Name: tbl_tipe_item_id_titem_seq; Type: SEQUENCE SET; Schema: public; Owner: mandan
--

SELECT pg_catalog.setval('public.tbl_tipe_item_id_titem_seq', 5, true);


--
-- Name: tbl_item_peta tbl_item_peta_id_item; Type: CONSTRAINT; Schema: public; Owner: mandan
--

ALTER TABLE ONLY public.tbl_item_peta
    ADD CONSTRAINT tbl_item_peta_id_item PRIMARY KEY (id_item);


--
-- Name: tbl_kategori_item tbl_kategori_item_id_kitem; Type: CONSTRAINT; Schema: public; Owner: mandan
--

ALTER TABLE ONLY public.tbl_kategori_item
    ADD CONSTRAINT tbl_kategori_item_id_kitem PRIMARY KEY (id_kitem);


--
-- Name: tbl_tipe_item tbl_tipe_item_id_titem; Type: CONSTRAINT; Schema: public; Owner: mandan
--

ALTER TABLE ONLY public.tbl_tipe_item
    ADD CONSTRAINT tbl_tipe_item_id_titem PRIMARY KEY (id_titem);


--
-- PostgreSQL database dump complete
--

