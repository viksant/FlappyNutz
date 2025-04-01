import Parent from '../abstracts/button-event-handler';
import SpriteDestructor from '../lib/sprite-destructor';
import Sfx from './sfx';
import { rescaleDim } from '../utils';

export default class PlayButton extends Parent {
  protected callback?: IEmptyFunction;
  public x: number = 0;
  public y: number = 0;
  public width: number = 0;
  public height: number = 0;

  constructor() {
    super();
    this.initialWidth = 0.24;
    this.coordinate.x = 0.5;
    this.coordinate.y = 0.45;
    this.active = true;
  }

  public init(): void {
    this.img = SpriteDestructor.asset('btn-play');
  }

  public setCallback(cb: IEmptyFunction): void {
    this.callback = cb;
  }

  public click(): void {
    if (typeof this.callback === 'function') {
      this.callback();
    }
  }

  public Update(): void {
    this.reset();

    if (this.isHovered) {
      this.move({
        x: 0,
        y: 0.004
      });
    }

    super.Update();
  }

  public Display(ctx: CanvasRenderingContext2D): void {
    const xLoc = this.calcCoord.x;
    const yLoc = this.calcCoord.y;
    const xRad = this.dimension.width / 2;
    const yRad = this.dimension.height / 2;

    ctx.drawImage(this.img!, xLoc - xRad, yLoc - yRad, xRad * 2, yRad * 2);
  }

  public resize({ width, height }: IDimension): void {
    super.resize({ width, height });
    
    const scaled = rescaleDim(
      { width: this.img!.width, height: this.img!.height },
      { width: this.canvasSize.width * this.initialWidth }
    );
    
    this.width = scaled.width;
    this.height = scaled.height;
    
    this.x = this.canvasSize.width * this.coordinate.x - scaled.width / 2;
    this.y = this.canvasSize.height * this.coordinate.y - scaled.height / 2;
  }

  public mouseUp({ x, y }: ICoordinate): void {
    if (!this.isInRange({ x, y })) return;
    
    console.log('Botón Play clickeado');
    
    Sfx.swoosh();
    
    if (typeof this.callback === 'function') {
      console.log('Ejecutando callback del botón Play');
      this.callback();
    } else {
      console.error('El callback del botón Play no está definido');
    }
  }
}
