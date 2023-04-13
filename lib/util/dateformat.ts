import moment from "moment"

export const Iso2Readable = (value: string) => {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
}
