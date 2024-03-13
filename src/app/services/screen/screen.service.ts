import { EventEmitter, Injectable } from '@angular/core';

enum ScreenBreakpoints {
	PHONE = 320,
	TABLET = 768,
	DESKTOP = 1024,
    MONITOR = 1280,
}

/** Tipos de tamanho de tela. */
export type ScreenSizesType = 'phone' | 'tablet' | 'desktop' | 'monitor';

@Injectable({ providedIn: 'root' })
export class ScreenService {
	/** Controla o evento 'changed'. */
	private changed = new EventEmitter();
	/** Todos os tamanhos. O atual está como 'true'. */
	private sizes!: ScreenSizes;
	/** O tamanho atual da tela. */
	private currentSize!: ScreenSizesType;

	/** Executado sempre que o tamanho da tela é alterado. */
	_changed = this.changed.asObservable();

	constructor() {
		this.setSizes();
		this.setCurrentSize();

		window.addEventListener('resize', () => {
			this.setSizes();
			this.setCurrentSize();
			this.changed.next(null);
		});
	}

	/** Valida se a tela atual é pequena ( Mobile ). */
	screenIsMobile() {
		return this.currentSize === 'phone';
	}

	/** Retorna os tamanhos conforme a largura (width) especificado. */
	private getSizes(width: number): ScreenSizes {
		return {
			phone: width < ScreenBreakpoints.TABLET,
			tablet: width >= ScreenBreakpoints.TABLET && width < ScreenBreakpoints.DESKTOP,
			desktop: width >= ScreenBreakpoints.DESKTOP && width < ScreenBreakpoints.MONITOR,
			monitor: width > ScreenBreakpoints.MONITOR,
		};
	}

	/** Retorna qual é o tamanho atual conforme os tamanhos especificados. */
	private getCurrentSize(sizes: ScreenSizes): ScreenSizesType {
		if (sizes.phone) return 'phone';
		if (sizes.tablet) return 'tablet';
		if (sizes.desktop) return 'desktop';
		return 'monitor';
	}

	/** Defines os tamanhos */
	private setSizes() {
		this.sizes = this.getSizes(window.innerWidth);
	}

	/** Define o tamanho atual. */
	private setCurrentSize() {
		this.currentSize = this.getCurrentSize(this.sizes);
	}
}

export interface ScreenSizes {
	/** Indica quando a tela está no tamanho Mobile. */
	phone: boolean;
	/** Indica quando a tela está no tamanho Tablet. */
	tablet: boolean;
	/** Indica quando a tela está no tamanho Desktop. */
	desktop: boolean;
	/** Indica quando a tela está no tamanho monitor. */
	monitor: boolean;
}
