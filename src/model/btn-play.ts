import Parent from '../abstracts/button-event-handler';
import Sfx from './sfx';
import SpriteDestructor from '../lib/sprite-destructor';
import { rescaleDim } from '../utils';

export default class PlayButton extends Parent {
  protected callback?: IEmptyFunction;
  public x: number = 0;
  public y: number = 0;
  public width: number = 0;
  public height: number = 0;

  constructor() {
    super();
    this.initialWidth = 0.38;
    this.coordinate = {
      x: 0.5,
      y: 0.65
    };
    this.active = true;
  }

  public click(): void {
    Sfx.swoosh();
    this.callback?.();
  }

  public onClick(callback: IEmptyFunction): void {
    this.callback = callback;
  }

  public init(): void {
    this.img = SpriteDestructor.asset('btn-play');
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

  public Display(context: CanvasRenderingContext2D): void {
    const xLoc = this.calcCoord.x;
    const yLoc = this.calcCoord.y;
    const xRad = this.dimension.width / 2;
    const yRad = this.dimension.height / 2;

    context.drawImage(this.img!, xLoc - xRad, yLoc - yRad, xRad * 2, yRad * 2);
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
}
