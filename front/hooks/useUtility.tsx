import { useCallback } from "react";

const useUtility = () => {
  /**
   * 文字列を数値に変換
   * @param str 変換前の文字列
   * @returns 変換後の数値 変換処理失敗時は0を返却する
   */
  const convertStringToInt = useCallback((str: string | undefined): number => {
    if (str) {
      const result = parseInt(str, 10);
      return isNaN(result) ? 0 : result;
    } else {
      return 0;
    }
  }, []);

  return [{ convertStringToInt }];
};

export default useUtility;
