/**
 * 判断是否属于外部链接
 * @param url
 */
export function isHttpOrHttpsUrl(url: string): boolean {
  let regRuler = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRuler.test(url.toLowerCase());
}
