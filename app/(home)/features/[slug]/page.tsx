import featuresData from '@/data/feature'
import FeatureClient from './client'
import { PagePropsWithParams } from '@/utils/next'

export default async function FeaturePage({
  params,
}: PagePropsWithParams<'slug'>) {
  const { slug } = await params
  const feature = featuresData.find((f) => f.key === slug)!
  return <FeatureClient feature={feature} />
}
