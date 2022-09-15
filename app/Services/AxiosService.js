// @ts-ignore
export const GiphyServer = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
  timeout: 4000,
  params: { api_key: 'W9m3HbtWNVcnPg459tVMcPrKvqwgvnWh' }
})

// @ts-ignore
export const SandboxServer = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 2500
})