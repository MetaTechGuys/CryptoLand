export type PagePropsWithParams<K extends string> = {
  params: Promise<Record<K, string>>
}

export type PagePropsWithOptionalParams<K extends string> = {
  params: Promise<Record<K, string[]>>
}
