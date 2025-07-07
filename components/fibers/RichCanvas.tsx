import { CameraProps, Canvas, CanvasProps } from '@react-three/fiber'
import { type PropsWithChildren } from 'react'

const camera: CameraProps = {
  fov: 30,
  near: 5,
  far: 15,
  position: [0, 0, 10],
}

export default function RichCanvas({
  children,
  ...props
}: PropsWithChildren<CanvasProps>) {
  return (
    <Canvas key={JSON.stringify(camera)} {...props} camera={camera}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      {children}
    </Canvas>
  )
}
