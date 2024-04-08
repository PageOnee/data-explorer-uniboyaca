/// Librerias de react
import axios from "axios";


// Servicio : Traer datos - semestrales
export const getInfoSemester = (level, lapsed, category) => {
  const baseUrl = 'http://127.0.0.1:8000/data-explorer/api/v1/data/report_period';
  const interval = 'Semestral';
  const item = '';
  const item_data = '';

  const url = `${baseUrl}?level=${level}&interval=${interval}&lapse=${lapsed}&category=${category}&item=${item}&item_data=${item_data}`;

  return axios.get(url);
};


// Servicio : Traer datos - anuales
export const getInfoAnnual = (level, lapsed, category) => {
  const baseUrl = 'http://127.0.0.1:8000/data-explorer/api/v1/data/report_period';
  const interval = 'Anual';
  const item = '';
  const item_data = '';

  const url = `${baseUrl}?level=${level}&interval=${interval}&lapse=${lapsed}&category=${category}&item=${item}&item_data=${item_data}`;

  return axios.get(url);
};


// Servicio : Traer datos - generales
export const getInfo = (level, lapsed, category) => {
  const baseUrl = 'http://127.0.0.1:8000/data-explorer/api/v1/data/report_period';
  const interval = 'General';
  const item = '';
  const item_data = '';

  const url = `${baseUrl}?level=${level}&interval=${interval}&lapse=${lapsed}&category=${category}&item=${item}&item_data=${item_data}`;

  return axios.get(url);
};


// Servicio : Traer datos - generales
export const getHistorical = () => {
  const url = 'http://127.0.0.1:8000/data-explorer/api/v1/data/report_historical';

  return axios.get(url);
};