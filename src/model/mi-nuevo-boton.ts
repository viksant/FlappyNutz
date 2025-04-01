import ParentClass from '../abstracts/parent-class';

export default class MiNuevoBoton extends ParentClass {
  private img: HTMLImageElement | undefined;
  
  constructor() {
    super();
    this.img = void 0;
  }
  
  public init(): void {
    // Comentado para evitar errores ya que este es solo un ejemplo
    // this.img = SpriteDestructor.asset('nombre-de-tu-elemento');
  }
  
  // Implementando los métodos abstractos requeridos
  public Update(): void {
    // No necesitamos actualizar nada en cada frame
  }
  
  public Display(context: CanvasRenderingContext2D): void {
    // Este es un componente de ejemplo, no hace nada
    if (!this.img) return;
    
    // Código de ejemplo para dibujar el botón
    context.drawImage(this.img, 0, 0);
  }
} 