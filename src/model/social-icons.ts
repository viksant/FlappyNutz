import ParentClass from '../abstracts/parent-class';
import { openInNewTab } from '../utils';

// Importar los PNGs directamente
import dexPng from '../assets/dex.png';
import telegramPng from '../assets/telegram.png';
import xPng from '../assets/x.png';

export default class SocialIcons extends ParentClass {
  private dexLogo: HTMLImageElement;
  private telegramLogo: HTMLImageElement;
  private xLogo: HTMLImageElement;
  private iconSize: number = 0;
  private padding: number = 120; // Padding desde el fondo (120px)
  private spacing: number = 30; // Aumentado el espacio entre iconos
  private iconsLoaded: boolean = false;
  
  constructor() {
    super();
    // Crear elementos de imagen
    this.dexLogo = new Image();
    this.telegramLogo = new Image();
    this.xLogo = new Image();
    
    // Agregar event listeners para saber cuándo se cargan las imágenes
    this.dexLogo.onload = () => this.checkIfAllImagesLoaded();
    this.dexLogo.onerror = (e) => console.error('Error cargando dex.png', e);
    
    this.telegramLogo.onload = () => this.checkIfAllImagesLoaded();
    this.telegramLogo.onerror = (e) => console.error('Error cargando telegram.png', e);
    
    this.xLogo.onload = () => this.checkIfAllImagesLoaded();
    this.xLogo.onerror = (e) => console.error('Error cargando x.png', e);
  }
  
  private checkIfAllImagesLoaded(): void {
    if (this.dexLogo.complete && this.telegramLogo.complete && this.xLogo.complete) {
      this.iconsLoaded = true;
    }
  }
  
  public init(): void {
    // Cargar las imágenes PNG directamente
    this.dexLogo.src = dexPng;
    this.telegramLogo.src = telegramPng;
    this.xLogo.src = xPng;
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
    if (!this.iconsLoaded) return;
    
    const totalWidth = (this.iconSize * 3) + (this.spacing * 2);
    const startX = (this.canvasSize.width - totalWidth) / 2;
    const y = this.canvasSize.height - this.padding - this.iconSize;
    
    try {
      // Dibujar Dex
      context.drawImage(this.dexLogo, startX, y, this.iconSize, this.iconSize);
      
      // Dibujar Telegram
      context.drawImage(this.telegramLogo, startX + this.iconSize + this.spacing, y, this.iconSize, this.iconSize);
      
      // Dibujar X
      context.drawImage(this.xLogo, startX + (this.iconSize * 2) + (this.spacing * 2), y, this.iconSize, this.iconSize);
    } catch (error) {
      console.error('Error al dibujar iconos PNG:', error);
    }
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