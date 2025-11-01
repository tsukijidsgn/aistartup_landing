declare module 'ogl' {
  export interface RendererOptions {
    canvas?: HTMLCanvasElement;
    width?: number;
    height?: number;
    dpr?: number;
    alpha?: boolean;
    depth?: boolean;
    stencil?: boolean;
    antialias?: boolean;
    premultipliedAlpha?: boolean;
    preserveDrawingBuffer?: boolean;
    powerPreference?: string;
    autoClear?: boolean;
    webgl?: number;
  }

  export class Renderer {
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    canvas: HTMLCanvasElement;
    dpr: number;
    extensions: any;
    extensionsCache: any;
    state: any;
    attributeState: any;
    bounds: { width: number; height: number };
    extensionsCache: any;

    constructor(options?: RendererOptions);
    setSize(width: number, height: number): void;
    render(scene: Mesh, camera?: Camera): void;
    getExtension(extension: string): any;
    reset(): void;
  }

  export class Program {
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    uniforms: any;
    vertexShader: string;
    fragmentShader: string;
    program: WebGLProgram;

    constructor(
      gl: WebGLRenderingContext | WebGL2RenderingContext,
      options?: {
        vertex?: string;
        fragment?: string;
        uniforms?: any;
      }
    );
    setUniforms(values: any): void;
    use(): void;
    remove(): void;
  }

  export class Mesh {
    id: number;
    geometry: Geometry;
    program: Program;
    mode: number;
    frustumCulled: boolean;
    renderOrder: number;
    modelViewMatrix: any;
    normalMatrix: any;
    worldMatrix: any;
    children: Mesh[];
    parent: Mesh | null;
    position: any;
    scale: any;
    rotation: any;
    quaternion: any;

    constructor(options?: {
      geometry?: Geometry;
      program?: Program;
      mode?: number;
      frustumCulled?: boolean;
      renderOrder?: number;
    });
    setParent(parent: Mesh | null): void;
    addChild(child: Mesh): void;
    removeChild(child: Mesh): void;
    updateMatrixWorld(): void;
    draw(options?: { camera?: Camera }): void;
  }

  export class Geometry {
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    attributes: any;
    index: any;
    id: number;

    constructor(
      gl: WebGLRenderingContext | WebGL2RenderingContext,
      attributes?: any
    );
    setAttribute(name: string, buffer: any): void;
    setIndex(value: any): void;
    remove(): void;
  }

  export class Color {
    r: number;
    g: number;
    b: number;
    a: number;

    constructor(r?: number, g?: number, b?: number, a?: number);
    set(r: number, g?: number, b?: number, a?: number): void;
    copy(color: Color): void;
  }

  export class Triangle {
    a: number[];
    b: number[];
    c: number[];
    normal: number[];

    constructor(a?: number[], b?: number[], c?: number[]);
  }

  export class Camera {
    matrixWorld: any;
    matrixWorldInverse: any;
    projectionMatrix: any;
    viewMatrix: any;
    parent: Mesh | null;
    children: Mesh[];
    position: any;
    scale: any;
    rotation: any;
    quaternion: any;

    updateMatrixWorld(): void;
  }
}

