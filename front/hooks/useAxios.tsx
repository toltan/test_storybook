import { AxiosError } from "axios";
import { useState, useCallback } from "react";

interface AxiosHeader {
  headers: {
    Accept: string;
    "Content-Type": string;
    "X-CSRF-TOKEN": string;
  };
}

const useAxios = () => {
  const csrf: string = document.getElementById("csrf-token")?.textContent ?? "";
  const [process, setProcess] = useState(false);
  /**
   * GET以外のaxiosリクエスト用のヘッダー返却
   * @return {AxiosHeader} axiosヘッダー
   */
  const getAxiosHeader = useCallback((): AxiosHeader => {
    const header: AxiosHeader = {
      headers: {
        Accept: "application/json, text/javascript",
        "Content-Type": "application/x-www-form-urlencoded",
        "X-CSRF-TOKEN": csrf,
      },
    };
    return header;
  }, [csrf]);
  /**
   * 非同期メソッドをbool値でロック
   * @param {Function} method 非同期メソッド
   */
  const lockAsyncMethod = useCallback(
    async (method): Promise<void> => {
      if (process) {
        return;
      }
      setProcess(true);
      await method();
      setProcess(false);
    },
    [process, setProcess],
  );
  /**
   * axiosエラー処理
   * @param {AxiosError} err axiosエラーオブジェクト
   */
  const axiosErrorHandling = useCallback((err: AxiosError): void => {
    // const logger = new Logger();
    let errMessage = "";
    let statusCode = 500;
    if (err?.response) {
      // CSRFエラー
      if (err.response.status === 403) {
        statusCode = 403;
        errMessage = "CSRFの値が不正です。画面を更新して再送信してください.";
      } else {
        statusCode = err.response.status;
        errMessage = err.response.data.message;
      }
    } else {
      errMessage = err.message;
    }
    // logger.error(csrf, errMessage, err);
    // openModalEvent(`${statusCode}: ${errMessage}`, ERROR_MODAL)
    console.log(statusCode);
    console.log(errMessage);
  }, []);
  // }, [openModalEvent]);

  return [{ axiosErrorHandling, getAxiosHeader, lockAsyncMethod }];
};

export default useAxios;
