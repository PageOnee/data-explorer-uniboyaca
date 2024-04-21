/// Librerias de react
import axios from "axios";


// Servicio : Traer datos - semestrales
export const getInfoSemester = (level, lapsed, category, item, item_data) => {
  const baseUrl = 'http://127.0.0.1:8000/data-explorer/api/v1/data/report_period';
  const interval = 'Semestral';

  const url = `${baseUrl}?level=${level}&interval=${interval}&lapse=${lapsed}&category=${category}&item=${item}&item_data=${item_data}`;

  return axios.get(url);
};


// Servicio : Traer datos - anuales
export const getInfoAnnual = (level, lapsed, category, item, item_data) => {
  const baseUrl = 'http://127.0.0.1:8000/data-explorer/api/v1/data/report_period';
  const interval = 'Anual';

  const url = `${baseUrl}?level=${level}&interval=${interval}&lapse=${lapsed}&category=${category}&item=${item}&item_data=${item_data}`;

  return axios.get(url);
};

// Servicio : Traer datos - anuales
export const getInfoPost = (level, interval, lapsed, category, item, item_data) => {
  const baseUrl = 'http://127.0.0.1:8000/data-explorer/api/v1/data/report_period';


  const url = `${baseUrl}?level=${level}&interval=${interval}&lapse=${lapsed}&category=${category}&item=${item}&item_data=${item_data}`;

  return axios.get(url);
};



// Servicio : Traer datos - generales
export const getInfo = (level, lapsed, category, item, item_data) => {
  const baseUrl = 'http://127.0.0.1:8000/data-explorer/api/v1/data/report_period';
  const interval = 'General';

  const url = `${baseUrl}?level=${level}&interval=${interval}&lapse=${lapsed}&category=${category}&item=${item}&item_data=${item_data}`;

  return axios.get(url);
};


// Servicio : Traer datos - generales
export const getHistorical = () => {
  const url = 'http://127.0.0.1:8000/data-explorer/api/v1/data/report_historical';

  return axios.get(url);
};


// Servicio : Traer datos - generales
export const getItems = (item) => {
  const baseUrl = 'http://127.0.0.1:8000/data-explorer/api/v1/data/items-filter';

  const url = `${baseUrl}?item=${item}`;

  return axios.get(url);
};

