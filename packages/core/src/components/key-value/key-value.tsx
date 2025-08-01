/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import type { KeyValueLabelPosition } from './key-value.types';

/**
 * @slot custom-value - Optional custom value at key value instead of text value
 */
@Component({
  tag: 'ix-key-value',
  styleUrl: 'key-value.scss',
  shadow: true,
})
export class KeyValue {
  /**
   * Optional key value icon
   */
  @Prop() icon?: string;

  /**
   * ARIA label for the icon
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelIcon?: string;

  /**
   * Key value label
   */
  @Prop() label!: string;

  /**
   * Optional key value label position - 'top' or 'left'
   */
  @Prop() labelPosition: KeyValueLabelPosition = 'top';

  /**
   * Optional key value text value
   */
  @Prop() value?: string;

  render() {
    return (
      <Host
        class={`keyValue keyValue--${
          this.labelPosition === 'top' ? 'column' : 'row'
        }`}
      >
        {this.icon && (
          <ix-icon
            name={this.icon}
            size="24"
            class="keyValue__icon"
            aria-label={this.ariaLabelIcon}
          ></ix-icon>
        )}
        <div class="keyValue__content">
          <div class="content__label">{this.label}</div>
          <div
            class={{
              content__value: true,
              'has-customValue': this.value === undefined,
            }}
          >
            {this.value !== undefined ? (
              this.value
            ) : (
              <slot name="custom-value"></slot>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
