/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@siemens/ix';


@ProxyCmp({
  inputs: ['ariaLabelCard', 'ariaLabelIcon', 'heading', 'icon', 'selected', 'subheading', 'variant']
})
@Component({
  selector: 'ix-action-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCard', 'ariaLabelIcon', 'heading', 'icon', 'selected', 'subheading', 'variant'],
})
export class IxActionCard {
  protected el: HTMLIxActionCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxActionCard extends Components.IxActionCard {}


@ProxyCmp({
  inputs: ['appSwitchConfig', 'breakpoints', 'forceBreakpoint', 'theme', 'themeSystemAppearance']
})
@Component({
  selector: 'ix-application',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appSwitchConfig', 'breakpoints', 'forceBreakpoint', 'theme', 'themeSystemAppearance'],
})
export class IxApplication {
  protected el: HTMLIxApplicationElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxApplication extends Components.IxApplication {}


@ProxyCmp({
  inputs: ['ariaLabelAppSwitchIconButton', 'ariaLabelMenuExpandIconButton', 'ariaLabelMoreMenuIconButton', 'name', 'showMenu']
})
@Component({
  selector: 'ix-application-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelAppSwitchIconButton', 'ariaLabelMenuExpandIconButton', 'ariaLabelMoreMenuIconButton', 'name', 'showMenu'],
})
export class IxApplicationHeader {
  protected el: HTMLIxApplicationHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['menuToggle', 'openAppSwitch']);
  }
}


export declare interface IxApplicationHeader extends Components.IxApplicationHeader {
  /**
   * Event emitted when the menu toggle button is clicked
   */
  menuToggle: EventEmitter<CustomEvent<boolean>>;
  /**
   * Event emitted when the app switch button is clicked @since 3.0.0
   */
  openAppSwitch: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['a11yLabel', 'extra', 'image', 'initials', 'username']
})
@Component({
  selector: 'ix-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['a11yLabel', 'extra', 'image', 'initials', 'username'],
})
export class IxAvatar {
  protected el: HTMLIxAvatarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxAvatar extends Components.IxAvatar {}


@ProxyCmp({
  inputs: ['applicationName', 'breakpoints', 'forceBreakpoint', 'hideHeader']
})
@Component({
  selector: 'ix-basic-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['applicationName', 'breakpoints', 'forceBreakpoint', 'hideHeader'],
})
export class IxBasicNavigation {
  protected el: HTMLIxBasicNavigationElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxBasicNavigation extends Components.IxBasicNavigation {}


@ProxyCmp({
  inputs: ['collapsed', 'icon', 'label', 'sublabel', 'variant']
})
@Component({
  selector: 'ix-blind',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapsed', 'icon', 'label', 'sublabel', 'variant'],
})
export class IxBlind {
  protected el: HTMLIxBlindElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['collapsedChange']);
  }
}


export declare interface IxBlind extends Components.IxBlind {
  /**
   * Collapsed state changed
   */
  collapsedChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['ariaLabelPreviousButton', 'ghost', 'nextItems', 'visibleItemCount']
})
@Component({
  selector: 'ix-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelPreviousButton', 'ghost', 'nextItems', 'visibleItemCount'],
})
export class IxBreadcrumb {
  protected el: HTMLIxBreadcrumbElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick', 'nextClick']);
  }
}


export declare interface IxBreadcrumb extends Components.IxBreadcrumb {
  /**
   * Crumb item clicked event
   */
  itemClick: EventEmitter<CustomEvent<string>>;
  /**
   * Next item clicked event
   */
  nextClick: EventEmitter<CustomEvent<{ event: UIEvent; item: string }>>;
}


@ProxyCmp({
  inputs: ['ariaLabelButton', 'icon', 'label']
})
@Component({
  selector: 'ix-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelButton', 'icon', 'label'],
})
export class IxBreadcrumbItem {
  protected el: HTMLIxBreadcrumbItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxBreadcrumbItem extends Components.IxBreadcrumbItem {}


@ProxyCmp({
  inputs: ['ariaLabelButton', 'disabled', 'form', 'ghost', 'icon', 'loading', 'outline', 'type', 'variant']
})
@Component({
  selector: 'ix-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelButton', 'disabled', 'form', 'ghost', 'icon', 'loading', 'outline', 'type', 'variant'],
})
export class IxButton {
  protected el: HTMLIxButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxButton extends Components.IxButton {}


@ProxyCmp({
  inputs: ['selected', 'variant']
})
@Component({
  selector: 'ix-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['selected', 'variant'],
})
export class IxCard {
  protected el: HTMLIxCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCard extends Components.IxCard {}


@ProxyCmp({
  inputs: ['ariaLabelExpandButton', 'collapse']
})
@Component({
  selector: 'ix-card-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelExpandButton', 'collapse'],
})
export class IxCardAccordion {
  protected el: HTMLIxCardAccordionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCardAccordion extends Components.IxCardAccordion {}


@ProxyCmp({
})
@Component({
  selector: 'ix-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IxCardContent {
  protected el: HTMLIxCardContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCardContent extends Components.IxCardContent {}


@ProxyCmp({
  inputs: ['ariaLabelExpandButton', 'collapse', 'hideShowAll', 'i18nMoreCards', 'i18nShowAll', 'label', 'listStyle', 'showAllCount', 'suppressOverflowHandling']
})
@Component({
  selector: 'ix-card-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelExpandButton', 'collapse', 'hideShowAll', 'i18nMoreCards', 'i18nShowAll', 'label', 'listStyle', 'showAllCount', 'suppressOverflowHandling'],
})
export class IxCardList {
  protected el: HTMLIxCardListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['collapseChanged', 'showAllClick', 'showMoreCardClick']);
  }
}


export declare interface IxCardList extends Components.IxCardList {
  /**
   * Fire event when the collapse state is changed by the user
   */
  collapseChanged: EventEmitter<CustomEvent<boolean>>;
  /**
   * Fire event when the collapse state is changed by the user
   */
  showAllClick: EventEmitter<CustomEvent<{ nativeEvent: MouseEvent; }>>;
  /**
   * Fire event when the show more card is clicked.
   */
  showMoreCardClick: EventEmitter<CustomEvent<{ nativeEvent: MouseEvent; }>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ix-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IxCardTitle {
  protected el: HTMLIxCardTitleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCardTitle extends Components.IxCardTitle {}


@ProxyCmp({
  inputs: ['ariaLabelFilterInput', 'ariaLabelOperatorButton', 'ariaLabelResetButton', 'categories', 'disabled', 'filterState', 'hideIcon', 'i18nPlainText', 'icon', 'labelCategories', 'nonSelectableCategories', 'placeholder', 'readonly', 'repeatCategories', 'staticOperator', 'suggestions']
})
@Component({
  selector: 'ix-category-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelFilterInput', 'ariaLabelOperatorButton', 'ariaLabelResetButton', 'categories', 'disabled', 'filterState', 'hideIcon', 'i18nPlainText', 'icon', 'labelCategories', 'nonSelectableCategories', 'placeholder', 'readonly', 'repeatCategories', 'staticOperator', 'suggestions'],
})
export class IxCategoryFilter {
  protected el: HTMLIxCategoryFilterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['categoryChanged', 'inputChanged', 'filterChanged', 'filterCleared']);
  }
}


import type { InputState as IIxCategoryFilterInputState } from '@siemens/ix';
import type { FilterState as IIxCategoryFilterFilterState } from '@siemens/ix';

export declare interface IxCategoryFilter extends Components.IxCategoryFilter {
  /**
   * Event dispatched whenever a category gets selected in the dropdown
   */
  categoryChanged: EventEmitter<CustomEvent<string>>;
  /**
   * Event dispatched whenever the text input changes.
   */
  inputChanged: EventEmitter<CustomEvent<IIxCategoryFilterInputState>>;
  /**
   * Event dispatched whenever the filter state changes.
   */
  filterChanged: EventEmitter<CustomEvent<IIxCategoryFilterFilterState>>;
  /**
   * Event dispatched whenever the filter gets cleared.
   */
  filterCleared: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'indeterminate', 'label', 'name', 'required', 'value']
})
@Component({
  selector: 'ix-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'indeterminate', 'label', 'name', 'required', 'value'],
})
export class IxCheckbox {
  protected el: HTMLIxCheckboxElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange', 'valueChange', 'ixBlur']);
  }
}


export declare interface IxCheckbox extends Components.IxCheckbox {
  /**
   * Event emitted when the checked state of the checkbox changes
   */
  checkedChange: EventEmitter<CustomEvent<boolean>>;
  /**
   * Event emitted when the value of the checkbox changes
   */
  valueChange: EventEmitter<CustomEvent<string>>;
  /**
   * Event emitted when the checkbox is blurred
   */
  ixBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['direction', 'helperText', 'infoText', 'invalidText', 'label', 'showTextAsTooltip', 'validText', 'warningText']
})
@Component({
  selector: 'ix-checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'helperText', 'infoText', 'invalidText', 'label', 'showTextAsTooltip', 'validText', 'warningText'],
})
export class IxCheckboxGroup {
  protected el: HTMLIxCheckboxGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCheckboxGroup extends Components.IxCheckboxGroup {}


@ProxyCmp({
  inputs: ['active', 'ariaLabelCloseButton', 'background', 'centerContent', 'chipColor', 'closable', 'icon', 'outline', 'tooltipText', 'variant']
})
@Component({
  selector: 'ix-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'ariaLabelCloseButton', 'background', 'centerContent', 'chipColor', 'closable', 'icon', 'outline', 'tooltipText', 'variant'],
})
export class IxChip {
  protected el: HTMLIxChipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeChip']);
  }
}


export declare interface IxChip extends Components.IxChip {
  /**
   * Fire event if close button is clicked
   */
  closeChip: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['size', 'sizeLg', 'sizeMd', 'sizeSm']
})
@Component({
  selector: 'ix-col',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'sizeLg', 'sizeMd', 'sizeSm'],
})
export class IxCol {
  protected el: HTMLIxColElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCol extends Components.IxCol {}


@ProxyCmp({
})
@Component({
  selector: 'ix-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IxContent {
  protected el: HTMLIxContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxContent extends Components.IxContent {}


@ProxyCmp({
  inputs: ['hasBackButton', 'headerSubtitle', 'headerTitle', 'variant']
})
@Component({
  selector: 'ix-content-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hasBackButton', 'headerSubtitle', 'headerTitle', 'variant'],
})
export class IxContentHeader {
  protected el: HTMLIxContentHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['backButtonClick']);
  }
}


export declare interface IxContentHeader extends Components.IxContentHeader {
  /**
   * Triggered when back button is clicked
   */
  backButtonClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['helperText', 'infoText', 'invalidText', 'label', 'required', 'showTextAsTooltip', 'validText', 'warningText']
})
@Component({
  selector: 'ix-custom-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['helperText', 'infoText', 'invalidText', 'label', 'required', 'showTextAsTooltip', 'validText', 'warningText'],
})
export class IxCustomField {
  protected el: HTMLIxCustomFieldElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCustomField extends Components.IxCustomField {}


@ProxyCmp({
  inputs: ['ariaLabelDropdownButton', 'customRangeAllowed', 'dateRangeId', 'dateRangeOptions', 'disabled', 'format', 'from', 'ghost', 'i18nCustomItem', 'i18nDone', 'i18nNoRange', 'loading', 'locale', 'maxDate', 'minDate', 'outline', 'range', 'showWeekNumbers', 'to', 'variant', 'weekStartIndex'],
  methods: ['getDateRange']
})
@Component({
  selector: 'ix-date-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelDropdownButton', 'customRangeAllowed', 'dateRangeId', 'dateRangeOptions', 'disabled', 'format', 'from', 'ghost', 'i18nCustomItem', 'i18nDone', 'i18nNoRange', 'loading', 'locale', 'maxDate', 'minDate', 'outline', 'range', 'showWeekNumbers', 'to', 'variant', 'weekStartIndex'],
})
export class IxDateDropdown {
  protected el: HTMLIxDateDropdownElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dateRangeChange']);
  }
}


import type { DateRangeChangeEvent as IIxDateDropdownDateRangeChangeEvent } from '@siemens/ix';

export declare interface IxDateDropdown extends Components.IxDateDropdown {
  /**
   * EventEmitter for date range change events.

This event is emitted when the date range changes within the component.
The event payload contains information about the selected date range.
   */
  dateRangeChange: EventEmitter<CustomEvent<IIxDateDropdownDateRangeChangeEvent>>;
}


@ProxyCmp({
  inputs: ['ariaLabelCalendarButton', 'ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'disabled', 'format', 'helperText', 'i18nErrorDateUnparsable', 'infoText', 'invalidText', 'label', 'locale', 'maxDate', 'minDate', 'name', 'placeholder', 'readonly', 'required', 'showTextAsTooltip', 'showWeekNumbers', 'validText', 'value', 'warningText', 'weekStartIndex'],
  methods: ['getNativeInputElement', 'focusInput']
})
@Component({
  selector: 'ix-date-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCalendarButton', 'ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'disabled', 'format', 'helperText', 'i18nErrorDateUnparsable', 'infoText', 'invalidText', 'label', 'locale', 'maxDate', 'minDate', 'name', 'placeholder', 'readonly', 'required', 'showTextAsTooltip', 'showWeekNumbers', 'validText', 'value', 'warningText', 'weekStartIndex'],
})
export class IxDateInput {
  protected el: HTMLIxDateInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'validityStateChange']);
  }
}


import type { DateInputValidityState as IIxDateInputDateInputValidityState } from '@siemens/ix';

export declare interface IxDateInput extends Components.IxDateInput {
  /**
   * Input change event.
   */
  valueChange: EventEmitter<CustomEvent<string | undefined>>;
  /**
   * Validation state change event.
   */
  validityStateChange: EventEmitter<CustomEvent<IIxDateInputDateInputValidityState>>;
}


@ProxyCmp({
  inputs: ['ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'corners', 'format', 'from', 'i18nDone', 'locale', 'maxDate', 'minDate', 'range', 'showWeekNumbers', 'to', 'weekStartIndex'],
  methods: ['getCurrentDate']
})
@Component({
  selector: 'ix-date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'corners', 'format', 'from', 'i18nDone', 'locale', 'maxDate', 'minDate', 'range', 'showWeekNumbers', 'to', 'weekStartIndex'],
})
export class IxDatePicker {
  protected el: HTMLIxDatePickerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dateChange', 'dateRangeChange', 'dateSelect']);
  }
}


import type { DateChangeEvent as IIxDatePickerDateChangeEvent } from '@siemens/ix';

export declare interface IxDatePicker extends Components.IxDatePicker {
  /**
   * Emitted when the date selection changes. The `DateChangeEvent` contains `from` and `to` properties.
The property strings are formatted according to the `format` property and not affected by the `locale` property.
The locale applied is always `en-US`.
Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string`
   */
  dateChange: EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>;
  /**
   * Emitted when the date range selection changes and the component is in range mode. The `DateChangeEvent` contains `from` and `to` properties.
The property strings are formatted according to the `format` property and not affected by the `locale` property.
The locale applied is always `en-US`.
   */
  dateRangeChange: EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>;
  /**
   * Emitted when the selection is confirmed via the date select button. The `DateChangeEvent` contains `from` and `to` properties.
The property strings are formatted according to the `format` property and not affected by the `locale` property.
The locale applied is always `en-US`.
   */
  dateSelect: EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>;
}


@ProxyCmp({
  inputs: ['ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'dateFormat', 'from', 'i18nDone', 'i18nTime', 'locale', 'maxDate', 'minDate', 'range', 'showHour', 'showMinutes', 'showSeconds', 'showTimeReference', 'showWeekNumbers', 'time', 'timeFormat', 'timeReference', 'to', 'weekStartIndex']
})
@Component({
  selector: 'ix-datetime-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'dateFormat', 'from', 'i18nDone', 'i18nTime', 'locale', 'maxDate', 'minDate', 'range', 'showHour', 'showMinutes', 'showSeconds', 'showTimeReference', 'showWeekNumbers', 'time', 'timeFormat', 'timeReference', 'to', 'weekStartIndex'],
})
export class IxDatetimePicker {
  protected el: HTMLIxDatetimePickerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['timeChange', 'dateChange', 'dateSelect']);
  }
}


import type { DateTimeDateChangeEvent as IIxDatetimePickerDateTimeDateChangeEvent } from '@siemens/ix';
import type { DateTimeSelectEvent as IIxDatetimePickerDateTimeSelectEvent } from '@siemens/ix';

export declare interface IxDatetimePicker extends Components.IxDatetimePicker {
  /**
   * Time change
   */
  timeChange: EventEmitter<CustomEvent<string>>;
  /**
   * Date change
   */
  dateChange: EventEmitter<CustomEvent<IIxDatetimePickerDateTimeDateChangeEvent>>;
  /**
   * Datetime selection event is fired after confirm button is pressed
   */
  dateSelect: EventEmitter<CustomEvent<IIxDatetimePickerDateTimeSelectEvent>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ix-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IxDivider {
  protected el: HTMLIxDividerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDivider extends Components.IxDivider {}


@ProxyCmp({
  inputs: ['ariaLabelCloseButton', 'closeOnClickOutside', 'fullHeight', 'maxWidth', 'minWidth', 'show', 'width'],
  methods: ['toggleDrawer']
})
@Component({
  selector: 'ix-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseButton', 'closeOnClickOutside', 'fullHeight', 'maxWidth', 'minWidth', 'show', 'width'],
})
export class IxDrawer {
  protected el: HTMLIxDrawerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['open', 'drawerClose']);
  }
}


export declare interface IxDrawer extends Components.IxDrawer {
  /**
   * Fire event after drawer is open
   */
  open: EventEmitter<CustomEvent<any>>;
  /**
   * Fire event after drawer is close
   */
  drawerClose: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['anchor', 'closeBehavior', 'header', 'placement', 'positioningStrategy', 'show', 'suppressAutomaticPlacement', 'trigger'],
  methods: ['updatePosition']
})
@Component({
  selector: 'ix-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anchor', 'closeBehavior', 'header', 'placement', 'positioningStrategy', 'show', 'suppressAutomaticPlacement', 'trigger'],
})
export class IxDropdown {
  protected el: HTMLIxDropdownElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['showChanged']);
  }
}


export declare interface IxDropdown extends Components.IxDropdown {
  /**
   * Fire event after visibility of dropdown has changed
   */
  showChanged: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['ariaLabelDropdownButton', 'closeBehavior', 'disabled', 'ghost', 'icon', 'label', 'outline', 'placement', 'variant']
})
@Component({
  selector: 'ix-dropdown-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelDropdownButton', 'closeBehavior', 'disabled', 'ghost', 'icon', 'label', 'outline', 'placement', 'variant'],
})
export class IxDropdownButton {
  protected el: HTMLIxDropdownButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDropdownButton extends Components.IxDropdownButton {}


@ProxyCmp({
  inputs: ['label']
})
@Component({
  selector: 'ix-dropdown-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
})
export class IxDropdownHeader {
  protected el: HTMLIxDropdownHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDropdownHeader extends Components.IxDropdownHeader {}


@ProxyCmp({
  inputs: ['ariaLabelButton', 'ariaLabelIcon', 'checked', 'disabled', 'hover', 'icon', 'label']
})
@Component({
  selector: 'ix-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelButton', 'ariaLabelIcon', 'checked', 'disabled', 'hover', 'icon', 'label'],
})
export class IxDropdownItem {
  protected el: HTMLIxDropdownItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDropdownItem extends Components.IxDropdownItem {}


@ProxyCmp({
})
@Component({
  selector: 'ix-dropdown-quick-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IxDropdownQuickActions {
  protected el: HTMLIxDropdownQuickActionsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDropdownQuickActions extends Components.IxDropdownQuickActions {}


@ProxyCmp({
  inputs: ['action', 'ariaLabelEmptyStateIcon', 'header', 'icon', 'layout', 'subHeader']
})
@Component({
  selector: 'ix-empty-state',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['action', 'ariaLabelEmptyStateIcon', 'header', 'icon', 'layout', 'subHeader'],
})
export class IxEmptyState {
  protected el: HTMLIxEmptyStateElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['actionClick']);
  }
}


export declare interface IxEmptyState extends Components.IxEmptyState {
  /**
   * Empty state action click event
   */
  actionClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['animated', 'chevron', 'compact', 'itemHeight']
})
@Component({
  selector: 'ix-event-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'chevron', 'compact', 'itemHeight'],
})
export class IxEventList {
  protected el: HTMLIxEventListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxEventList extends Components.IxEventList {}


@ProxyCmp({
  inputs: ['chevron', 'disabled', 'itemColor', 'selected']
})
@Component({
  selector: 'ix-event-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['chevron', 'disabled', 'itemColor', 'selected'],
})
export class IxEventListItem {
  protected el: HTMLIxEventListItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
  }
}


export declare interface IxEventListItem extends Components.IxEventListItem {
  /**
   * Event list item click
   */
  itemClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['ariaLabelClearIconButton', 'ariaLabelSearchIconButton', 'ariaLabelSearchInput', 'fullWidth', 'ghost', 'icon', 'outline', 'placeholder', 'value', 'variant']
})
@Component({
  selector: 'ix-expanding-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelClearIconButton', 'ariaLabelSearchIconButton', 'ariaLabelSearchInput', 'fullWidth', 'ghost', 'icon', 'outline', 'placeholder', 'value', 'variant'],
})
export class IxExpandingSearch {
  protected el: HTMLIxExpandingSearchElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface IxExpandingSearch extends Components.IxExpandingSearch {
  /**
   * Value changed
   */
  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['htmlFor', 'required']
})
@Component({
  selector: 'ix-field-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['htmlFor', 'required'],
})
export class IxFieldLabel {
  protected el: HTMLIxFieldLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxFieldLabel extends Components.IxFieldLabel {}


@ProxyCmp({
  inputs: ['ariaLabelCloseIconButton', 'disabled', 'readonly']
})
@Component({
  selector: 'ix-filter-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseIconButton', 'disabled', 'readonly'],
})
export class IxFilterChip {
  protected el: HTMLIxFilterChipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeClick']);
  }
}


export declare interface IxFilterChip extends Components.IxFilterChip {
  /**
   * Close clicked
   */
  closeClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['ariaLabelEyeIconButton', 'height', 'index', 'state', 'width']
})
@Component({
  selector: 'ix-flip-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelEyeIconButton', 'height', 'index', 'state', 'width'],
})
export class IxFlipTile {
  protected el: HTMLIxFlipTileElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggle']);
  }
}


export declare interface IxFlipTile extends Components.IxFlipTile {
  /**
   * Event emitted when the index changes @since 3.0.0
   */
  toggle: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ix-flip-tile-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IxFlipTileContent {
  protected el: HTMLIxFlipTileContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxFlipTileContent extends Components.IxFlipTileContent {}


@ProxyCmp({
  inputs: ['collapsed', 'expandOnHeaderClick', 'header', 'index', 'selected', 'subHeader', 'suppressHeaderSelection']
})
@Component({
  selector: 'ix-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapsed', 'expandOnHeaderClick', 'header', 'index', 'selected', 'subHeader', 'suppressHeaderSelection'],
})
export class IxGroup {
  protected el: HTMLIxGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectGroup', 'selectItem', 'collapsedChanged']);
  }
}


export declare interface IxGroup extends Components.IxGroup {
  /**
   * Emits when whole group gets selected.
   */
  selectGroup: EventEmitter<CustomEvent<boolean>>;
  /**
   * Emits when group item gets selected.
   */
  selectItem: EventEmitter<CustomEvent<number>>;
  /**
   * Group collapsed
   */
  collapsedChanged: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ix-group-context-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IxGroupContextMenu {
  protected el: HTMLIxGroupContextMenuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxGroupContextMenu extends Components.IxGroupContextMenu {}


@ProxyCmp({
  inputs: ['ariaLabelIcon', 'focusable', 'icon', 'index', 'secondaryText', 'selected', 'suppressSelection', 'text']
})
@Component({
  selector: 'ix-group-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelIcon', 'focusable', 'icon', 'index', 'secondaryText', 'selected', 'suppressSelection', 'text'],
})
export class IxGroupItem {
  protected el: HTMLIxGroupItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectedChanged']);
  }
}


export declare interface IxGroupItem extends Components.IxGroupItem {
  /**
   * Selection changed
   */
  selectedChanged: EventEmitter<CustomEvent<HTMLIxGroupItemElement>>;
}


@ProxyCmp({
  inputs: ['helperText', 'htmlFor', 'infoText', 'invalidText', 'validText', 'warningText']
})
@Component({
  selector: 'ix-helper-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['helperText', 'htmlFor', 'infoText', 'invalidText', 'validText', 'warningText'],
})
export class IxHelperText {
  protected el: HTMLIxHelperTextElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxHelperText extends Components.IxHelperText {}


@ProxyCmp({
  inputs: ['a11yLabel', 'disabled', 'ghost', 'icon', 'iconColor', 'loading', 'outline', 'oval', 'size', 'type', 'variant']
})
@Component({
  selector: 'ix-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['a11yLabel', 'disabled', 'ghost', 'icon', 'iconColor', 'loading', 'outline', 'oval', 'size', 'type', 'variant'],
})
export class IxIconButton {
  protected el: HTMLIxIconButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxIconButton extends Components.IxIconButton {}


@ProxyCmp({
  inputs: ['ariaLabelIconButton', 'disabled', 'ghost', 'icon', 'loading', 'outline', 'oval', 'pressed', 'size', 'variant']
})
@Component({
  selector: 'ix-icon-toggle-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelIconButton', 'disabled', 'ghost', 'icon', 'loading', 'outline', 'oval', 'pressed', 'size', 'variant'],
})
export class IxIconToggleButton {
  protected el: HTMLIxIconToggleButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pressedChange']);
  }
}


export declare interface IxIconToggleButton extends Components.IxIconToggleButton {
  /**
   * Pressed change event
   */
  pressedChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['allowedCharactersPattern', 'disabled', 'helperText', 'infoText', 'invalidText', 'label', 'maxLength', 'minLength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'showTextAsTooltip', 'type', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'getValidityState', 'focusInput']
})
@Component({
  selector: 'ix-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowedCharactersPattern', 'disabled', 'helperText', 'infoText', 'invalidText', 'label', 'maxLength', 'minLength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'showTextAsTooltip', 'type', 'validText', 'value', 'warningText'],
})
export class IxInput {
  protected el: HTMLIxInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'validityStateChange', 'ixBlur']);
  }
}


export declare interface IxInput extends Components.IxInput {
  /**
   * Event emitted when the value of the text field changes.
   */
  valueChange: EventEmitter<CustomEvent<string>>;
  /**
   * Event emitted when the validity state of the text field changes.
   */
  validityStateChange: EventEmitter<CustomEvent<ValidityState>>;
  /**
   * Event emitted when the text field loses focus.
   */
  ixBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ix-input-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IxInputGroup {
  protected el: HTMLIxInputGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxInputGroup extends Components.IxInputGroup {}


@ProxyCmp({
  inputs: ['ariaLabelIcon', 'icon', 'label', 'labelPosition', 'value']
})
@Component({
  selector: 'ix-key-value',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelIcon', 'icon', 'label', 'labelPosition', 'value'],
})
export class IxKeyValue {
  protected el: HTMLIxKeyValueElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxKeyValue extends Components.IxKeyValue {}


@ProxyCmp({
  inputs: ['striped']
})
@Component({
  selector: 'ix-key-value-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['striped'],
})
export class IxKeyValueList {
  protected el: HTMLIxKeyValueListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxKeyValueList extends Components.IxKeyValueList {}


@ProxyCmp({
  inputs: ['ariaLabelAlarmIcon', 'ariaLabelWarningIcon', 'label', 'orientation', 'state', 'unit', 'value']
})
@Component({
  selector: 'ix-kpi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelAlarmIcon', 'ariaLabelWarningIcon', 'label', 'orientation', 'state', 'unit', 'value'],
})
export class IxKpi {
  protected el: HTMLIxKpiElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxKpi extends Components.IxKpi {}


@ProxyCmp({
  inputs: ['layout']
})
@Component({
  selector: 'ix-layout-auto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['layout'],
})
export class IxLayoutAuto {
  protected el: HTMLIxLayoutAutoElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxLayoutAuto extends Components.IxLayoutAuto {}


@ProxyCmp({
  inputs: ['columns', 'gap', 'noMargin']
})
@Component({
  selector: 'ix-layout-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['columns', 'gap', 'noMargin'],
})
export class IxLayoutGrid {
  protected el: HTMLIxLayoutGridElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxLayoutGrid extends Components.IxLayoutGrid {}


@ProxyCmp({
  inputs: ['disabled', 'target', 'url']
})
@Component({
  selector: 'ix-link-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'target', 'url'],
})
export class IxLinkButton {
  protected el: HTMLIxLinkButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxLinkButton extends Components.IxLinkButton {}


@ProxyCmp({
  inputs: ['applicationName', 'ariaLabelContextIconButton', 'hideContextMenu', 'navigationTitle'],
  methods: ['toggleSidebar', 'openOverlay', 'closeOverlay']
})
@Component({
  selector: 'ix-map-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['applicationName', 'ariaLabelContextIconButton', 'hideContextMenu', 'navigationTitle'],
})
export class IxMapNavigation {
  protected el: HTMLIxMapNavigationElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['navigationToggled', 'contextMenuClick']);
  }
}


export declare interface IxMapNavigation extends Components.IxMapNavigation {
  /**
   * Navigation toggled
   */
  navigationToggled: EventEmitter<CustomEvent<boolean>>;
  /**
   * Context menu clicked
   */
  contextMenuClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['ariaLabelCloseIconButton', 'ariaLabelIcon', 'color', 'icon', 'iconColor', 'name']
})
@Component({
  selector: 'ix-map-navigation-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseIconButton', 'ariaLabelIcon', 'color', 'icon', 'iconColor', 'name'],
})
export class IxMapNavigationOverlay {
  protected el: HTMLIxMapNavigationOverlayElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeClick']);
  }
}


export declare interface IxMapNavigationOverlay extends Components.IxMapNavigationOverlay {
  /**
   * Event closed
   */
  closeClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['applicationDescription', 'applicationName', 'enableSettings', 'enableToggleTheme', 'expand', 'i18nCollapse', 'i18nExpand', 'i18nExpandSidebar', 'i18nLegal', 'i18nSettings', 'i18nToggleTheme', 'pinned', 'showAbout', 'showSettings', 'startExpanded'],
  methods: ['toggleMapExpand', 'toggleMenu', 'toggleSettings', 'toggleAbout']
})
@Component({
  selector: 'ix-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['applicationDescription', 'applicationName', 'enableSettings', 'enableToggleTheme', 'expand', 'i18nCollapse', 'i18nExpand', 'i18nExpandSidebar', 'i18nLegal', 'i18nSettings', 'i18nToggleTheme', 'pinned', 'showAbout', 'showSettings', 'startExpanded'],
})
export class IxMenu {
  protected el: HTMLIxMenuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['expandChange', 'mapExpandChange', 'openAppSwitch', 'openSettings', 'openAbout']);
  }
}


export declare interface IxMenu extends Components.IxMenu {
  /**
   * Menu expanded
   */
  expandChange: EventEmitter<CustomEvent<boolean>>;
  /**
   * Map Sidebar expanded
   */
  mapExpandChange: EventEmitter<CustomEvent<boolean>>;
  /**
   * Event emitted when the app switch button is clicked @since 3.0.0
   */
  openAppSwitch: EventEmitter<CustomEvent<void>>;
  /**
   * Event emitted when the settings button is clicked @since 3.0.0
   */
  openSettings: EventEmitter<CustomEvent<void>>;
  /**
   * Event emitted when the about button is clicked @since 3.0.0
   */
  openAbout: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['activeTabLabel', 'label']
})
@Component({
  selector: 'ix-menu-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeTabLabel', 'label'],
})
export class IxMenuAbout {
  protected el: HTMLIxMenuAboutElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabChange', 'close']);
  }
}


import type { CustomCloseEvent as IIxMenuAboutCustomCloseEvent } from '@siemens/ix';

export declare interface IxMenuAbout extends Components.IxMenuAbout {
  /**
   * Active tab changed @since 3.0.0
   */
  tabChange: EventEmitter<CustomEvent<string>>;
  /**
   * About and Legal closed
   */
  close: EventEmitter<CustomEvent<IIxMenuAboutCustomCloseEvent>>;
}


@ProxyCmp({
  inputs: ['label']
})
@Component({
  selector: 'ix-menu-about-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
})
export class IxMenuAboutItem {
  protected el: HTMLIxMenuAboutItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['labelChange']);
  }
}


import type { CustomLabelChangeEvent as IIxMenuAboutItemCustomLabelChangeEvent } from '@siemens/ix';

export declare interface IxMenuAboutItem extends Components.IxMenuAboutItem {
  /**
   * Label changed
   */
  labelChange: EventEmitter<CustomEvent<IIxMenuAboutItemCustomLabelChangeEvent>>;
}


@ProxyCmp({
  inputs: ['aboutItemLabel', 'i18nShowMore', 'label', 'offsetBottom', 'show']
})
@Component({
  selector: 'ix-menu-about-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aboutItemLabel', 'i18nShowMore', 'label', 'offsetBottom', 'show'],
})
export class IxMenuAboutNews {
  protected el: HTMLIxMenuAboutNewsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['showMore', 'closePopover']);
  }
}


export declare interface IxMenuAboutNews extends Components.IxMenuAboutNews {
  /**
   * Show More button is pressed
   */
  showMore: EventEmitter<CustomEvent<MouseEvent>>;
  /**
   * Popover closed
   */
  closePopover: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['bottom', 'i18nLogout', 'image', 'initials', 'showLogoutButton', 'top']
})
@Component({
  selector: 'ix-menu-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bottom', 'i18nLogout', 'image', 'initials', 'showLogoutButton', 'top'],
})
export class IxMenuAvatar {
  protected el: HTMLIxMenuAvatarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['logoutClick']);
  }
}


export declare interface IxMenuAvatar extends Components.IxMenuAvatar {
  /**
   * Logout click
   */
  logoutClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['icon', 'label']
})
@Component({
  selector: 'ix-menu-avatar-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'label'],
})
export class IxMenuAvatarItem {
  protected el: HTMLIxMenuAvatarItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
  }
}


export declare interface IxMenuAvatarItem extends Components.IxMenuAvatarItem {
  /**
   * Avatar dropdown item clicked
   */
  itemClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  inputs: ['icon', 'label', 'notifications']
})
@Component({
  selector: 'ix-menu-category',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'label', 'notifications'],
})
export class IxMenuCategory {
  protected el: HTMLIxMenuCategoryElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxMenuCategory extends Components.IxMenuCategory {}


@ProxyCmp({
  inputs: ['active', 'bottom', 'disabled', 'home', 'icon', 'label', 'notifications']
})
@Component({
  selector: 'ix-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'bottom', 'disabled', 'home', 'icon', 'label', 'notifications'],
})
export class IxMenuItem {
  protected el: HTMLIxMenuItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxMenuItem extends Components.IxMenuItem {}


@ProxyCmp({
  inputs: ['activeTabLabel', 'label']
})
@Component({
  selector: 'ix-menu-settings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeTabLabel', 'label'],
})
export class IxMenuSettings {
  protected el: HTMLIxMenuSettingsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabChange', 'close']);
  }
}


import type { CustomCloseEvent as IIxMenuSettingsCustomCloseEvent } from '@siemens/ix';

export declare interface IxMenuSettings extends Components.IxMenuSettings {
  /**
   * Active tab changed @since 3.0.0
   */
  tabChange: EventEmitter<CustomEvent<string>>;
  /**
   * Popover closed
   */
  close: EventEmitter<CustomEvent<IIxMenuSettingsCustomCloseEvent>>;
}


@ProxyCmp({
  inputs: ['label']
})
@Component({
  selector: 'ix-menu-settings-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
})
export class IxMenuSettingsItem {
  protected el: HTMLIxMenuSettingsItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['labelChange']);
  }
}


import type { CustomLabelChangeEvent as IIxMenuSettingsItemCustomLabelChangeEvent } from '@siemens/ix';

export declare interface IxMenuSettingsItem extends Components.IxMenuSettingsItem {
  /**
   * Label changed
   */
  labelChange: EventEmitter<CustomEvent<IIxMenuSettingsItemCustomLabelChangeEvent>>;
}


@ProxyCmp({
  inputs: ['dismissible', 'type']
})
@Component({
  selector: 'ix-message-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dismissible', 'type'],
})
export class IxMessageBar {
  protected el: HTMLIxMessageBarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closedChange', 'closeAnimationCompleted']);
  }
}


export declare interface IxMessageBar extends Components.IxMessageBar {
  /**
   * An event emitted when the close button is clicked
   */
  closedChange: EventEmitter<CustomEvent<any>>;
  /**
   * An event emitted when the close animation is completed
   */
  closeAnimationCompleted: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['animation', 'backdrop', 'beforeDismiss', 'centered', 'closeOnBackdropClick', 'closeOnEscape', 'size'],
  methods: ['showModal', 'dismissModal', 'closeModal']
})
@Component({
  selector: 'ix-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animation', 'backdrop', 'beforeDismiss', 'centered', 'closeOnBackdropClick', 'closeOnEscape', 'size'],
})
export class IxModal {
  protected el: HTMLIxModalElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dialogClose', 'dialogDismiss']);
  }
}


export declare interface IxModal extends Components.IxModal {
  /**
   * Dialog close
   */
  dialogClose: EventEmitter<CustomEvent<any>>;
  /**
   * Dialog cancel
   */
  dialogDismiss: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ix-modal-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IxModalContent {
  protected el: HTMLIxModalContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxModalContent extends Components.IxModalContent {}


@ProxyCmp({
})
@Component({
  selector: 'ix-modal-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IxModalFooter {
  protected el: HTMLIxModalFooterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxModalFooter extends Components.IxModalFooter {}


@ProxyCmp({
  inputs: ['ariaLabelCloseIconButton', 'ariaLabelIcon', 'hideClose', 'icon', 'iconColor']
})
@Component({
  selector: 'ix-modal-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseIconButton', 'ariaLabelIcon', 'hideClose', 'icon', 'iconColor'],
})
export class IxModalHeader {
  protected el: HTMLIxModalHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeClick']);
  }
}


export declare interface IxModalHeader extends Components.IxModalHeader {
  /**
   * Emits when close icon is clicked and closes the modal
Can be prevented, in which case only the event is triggered, and the modal remains open
   */
  closeClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  inputs: ['allowedCharactersPattern', 'disabled', 'helperText', 'infoText', 'invalidText', 'label', 'max', 'min', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'showStepperButtons', 'showTextAsTooltip', 'step', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'focusInput']
})
@Component({
  selector: 'ix-number-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowedCharactersPattern', 'disabled', 'helperText', 'infoText', 'invalidText', 'label', 'max', 'min', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'showStepperButtons', 'showTextAsTooltip', 'step', 'validText', 'value', 'warningText'],
})
export class IxNumberInput {
  protected el: HTMLIxNumberInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'validityStateChange', 'ixBlur']);
  }
}


export declare interface IxNumberInput extends Components.IxNumberInput {
  /**
   * Event emitted when the value of the input field changes
   */
  valueChange: EventEmitter<CustomEvent<number>>;
  /**
   * Event emitted when the validity state of the input field changes
   */
  validityStateChange: EventEmitter<CustomEvent<ValidityState>>;
  /**
   * Event emitted when the input field loses focus
   */
  ixBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['advanced', 'ariaLabelChevronLeftIconButton', 'ariaLabelChevronRightIconButton', 'count', 'i18nItems', 'i18nOf', 'i18nPage', 'itemCount', 'selectedPage', 'showItemCount']
})
@Component({
  selector: 'ix-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['advanced', 'ariaLabelChevronLeftIconButton', 'ariaLabelChevronRightIconButton', 'count', 'i18nItems', 'i18nOf', 'i18nPage', 'itemCount', 'selectedPage', 'showItemCount'],
})
export class IxPagination {
  protected el: HTMLIxPaginationElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pageSelected', 'itemCountChanged']);
  }
}


export declare interface IxPagination extends Components.IxPagination {
  /**
   * Page selection event
   */
  pageSelected: EventEmitter<CustomEvent<number>>;
  /**
   * Item count change event
   */
  itemCountChanged: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['ariaLabelIcon', 'borderless', 'composition', 'expanded', 'heading', 'hideOnCollapse', 'icon', 'size', 'variant']
})
@Component({
  selector: 'ix-pane',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelIcon', 'borderless', 'composition', 'expanded', 'heading', 'hideOnCollapse', 'icon', 'size', 'variant'],
})
export class IxPane {
  protected el: HTMLIxPaneElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['expandedChanged', 'variantChanged', 'borderlessChanged']);
  }
}


import type { ExpandedChangedEvent as IIxPaneExpandedChangedEvent } from '@siemens/ix';
import type { VariantChangedEvent as IIxPaneVariantChangedEvent } from '@siemens/ix';
import type { BorderlessChangedEvent as IIxPaneBorderlessChangedEvent } from '@siemens/ix';

export declare interface IxPane extends Components.IxPane {
  /**
   * This event is triggered when the pane either expands or contracts
   */
  expandedChanged: EventEmitter<CustomEvent<IIxPaneExpandedChangedEvent>>;
  /**
   * This event is triggered when the variant of the pane is changed
   */
  variantChanged: EventEmitter<CustomEvent<IIxPaneVariantChangedEvent>>;
  /**
   * This event is triggered when the variant of the pane is changed
   */
  borderlessChanged: EventEmitter<CustomEvent<IIxPaneBorderlessChangedEvent>>;
}


@ProxyCmp({
  inputs: ['borderless', 'layout', 'variant']
})
@Component({
  selector: 'ix-pane-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['borderless', 'layout', 'variant'],
})
export class IxPaneLayout {
  protected el: HTMLIxPaneLayoutElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxPaneLayout extends Components.IxPaneLayout {}


@ProxyCmp({
  inputs: ['alignLeft', 'ariaLabelIcon', 'background', 'icon', 'outline', 'pillColor', 'tooltipText', 'variant']
})
@Component({
  selector: 'ix-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignLeft', 'ariaLabelIcon', 'background', 'icon', 'outline', 'pillColor', 'tooltipText', 'variant'],
})
export class IxPill {
  protected el: HTMLIxPillElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxPill extends Components.IxPill {}


@ProxyCmp({
  inputs: ['helperText', 'label', 'max', 'min', 'showTextAsTooltip', 'size', 'status', 'textAlignment', 'type', 'value']
})
@Component({
  selector: 'ix-progress-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['helperText', 'label', 'max', 'min', 'showTextAsTooltip', 'size', 'status', 'textAlignment', 'type', 'value'],
})
export class IxProgressIndicator {
  protected el: HTMLIxProgressIndicatorElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxProgressIndicator extends Components.IxProgressIndicator {}


@ProxyCmp({
  inputs: ['ariaLabelIcon', 'collapse', 'heading', 'icon', 'notification', 'subheading', 'variant']
})
@Component({
  selector: 'ix-push-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelIcon', 'collapse', 'heading', 'icon', 'notification', 'subheading', 'variant'],
})
export class IxPushCard {
  protected el: HTMLIxPushCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxPushCard extends Components.IxPushCard {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'label', 'name', 'required', 'value']
})
@Component({
  selector: 'ix-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'label', 'name', 'required', 'value'],
})
export class IxRadio {
  protected el: HTMLIxRadioElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange', 'valueChange', 'ixBlur']);
  }
}


export declare interface IxRadio extends Components.IxRadio {
  /**
   * Event emitted when the checked state of the radio changes
   */
  checkedChange: EventEmitter<CustomEvent<boolean>>;
  /**
   * Event emitted when the value of the radio changes
   */
  valueChange: EventEmitter<CustomEvent<string>>;
  /**
   * Event emitted when the radio is blurred
   */
  ixBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['direction', 'helperText', 'infoText', 'invalidText', 'label', 'showTextAsTooltip', 'validText', 'value', 'warningText']
})
@Component({
  selector: 'ix-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'helperText', 'infoText', 'invalidText', 'label', 'showTextAsTooltip', 'validText', 'value', 'warningText'],
})
export class IxRadioGroup {
  protected el: HTMLIxRadioGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface IxRadioGroup extends Components.IxRadioGroup {
  /**
   * Event emitted when the value of the radiobutton group changes
   */
  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ix-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IxRow {
  protected el: HTMLIxRowElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxRow extends Components.IxRow {}


@ProxyCmp({
  inputs: ['allowClear', 'ariaLabelChevronDownIconButton', 'ariaLabelClearIconButton', 'disabled', 'dropdownMaxWidth', 'dropdownWidth', 'editable', 'helperText', 'hideListHeader', 'i18nNoMatches', 'i18nPlaceholder', 'i18nPlaceholderEditable', 'i18nSelectListHeader', 'infoText', 'invalidText', 'label', 'mode', 'name', 'readonly', 'required', 'showTextAsTooltip', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'focusInput']
})
@Component({
  selector: 'ix-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowClear', 'ariaLabelChevronDownIconButton', 'ariaLabelClearIconButton', 'disabled', 'dropdownMaxWidth', 'dropdownWidth', 'editable', 'helperText', 'hideListHeader', 'i18nNoMatches', 'i18nPlaceholder', 'i18nPlaceholderEditable', 'i18nSelectListHeader', 'infoText', 'invalidText', 'label', 'mode', 'name', 'readonly', 'required', 'showTextAsTooltip', 'validText', 'value', 'warningText'],
})
export class IxSelect {
  protected el: HTMLIxSelectElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'inputChange', 'addItem', 'ixBlur']);
  }
}


export declare interface IxSelect extends Components.IxSelect {
  /**
   * Value changed
   */
  valueChange: EventEmitter<CustomEvent<string | string[]>>;
  /**
   * Event dispatched whenever the text input changes.
   */
  inputChange: EventEmitter<CustomEvent<string>>;
  /**
   * Item added to selection
   */
  addItem: EventEmitter<CustomEvent<string>>;
  /**
   * Blur input
   */
  ixBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['label', 'selected', 'value']
})
@Component({
  selector: 'ix-select-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'selected', 'value'],
})
export class IxSelectItem {
  protected el: HTMLIxSelectItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
  }
}


export declare interface IxSelectItem extends Components.IxSelectItem {
  /**
   * Item clicked
   */
  itemClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['disabled', 'error', 'marker', 'max', 'min', 'step', 'trace', 'traceReference', 'value']
})
@Component({
  selector: 'ix-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'marker', 'max', 'min', 'step', 'trace', 'traceReference', 'value'],
})
export class IxSlider {
  protected el: HTMLIxSliderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface IxSlider extends Components.IxSlider {

  valueChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['size', 'variant']
})
@Component({
  selector: 'ix-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'variant'],
})
export class IxSpinner {
  protected el: HTMLIxSpinnerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxSpinner extends Components.IxSpinner {}


@ProxyCmp({
  inputs: ['ariaLabelButton', 'ariaLabelSplitIconButton', 'closeBehavior', 'disabled', 'ghost', 'icon', 'label', 'outline', 'placement', 'splitIcon', 'variant']
})
@Component({
  selector: 'ix-split-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelButton', 'ariaLabelSplitIconButton', 'closeBehavior', 'disabled', 'ghost', 'icon', 'label', 'outline', 'placement', 'splitIcon', 'variant'],
})
export class IxSplitButton {
  protected el: HTMLIxSplitButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['buttonClick']);
  }
}


export declare interface IxSplitButton extends Components.IxSplitButton {
  /**
   * Button clicked
   */
  buttonClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  inputs: ['counter', 'disabled', 'icon', 'layout', 'placement', 'rounded', 'selected', 'small']
})
@Component({
  selector: 'ix-tab-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['counter', 'disabled', 'icon', 'layout', 'placement', 'rounded', 'selected', 'small'],
})
export class IxTabItem {
  protected el: HTMLIxTabItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabClick']);
  }
}


import type { TabClickDetail as IIxTabItemTabClickDetail } from '@siemens/ix';

export declare interface IxTabItem extends Components.IxTabItem {
  /**
   * Emitted when the tab is clicked.
   */
  tabClick: EventEmitter<CustomEvent<IIxTabItemTabClickDetail>>;
}


@ProxyCmp({
  inputs: ['ariaLabelChevronLeftIconButton', 'ariaLabelChevronRightIconButton', 'layout', 'placement', 'rounded', 'selected', 'small']
})
@Component({
  selector: 'ix-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelChevronLeftIconButton', 'ariaLabelChevronRightIconButton', 'layout', 'placement', 'rounded', 'selected', 'small'],
})
export class IxTabs {
  protected el: HTMLIxTabsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectedChange']);
  }
}


export declare interface IxTabs extends Components.IxTabs {
  /**
   * `selected` property changed
   */
  selectedChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['disabled', 'helperText', 'infoText', 'invalidText', 'label', 'maxLength', 'minLength', 'name', 'placeholder', 'readonly', 'required', 'resizeBehavior', 'showTextAsTooltip', 'textareaCols', 'textareaHeight', 'textareaRows', 'textareaWidth', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'focusInput']
})
@Component({
  selector: 'ix-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'helperText', 'infoText', 'invalidText', 'label', 'maxLength', 'minLength', 'name', 'placeholder', 'readonly', 'required', 'resizeBehavior', 'showTextAsTooltip', 'textareaCols', 'textareaHeight', 'textareaRows', 'textareaWidth', 'validText', 'value', 'warningText'],
})
export class IxTextarea {
  protected el: HTMLIxTextareaElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'validityStateChange', 'ixBlur']);
  }
}


export declare interface IxTextarea extends Components.IxTextarea {
  /**
   * Event emitted when the value of the textarea field changes.
   */
  valueChange: EventEmitter<CustomEvent<string>>;
  /**
   * Event emitted when the validity state of the textarea field changes.
   */
  validityStateChange: EventEmitter<CustomEvent<ValidityState>>;
  /**
   * Event emitted when the textarea field loses focus.
   */
  ixBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'ix-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class IxTile {
  protected el: HTMLIxTileElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxTile extends Components.IxTile {}


@ProxyCmp({
  inputs: ['disabled', 'format', 'helperText', 'hourInterval', 'i18nErrorTimeUnparsable', 'i18nHourColumnHeader', 'i18nMillisecondColumnHeader', 'i18nMinuteColumnHeader', 'i18nSecondColumnHeader', 'i18nSelectTime', 'i18nTime', 'infoText', 'invalidText', 'label', 'millisecondInterval', 'minuteInterval', 'name', 'placeholder', 'readonly', 'required', 'secondInterval', 'showTextAsTooltip', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'focusInput']
})
@Component({
  selector: 'ix-time-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'format', 'helperText', 'hourInterval', 'i18nErrorTimeUnparsable', 'i18nHourColumnHeader', 'i18nMillisecondColumnHeader', 'i18nMinuteColumnHeader', 'i18nSecondColumnHeader', 'i18nSelectTime', 'i18nTime', 'infoText', 'invalidText', 'label', 'millisecondInterval', 'minuteInterval', 'name', 'placeholder', 'readonly', 'required', 'secondInterval', 'showTextAsTooltip', 'validText', 'value', 'warningText'],
})
export class IxTimeInput {
  protected el: HTMLIxTimeInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'validityStateChange']);
  }
}


import type { TimeInputValidityState as IIxTimeInputTimeInputValidityState } from '@siemens/ix';

export declare interface IxTimeInput extends Components.IxTimeInput {
  /**
   * Input change event.
   */
  valueChange: EventEmitter<CustomEvent<string>>;
  /**
   * Validation state change event.
   */
  validityStateChange: EventEmitter<CustomEvent<IIxTimeInputTimeInputValidityState>>;
}


@ProxyCmp({
  inputs: ['corners', 'format', 'hideHeader', 'hourInterval', 'i18nConfirmTime', 'i18nHeader', 'i18nHourColumnHeader', 'i18nMillisecondColumnHeader', 'i18nMinuteColumnHeader', 'i18nSecondColumnHeader', 'millisecondInterval', 'minuteInterval', 'secondInterval', 'showHour', 'showMinutes', 'showSeconds', 'standaloneAppearance', 'textSelectTime', 'textTime', 'time', 'timeReference'],
  methods: ['getCurrentTime']
})
@Component({
  selector: 'ix-time-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['corners', 'format', 'hideHeader', 'hourInterval', 'i18nConfirmTime', 'i18nHeader', 'i18nHourColumnHeader', 'i18nMillisecondColumnHeader', 'i18nMinuteColumnHeader', 'i18nSecondColumnHeader', 'millisecondInterval', 'minuteInterval', 'secondInterval', 'showHour', 'showMinutes', 'showSeconds', 'standaloneAppearance', 'textSelectTime', 'textTime', 'time', 'timeReference'],
})
export class IxTimePicker {
  protected el: HTMLIxTimePickerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['timeSelect', 'timeChange']);
  }
}


export declare interface IxTimePicker extends Components.IxTimePicker {
  /**
   * Time event
   */
  timeSelect: EventEmitter<CustomEvent<string>>;
  /**
   * Time change event
   */
  timeChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['ariaLabelCloseIconButton', 'autoClose', 'autoCloseDelay', 'icon', 'iconColor', 'toastTitle', 'type']
})
@Component({
  selector: 'ix-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseIconButton', 'autoClose', 'autoCloseDelay', 'icon', 'iconColor', 'toastTitle', 'type'],
})
export class IxToast {
  protected el: HTMLIxToastElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeToast']);
  }
}


export declare interface IxToast extends Components.IxToast {
  /**
   * Toast closed
   */
  closeToast: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['containerClass', 'containerId', 'position'],
  methods: ['showToast']
})
@Component({
  selector: 'ix-toast-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['containerClass', 'containerId', 'position'],
})
export class IxToastContainer {
  protected el: HTMLIxToastContainerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxToastContainer extends Components.IxToastContainer {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'hideText', 'indeterminate', 'name', 'required', 'textIndeterminate', 'textOff', 'textOn', 'value']
})
@Component({
  selector: 'ix-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'hideText', 'indeterminate', 'name', 'required', 'textIndeterminate', 'textOff', 'textOn', 'value'],
})
export class IxToggle {
  protected el: HTMLIxToggleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange', 'ixBlur']);
  }
}


export declare interface IxToggle extends Components.IxToggle {
  /**
   * An event will be dispatched each time the slide-toggle changes its value.
   */
  checkedChange: EventEmitter<CustomEvent<boolean>>;
  /**
   * An event will be dispatched each time the toggle is blurred.
   */
  ixBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['ariaLabelButton', 'disabled', 'ghost', 'icon', 'loading', 'outline', 'pressed', 'variant']
})
@Component({
  selector: 'ix-toggle-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelButton', 'disabled', 'ghost', 'icon', 'loading', 'outline', 'pressed', 'variant'],
})
export class IxToggleButton {
  protected el: HTMLIxToggleButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pressedChange']);
  }
}


export declare interface IxToggleButton extends Components.IxToggleButton {
  /**
   * Pressed change event
   */
  pressedChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['for', 'interactive', 'placement', 'titleContent']
})
@Component({
  selector: 'ix-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['for', 'interactive', 'placement', 'titleContent'],
})
export class IxTooltip {
  protected el: HTMLIxTooltipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxTooltip extends Components.IxTooltip {}


@ProxyCmp({
  inputs: ['ariaLabelChevronIcon', 'context', 'hasChildren', 'text']
})
@Component({
  selector: 'ix-tree-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelChevronIcon', 'context', 'hasChildren', 'text'],
})
export class IxTreeItem {
  protected el: HTMLIxTreeItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggle', 'itemClick']);
  }
}


export declare interface IxTreeItem extends Components.IxTreeItem {
  /**
   * Expand/Collapsed toggled
   */
  toggle: EventEmitter<CustomEvent<void>>;
  /**
   * Click on item not on the expand/collapse icon
   */
  itemClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['bold', 'format', 'textColor', 'textDecoration']
})
@Component({
  selector: 'ix-typography',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bold', 'format', 'textColor', 'textDecoration'],
})
export class IxTypography {
  protected el: HTMLIxTypographyElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxTypography extends Components.IxTypography {}


@ProxyCmp({
  inputs: ['accept', 'disabled', 'i18nUploadDisabled', 'i18nUploadFile', 'loadingText', 'multiline', 'multiple', 'selectFileText', 'state', 'uploadFailedText', 'uploadSuccessText'],
  methods: ['setFilesToUpload']
})
@Component({
  selector: 'ix-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accept', 'disabled', 'i18nUploadDisabled', 'i18nUploadFile', 'loadingText', 'multiline', 'multiple', 'selectFileText', 'state', 'uploadFailedText', 'uploadSuccessText'],
})
export class IxUpload {
  protected el: HTMLIxUploadElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['filesChanged']);
  }
}


export declare interface IxUpload extends Components.IxUpload {
  /**
   * You get an array of Files after drop-action or browse action is finished
   */
  filesChanged: EventEmitter<CustomEvent<Array<File>>>;
}


@ProxyCmp({
  inputs: ['message', 'placement', 'suppressAutomaticPlacement']
})
@Component({
  selector: 'ix-validation-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['message', 'placement', 'suppressAutomaticPlacement'],
})
export class IxValidationTooltip {
  protected el: HTMLIxValidationTooltipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxValidationTooltip extends Components.IxValidationTooltip {}


@ProxyCmp({
  inputs: ['clickable', 'disabled', 'selected', 'status', 'vertical']
})
@Component({
  selector: 'ix-workflow-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clickable', 'disabled', 'selected', 'status', 'vertical'],
})
export class IxWorkflowStep {
  protected el: HTMLIxWorkflowStepElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxWorkflowStep extends Components.IxWorkflowStep {}


@ProxyCmp({
  inputs: ['clickable', 'selectedIndex', 'vertical']
})
@Component({
  selector: 'ix-workflow-steps',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clickable', 'selectedIndex', 'vertical'],
})
export class IxWorkflowSteps {
  protected el: HTMLIxWorkflowStepsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stepSelected']);
  }
}


export declare interface IxWorkflowSteps extends Components.IxWorkflowSteps {
  /**
   * On step selected event
   */
  stepSelected: EventEmitter<CustomEvent<number>>;
}


