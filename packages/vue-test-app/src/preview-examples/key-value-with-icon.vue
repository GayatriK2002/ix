<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconLocation } from '@siemens/ix-icons/icons';
import { IxKeyValue } from '@siemens/ix-vue';
</script>

<template>
  <IxKeyValue :icon="iconLocation" label="Label" value="Value"></IxKeyValue>
</template>
