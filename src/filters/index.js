// set function parseTime,formatTime to filter
export { parseTime, formatTime } from '@/utils'

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

/* 数字 格式化*/
export function numberFormatter (num, digits) {
  const si = [
    {value: 1E18, symbol: 'E'},
    {value: 1E15, symbol: 'P'},
    {value: 1E12, symbol: 'T'},
    {value: 1E9, symbol: 'G'},
    {value: 1E6, symbol: 'M'},
    {value: 1E3, symbol: 'k'}
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

export function toThousandslsFilter (num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

export function stateType (value) {
  if (value == 0) {
    return '未审批'
  } else if (value == 1) {
    return '已审批(通过)'
  } else if (value == 2) {
    return '已审批(未通过)'
  }
}

export function searchType (value) {
  if (value == 0) {
    return '输入文件名关键字'
  } else if (value == 1) {
    return '按文件名搜索1'
  } else if (value == 2) {
    return '按文件名搜索2'
  }
}

export function searchName (value) {
  if (value == 0) {
    return '按文件名搜索'
  } else if (value == 1) {
    return '按文件名搜索1'
  } else if (value == 2) {
    return '按文件名搜索2'
  }
}

// 文件类型
export function fileType (value) {
  switch (value) {
    case 0:
      return '#icon-docx'
    case 1:
      return '#icon-xlsx'
    case 2:
      return '#icon-ppt1'
    case 3:
      return '#icon-PDF'
    case 4:
      return '#icon-zip-'
    case 5:
      return '#icon-mp'
    case 6:
      return '#icon-mp1'
    case 7:
      return '#icon-wenjianjia-icon'
  }
}

export function createdAt (value) {
  var time = new Date(value)
  return time.Format('yyyy-MM-dd hh:mm:ss')
}

export function imgToArray (str) {
  var arr = str.split(',')
  let newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push('http://123.56.7.142/bimplatform/v1/api/coopes/' + arr[i])
  }
  return newArr
}

export function qsType (value) {
  if (value == 0) {
    return '问题整改'
  } else if (value == 1) {
    return '信息通报'
  }
}

export function labType (value) {
  if (value == 0) {
    return '安全问题'
  } else if (value == 1) {
    return '质量问题'
  } else if (value == 2) {
    return '环保问题'
  }
}

export function bim_leave (value) {
  if (value == 0) {
    return '零级'
  } else if (value == 1) {
    return '一级'
  } else if (value == 2) {
    return '二级'
  } else if (value == 3) {
    return '三级'
  } else if (value == 4) {
    return '四级'
  } else if (value == 5) {
    return '五级'
  } else if (value == 6) {
    return '六级'
  } else if (value == 7) {
    return '七级'
  } else if (value == 8) {
    return '八级'
  }
}
export function yidu (value) {
  if (value == 0) {
    return '未读'
  } else if (value == 1) {
    return '已读'
  }
}
