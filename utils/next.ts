export type PagePropsWithParams<K extends string> = {
  params: Promise<Record<K, string>>
}
