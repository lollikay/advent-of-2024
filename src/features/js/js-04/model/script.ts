import { getAttributeNameFromAttributeSelector } from './../../../../shared/utils/getAttributeNameFromDataSelector';
import { jsChallengeAttribute } from '@shared/model/constants';

const selectors = Object.freeze({
  container: `[${jsChallengeAttribute}="04"]`,
  panel: '[data-js-panel]',
  resizer: '[data-js-resizer]',
});

const defaultResizerSize = 10;
const minPanelSize = 50;

class Resizer {
  private direction: 'horizontal' | 'vertical' = 'horizontal';
  private container: HTMLElement | null = null;
  private resizerSize: number = defaultResizerSize;
  private leftPanel: HTMLElement | null = null;
  private rightPanel: HTMLElement | null = null;

  private boundOnResize = this.onResize.bind(this);
  private boundOnMouseUp = this.onMouseUp.bind(this);
  private boundOnMouseDown = this.onMouseDown.bind(this);

  constructor(private resizerEl: Element) {
    this.container = this.resizerEl.closest<HTMLElement>(selectors.container);
    this.leftPanel = this.resizerEl.previousElementSibling as HTMLElement;
    this.rightPanel = this.resizerEl.nextElementSibling as HTMLElement;

    this.init();
  }

  private getResizerSize(): number {
    const sizeValue = getComputedStyle(this.resizerEl).getPropertyValue('--width');
    const size = parseInt(sizeValue, 10);
    return isNaN(size) ? defaultResizerSize : size;
  }

  private getPanelSizes(
    possibleLeftPanelSize: number,
    totalSize: number
  ): { leftPanelSize: number; rightPanelSize: number } {
    let leftPanelSize = possibleLeftPanelSize;
    if (leftPanelSize < minPanelSize) {
      leftPanelSize = minPanelSize;
    }
    const maxLeftPanelSize = totalSize - minPanelSize;
    if (leftPanelSize > maxLeftPanelSize) {
      leftPanelSize = maxLeftPanelSize;
    }
    const rightPanelSize = totalSize - leftPanelSize;

    return { leftPanelSize, rightPanelSize };
  }

  private onResize(event: MouseEvent) {
    if (!this.container) {
      return;
    }

    if (!this.leftPanel || !this.rightPanel) {
      return;
    }

    const containerRect = this.container.getBoundingClientRect();
    const totalWidth = containerRect.width - this.resizerSize;
    const totalHeight = containerRect.height - this.resizerSize;

    if (this.direction === 'horizontal') {
      const possibleLeftWidth = event.clientX - containerRect.left;
      const { leftPanelSize, rightPanelSize } = this.getPanelSizes(possibleLeftWidth, totalWidth);

      this.leftPanel.style.width = `${leftPanelSize}px`;
      this.rightPanel.style.width = `${rightPanelSize}px`;

      return;
    }

    const possibleTopHeight = event.clientY - containerRect.top;
    const { leftPanelSize, rightPanelSize } = this.getPanelSizes(possibleTopHeight, totalHeight);

    this.leftPanel.style.height = `${leftPanelSize}px`;
    this.rightPanel.style.height = `${rightPanelSize}px`;
  }

  private onMouseUp() {
    document.removeEventListener('mousemove', this.boundOnResize);
    document.removeEventListener('mouseup', this.boundOnMouseUp);
  }

  private onMouseDown() {
    document.addEventListener('mousemove', this.boundOnResize);
    document.addEventListener('mouseup', this.boundOnMouseUp);
  }

  private init() {
    this.direction =
      this.resizerEl.getAttribute(getAttributeNameFromAttributeSelector(selectors.resizer)) ===
      'horizontal'
        ? 'horizontal'
        : 'vertical';
    this.resizerSize = this.getResizerSize();
    this.resizerEl.addEventListener('mousedown', this.boundOnMouseDown);
  }
}

const entrySelector = `${selectors.container} ${selectors.resizer}`;

export const init = () => {
  document.querySelectorAll(entrySelector).forEach((element) => {
    new Resizer(element);
  });
};
