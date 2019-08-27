/**
 * 使用说明：截取字符串
 * @param {*string} text 截取字符串
 * @param {*number} length 截取个数
 * @param {*string} clamp 后缀样式，默认 ...
 */
export function truncate(text, length, clamp) {
  text = text || ""
  clamp = clamp || "..."
  length = length || 30
  if (text.length <= length) return text
  var tcText = text.slice(0, length - clamp.length)
  var last = tcText.length - 1
  while (last > 0 && tcText[last] !== " " && tcText[last] !== clamp[0]) {
    last -= 1
  }
  // Fix for case when text dont have any `space`
  last = last || length - clamp.length
  tcText = tcText.slice(0, last)

  return tcText + clamp
}

/**
 * 使用说明：html转换为文本
 * @param {*string} html 截取html文本内容
 * @param {*number} num 截取个数
 */
export function textOverview(html, num) {
  let desc = html.replace(/<[^>]+>/g, "")
  desc = desc.replace(/&nbsp;/g, " ")
  desc = desc.substr(0, num)
  return desc + " ..."
}

/**
 * 使用说明：时间戳转化为几分钟前，几小时前，刚刚
 * @param {*number} timestamp 时间戳
 */
export function timestampFormat(timestamp) {
  console.log(timestamp)
  function zeroize(num) {
    return (String(num).length == 1 ? "0" : "") + num
  }

  var curTimestamp = parseInt(new Date().getTime() / 1000) //当前时间戳
  var timestampDiff = curTimestamp - timestamp // 参数时间戳与当前时间戳相差秒数

  var curDate = new Date(curTimestamp * 1000) // 当前时间日期对象
  var tmDate = new Date(timestamp * 1000) // 参数时间戳转换成的日期对象

  var Y = tmDate.getFullYear(),
    m = tmDate.getMonth() + 1,
    d = tmDate.getDate()
  var H = tmDate.getHours(),
    i = tmDate.getMinutes()

  if (timestampDiff < 60) {
    // 一分钟以内
    return "刚刚"
  } else if (timestampDiff < 3600) {
    // 一小时前之内
    return Math.floor(timestampDiff / 60) + "分钟前"
  } else if (
    curDate.getFullYear() == Y &&
    curDate.getMonth() + 1 == m &&
    curDate.getDate() == d
  ) {
    return "今天" + zeroize(H) + ":" + zeroize(i)
  } else {
    var newDate = new Date((curTimestamp - 86400) * 1000) // 参数中的时间戳加一天转换成的日期对象
    if (
      newDate.getFullYear() == Y &&
      newDate.getMonth() + 1 == m &&
      newDate.getDate() == d
    ) {
      return "昨天" + zeroize(H) + ":" + zeroize(i)
    } else if (curDate.getFullYear() == Y) {
      return (
        zeroize(m) + "月" + zeroize(d) + "日 " + zeroize(H) + ":" + zeroize(i)
      )
    } else {
      return (
        Y +
        "年" +
        zeroize(m) +
        "月" +
        zeroize(d) +
        "日 " +
        zeroize(H) +
        ":" +
        zeroize(i)
      )
    }
  }
}
