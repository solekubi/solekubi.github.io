export const base_api = process.env.VUE_APP_API_URL

type ResponseBody = {
  status: boolean
  message: string
  data: any
}

const responseBody: ResponseBody = {
  status: true,
  message: "",
  data: null,
}

export const builder = (data: any, message: string, status = true) => {
  if (message !== undefined) {
    responseBody.message = message
  }
  responseBody.data = data
  responseBody.status = status
  return responseBody
}

export const getQueryParameters = (options: { url: string }) => {
  const url = options.url
  const search = url.split("?")[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

export const getBody = (options: any) => {
  return options.body && JSON.parse(options.body)
}

export const builderSearchResult = (options: any, list: Array<any>, parameter: any = []) => {
  const { page, pageSize, sortField, sortOrder } = getQueryParameters(options)

  if (parameter) {
    parameter.forEach((p: any) => {
      if (p.op === "ne") {
        list = list.filter((u) => !p.value || u[p.name] !== p.value)
      } else if (p.op === "gt") {
        list = list.filter((u) => !p.value || u[p.name] > p.value)
      } else if (p.op === "lt") {
        list = list.filter((u) => !p.value || u[p.name] < p.value)
      } else if (p.op === "ge") {
        list = list.filter((u) => !p.value || u[p.name] >= p.value)
      } else if (p.op === "le") {
        list = list.filter((u) => !p.value || u[p.name] <= p.value)
      } else if (p.op === "lk") {
        list = list.filter((u) => !p.value || u[p.name].includes(p.value))
      } else if (p.op === "nk") {
        list = list.filter((u) => !p.value || !u[p.name].includes(p.value))
      } else if (p.op === "in") {
        list = list.filter((u) => !(p.value && p.value.length > 0) || p.value.split(",").includes(u[p.name]))
      } else if (p.op === "ni") {
        list = list.filter((u) => !(p.value && p.value.length > 0) || !p.value.split(",").includes(u[p.name]))
      } else {
        list = list.filter((u) => !p.value || u[p.name] === p.value)
      }
    })
  }

  if (sortField && sortOrder) {
    list = list.sort(function (a, b) {
      return a[`${sortField}`].length - b[`${sortField}`].length
    })
    if (sortOrder === "descend") {
      list.reverse()
    }
  }

  const total = list.length

  if (pageSize > 0) {
    list = list.filter((item, index) => index < pageSize * page && index >= pageSize * (page - 1))
  }

  return builder(
    {
      rows: list,
      pageSize: pageSize,
      page: page,
      total: total,
    },
    "数据查询成功！",
    true,
  )
}
