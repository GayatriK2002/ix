/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'cw-menu-about-item',
  styleUrl: 'cw-menu-about-item.css',
  scoped: true,
})
export class CwMenuAboutItem {
  /**
   * About Item label
   */
  @Prop({ reflect: true }) label: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
