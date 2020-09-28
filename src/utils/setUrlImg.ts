export default function setUrlImg(
  urlImg: string,
  defaultUrlImg: string
): string {
  return urlImg ? `http://localhost:3333/files/${urlImg}` : defaultUrlImg
}
