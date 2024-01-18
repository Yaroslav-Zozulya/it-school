import axios from "axios";

const BASE_URL = "https://it-school-deploy-production.up.railway.app";

export const endpoints = {
  callbackCourse: `${BASE_URL}/api/callback-courses`,
  callback: `${BASE_URL}/api/callbacks`,
  getAllCourses: `${BASE_URL}/api/courses?populate=previewImg`,
  discount: `${BASE_URL}/api/discount-promotion`,
};

async function sendModalCall(endpoint, data) {
  console.log(endpoint);
  const result = await axios.post(endpoint, data);
  return result;
}

async function getAllCourses() {
  const result = await axios.get(endpoints.getAllCourses);
  return result;
}

async function getDiscount() {
  const result = await axios.get(endpoints.discount);
  return result;
}

export const serverAPI = {
  sendModalCall,
  getAllCourses,
  getDiscount,
};
