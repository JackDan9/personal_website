const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const IS_DEV = ["development"].includes(process.env.NODE_ENV);

const PROD_API = "http://192.168.1.222:8080/api";
const DEV_API = "http://www.jackdan.cn/api";

export default {
  api: IS_PROD ? PROD_API : DEV_API
};