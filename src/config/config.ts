const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const IS_DEV = ["development"].includes(process.env.NODE_ENV);

const DEV_API = "http://192.168.1.222:8080/api";
const PROD_API = "http://www.jackdan.cn/api";

const DEV_ATTACHMENT_API = "http://192.168.1.222:8080/api/attachments";
const PROD_ATTACHTMENT_API = "http://www.jackdan.cn/api/attachments";

export default {
  api: IS_PROD ? PROD_API : DEV_API,
  attachmentApi: IS_PROD ? PROD_ATTACHTMENT_API : DEV_ATTACHMENT_API
};