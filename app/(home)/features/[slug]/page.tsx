import featuresData from '@/data/feature'
import FeatureClient from './client'
import { PagePropsWithParams } from '@/utils/next'
import { BackEdge } from '@/components/BackEdge'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function FeaturePage({
  params,
}: PagePropsWithParams<'slug'>) {
  const { slug } = await params
  const feature = featuresData.find((f) => f.id === slug)
  if (!feature) {
    notFound()
  }
  return (
    <>
      <Link href="/features" className="contents">
        <BackEdge name="features" />
      </Link>
      <FeatureClient feature={feature} />
    </>
  )
}
