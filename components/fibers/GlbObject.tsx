import { useFrame, useLoader } from '@react-three/fiber'
import { useRef, type ComponentProps } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'
import { usePointerRef } from '../bits/Cursor'

export interface GlbObjectProps extends ComponentProps<'group'> {
  src: string
  autoRotate?: true
}

export default function GlbObject({
  src,
  autoRotate,
  ...props
}: GlbObjectProps) {
  const rnd = useRef({ r1: Math.random() * 999, r2: Math.random() * 99 })
  const { nodes } = useLoader(GLTFLoader, src)
  const root = useRef<THREE.Mesh>(null)
  const group = useRef<THREE.Mesh>(null)
  const { x, y } = usePointerRef()

  useFrame((_s, delta) => {
    const dx = x.get()
    const dy = y.get()
    if (root.current) {
      if (autoRotate) {
        root.current.rotation.y += delta
        root.current.rotation.x = Math.sin(root.current.rotation.y) / 3
      } else {
        root.current.rotation.x = dy / (1000 + rnd.current.r1)
        root.current.rotation.y = dx / (500 + rnd.current.r2)
        if (group.current) {
          group.current.rotation.y += (delta / 10) % (Math.PI * 2)
        }
      }
    }
  })

  return (
    <group {...props} ref={root}>
      <group ref={group}>
        {Object.values(nodes)
          .filter((n): n is THREE.Mesh => n.type === 'Mesh')
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .map(({ children, scale, ...props }) => (
            <mesh key={props.uuid} {...props} />
          ))}
      </group>
    </group>
  )
}
