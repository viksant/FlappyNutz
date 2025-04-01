import ParentClass from '../abstracts/parent-class';
import SpriteDestructor from '../lib/sprite-destructor';

export default class MiNuevoBoton extends ParentClass {
  private img: HTMLImageElement | undefined;
  
  public init(): void {
    this.img = SpriteDestructor.asset('nombre-de-tu-elemento');
  }
  
  // ... resto del código ...
} 