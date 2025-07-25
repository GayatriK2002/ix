/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { BaseButtonProps } from '../button/base-button';
import { ButtonVariant } from '../button/button';
import { BaseIconButton } from '../icon-button/base-icon-button';
import { a11yBoolean } from '../utils/a11y';

@Component({
  tag: 'ix-icon-toggle-button',
  shadow: true,
  styleUrl: './icon-toggle-button.scss',
})
export class IconToggleButton {
  /**
   * Button variant.
   */
  @Prop() variant: ButtonVariant = 'secondary';

  /**
   * Outline button
   */
  @Prop() outline = false;

  /**
   * Button with no background or outline
   */
  @Prop() ghost = false;

  /**
   * Icon name
   */
  @Prop() icon?: string;

  /**
   * Button in oval shape
   *
   * @since 3.1.0
   *
   */
  @Prop() oval: boolean = false;

  /**
   * Show button as pressed
   */
  @Prop() pressed = false;

  /**
   * Size of icon in button
   */
  @Prop() size: '24' | '16' | '12' = '24';

  /**
   * Disable the button
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Loading button
   */
  @Prop() loading: boolean = false;

  /**
   * ARIA label for the icon button
   * Will be set for the native HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelIconButton?: string;

  /**
   * Pressed change event
   */
  @Event() pressedChange!: EventEmitter<boolean>;

  @Element() hostElement!: HTMLIxIconToggleButtonElement;

  private dispatchPressedChange() {
    this.pressedChange.emit(!this.pressed);
  }

  private getIconSizeClass() {
    return {
      'btn-icon-12': this.size === '12',
      'btn-icon-16': this.size === '16',
      'btn-icon-32': this.size === '24',
    };
  }

  render() {
    const baseButtonProps: BaseButtonProps = {
      variant: this.variant,
      outline: this.outline,
      ghost: this.ghost,
      iconOnly: true,
      iconOval: this.oval,
      selected: this.pressed,
      disabled: this.disabled || this.loading,
      icon: this.icon,
      iconSize: this.size,
      loading: this.loading,
      onClick: () => this.dispatchPressedChange(),
      type: 'button',
      ariaAttributes: {
        'aria-pressed': a11yBoolean(this.pressed),
        'aria-label': this.ariaLabelIconButton,
      },
      extraClasses: {
        'icon-button': true,
        ...this.getIconSizeClass(),
      },
    };

    return (
      <Host
        class={{
          ...this.getIconSizeClass(),
          disabled: this.disabled || this.loading,
        }}
      >
        <BaseIconButton {...baseButtonProps}></BaseIconButton>
      </Host>
    );
  }
}
