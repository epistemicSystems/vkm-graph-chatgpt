import { createElement as h } from '@use-gpu/live'
import type { LiveElement } from '@use-gpu/live'
import { Plot, Cartesian, Point } from '@use-gpu/plot'
import { WebGPU, AutoCanvas } from '@use-gpu/webgpu'

export interface ClusterSceneProps {
  canvas: HTMLCanvasElement
  positions: Float32Array
  colors: Float32Array
  sizes: Float32Array
}

const fallbackScene = () => h(() => null, {})

export const buildConceptClusterScene = ({
  canvas,
  positions,
  colors,
  sizes,
}: ClusterSceneProps): LiveElement =>
  h(WebGPU, {
    fallback: fallbackScene(),
    children: [
      h(AutoCanvas, { canvas }),
      h(Plot, {
        children: h(Cartesian, {
          range: [
            [-1.1, 1.1],
            [-1.1, 1.1],
            [-1.0, 1.0],
          ],
          children: h(Point, { positions, colors, sizes, shaded: false }),
        }),
      }),
    ],
  })
