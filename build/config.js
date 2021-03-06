const DEPLOY = 1;
const TEST = 2;
const LOCAL = 3;
const ENTORNO = DEPLOY;
// const ENTORNO = LOCAL;

//WS Turnero
const intranet = true;
const URL_WS_LOCAL = intranet ? "http://localhost:7294" : "http://localhost:1868";
const URL_WS_TEST = "https://srv-dev04.cordoba.local/WSVecinoVirtual_Bridge";
const URL_WS_DEPLOY = "https://servicios2.cordoba.gov.ar/WSVecinoVirtual_Bridge";
let URL_WS = URL_WS_DEPLOY;
let URL_WS_CORDOBA_GEO = "https://servicios2.cordoba.gov.ar/CordobaGeoApi";
let URL_CORDOBA_FILES = "https://servicios2.cordoba.gov.ar/CordobaFiles";

switch (ENTORNO) {
  case DEPLOY:
    {
      URL_WS = URL_WS_DEPLOY;
    }
    break;
  case TEST:
    {
      URL_WS = URL_WS_TEST;
    }
    break;
  case LOCAL:
    {
      URL_WS = URL_WS_LOCAL;
    }
    break;
}

var Config = {
  NOMBRE_SISTEMA: "Muni Online",
  BASE_URL: "/MuniOnlinePerfil",
  BASE_URL_WS: URL_WS,
  WS_CORDOBA_GEO: URL_WS_CORDOBA_GEO,
  URL_CORDOBA_FILES: URL_CORDOBA_FILES,
  GOOGLE_STATIC_MAP_API_KEY: "AIzaSyCUKJ2Qc516T_Fd7q8ns-enzZwC1yuuZio",
  IDENTIFICADOR_FOTO_DEFAULT_MALE:
    "f_qdag0f9irgka9xj2l6mbll69gxmhlghezkmkj2mykg1pj0uuhwogqiqfic_c327l9gmyk9tutz1fuq0rc3_z2byq5gcg2j5tjpqcn6jid4x2rlv2nsaa2it7s64d7m2k4h7e_xegt2w8p79uvk4jj42a7uvrcfm1cn8jpq31o4raxvsv8ktwtsa_q6iqbxeop56c_zee",
  IDENTIFICADOR_FOTO_DEFAULT_FEMALE:
    "f_zq38nzky73iwxm6fz4m812vx68ggr28xgokqfwx7zf9ws7rd6_s7mn985gcqtehf6vpicq_chqiv3_e9rdlsjal4pmw_uhnu9318riap_p07eoe5cd_q4z65kw304ataczwaihsic6t4lo0bh18qi81k86x6qlv_7z5q2ew6w1n8gbu772sdcd3e8mcnuw31ku8wtkkd",
  VERSION: 7
};

module.exports = Config;
