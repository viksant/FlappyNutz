import ParentClass from '../abstracts/parent-class';
import SpriteDestructor from '../lib/sprite-destructor';
import { openInNewTab, rescaleDim } from '../utils';

export default class SocialIcons extends ParentClass {
  private dexLogo: HTMLImageElement | undefined;
  private telegramLogo: HTMLImageElement | undefined;
  private xLogo: HTMLImageElement | undefined;
  private iconSize: number = 0;
  private padding: number = 120; // Padding desde el fondo (120px)
  private spacing: number = 30; // Aumentado el espacio entre iconos
  
  constructor() {
    super();
    this.dexLogo = void 0;
    this.telegramLogo = void 0;
    this.xLogo = void 0;
  }
  
  public init(): void {
    this.dexLogo = SpriteDestructor.asset('logo-dex');
    this.telegramLogo = SpriteDestructor.asset('logo-telegram');
    this.xLogo = SpriteDestructor.asset('logo-x');
  }
  
  public resize({ width, height }: IDimension): void {
    super.resize({ width, height });
    // Aumentar 5 veces el tamaño de los iconos
    this.iconSize = Math.min(width * 0.15, 175); // 5 veces más grande (35px * 5 = 175px)
  }
  
  // Implementando el método abstracto Update
  public Update(): void {
    // No necesitamos actualizar nada en cada frame
  }
  
  public Display(context: CanvasRenderingContext2D): void {
    if (!this.dexLogo || !this.telegramLogo || !this.xLogo) return;
    
    const totalWidth = (this.iconSize * 3) + (this.spacing * 2);
    const startX = (this.canvasSize.width - totalWidth) / 2;
    const y = this.canvasSize.height - this.padding - this.iconSize;
    
    // Dibujar Dex
    this.drawIcon(context, this.dexLogo, startX, y);
    
    // Dibujar Telegram
    this.drawIcon(context, this.telegramLogo, startX + this.iconSize + this.spacing, y);
    
    // Dibujar X
    this.drawIcon(context, this.xLogo, startX + (this.iconSize * 2) + (this.spacing * 2), y);
  }
  
  private drawIcon(context: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number): void {
    const scaled = rescaleDim(
      { width: img.width, height: img.height },
      { width: this.iconSize }
    );
    
    context.drawImage(img, x, y, scaled.width, scaled.height);
  }
  
  public mouseDown({ x, y }: ICoordinate): void {
    const iconY = this.canvasSize.height - this.padding - this.iconSize;
    if (y < iconY || y > iconY + this.iconSize) return;
    
    const totalWidth = (this.iconSize * 3) + (this.spacing * 2);
    const startX = (this.canvasSize.width - totalWidth) / 2;
    
    // Verificar click en Dex
    if (x >= startX && x <= startX + this.iconSize) {
      this.isClicked = true;
      this.clickedIcon = 'dex';
    }
    // Verificar click en Telegram
    else if (x >= startX + this.iconSize + this.spacing && x <= startX + (this.iconSize * 2) + this.spacing) {
      this.isClicked = true;
      this.clickedIcon = 'telegram';
    }
    // Verificar click en X
    else if (x >= startX + (this.iconSize * 2) + (this.spacing * 2) && x <= startX + (this.iconSize * 3) + (this.spacing * 2)) {
      this.isClicked = true;
      this.clickedIcon = 'x';
    }
  }
  
  public mouseUp({ x, y }: ICoordinate): void {
    if (!this.isClicked) return;
    
    const iconY = this.canvasSize.height - this.padding - this.iconSize;
    if (y < iconY || y > iconY + this.iconSize) {
      this.isClicked = false;
      return;
    }
    
    const totalWidth = (this.iconSize * 3) + (this.spacing * 2);
    const startX = (this.canvasSize.width - totalWidth) / 2;
    
    // Verificar si el mouseUp está sobre el mismo icono que el mouseDown
    if (this.clickedIcon === 'dex' && x >= startX && x <= startX + this.iconSize) {
      openInNewTab('https://dexscreener.com/abstract/0x805b97271457ab095ae43da25a45289df66ea0c5');
    }
    else if (this.clickedIcon === 'telegram' && x >= startX + this.iconSize + this.spacing && x <= startX + (this.iconSize * 2) + this.spacing) {
      openInNewTab('https://t.me/Nutztelegramportal');
    }
    else if (this.clickedIcon === 'x' && x >= startX + (this.iconSize * 2) + (this.spacing * 2) && x <= startX + (this.iconSize * 3) + (this.spacing * 2)) {
      openInNewTab('https://x.com/NutzonAbstract');
    }
    
    this.isClicked = false;
    this.clickedIcon = '';
  }
  
  private isClicked: boolean = false;
  private clickedIcon: string = '';
} 