/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxAvatar } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxAvatar],
  template: `
    <ix-avatar
      image="https://www.gravatar.com/avatar/00000000000000000000000000000000"
    ></ix-avatar>
  `,
})
export default class AvatarImage {}
