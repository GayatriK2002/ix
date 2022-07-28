/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { applyPolyfills, defineCustomElements } from '@siemens/ix/loader';

let didInitialize = false;

export const appInitialize = (doc: Document) => {
  return () => {
    const win: Window | undefined = doc.defaultView as any;
    if (win && typeof (window as any) !== 'undefined') {
      if (didInitialize) {
        return;
      }

      didInitialize = true;

      applyPolyfills().then(() => {
        return defineCustomElements();
      });
    }
  };
};
