import CryptoJS from "crypto-js";
// 将文件转换为 md5
export const calculateMD5 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event: any) {
      const fileData = event.target.result;
      const wordArray = CryptoJS.lib.WordArray.create(fileData);
      const md5 = CryptoJS.MD5(wordArray).toString();
      resolve(md5);
    };
    reader.onerror = function (event: any) {
      reject(event.target.error);
    };
    reader.readAsArrayBuffer(file);
  });
};
