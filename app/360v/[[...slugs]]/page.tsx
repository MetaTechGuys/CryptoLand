import { PagePropsWithOptionalParams } from '@/utils/next'
import VTourClient from './client'
import TourData, { getVTour } from '@/data/tours'
import { notFound } from 'next/navigation'

export default async function VTourPage({
  params,
}: PagePropsWithOptionalParams<'slugs'>) {
  const { slugs } = await params
  const uid = slugs?.[0] ?? ''
  const tourData = TourData.find((td) => uid === td.uid)
  if (!tourData) {
    return notFound()
  }
  const vTourData = getVTour(tourData)

  return <VTourClient tour={vTourData} />
}
