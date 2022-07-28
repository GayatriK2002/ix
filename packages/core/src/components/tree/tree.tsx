/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { Component, Element, Event, EventEmitter, h, Host, Prop, Watch } from '@stencil/core';
import Hyperlist from 'hyperlist';
import { renderDefaultItem } from '../tree-item/default-tree-item';
import { TreeContext, TreeItem, TreeItemContext, TreeItemVisual, TreeModel, UpdateCallback } from './tree-model';

@Component({
  tag: 'cw-tree',
  styleUrl: 'tree.css',
  scoped: true,
})
export class CwTree {
  @Element() host!: HTMLCwTreeElement;

  /**
   * Initial root element will not be rendered
   */
  @Prop() root: string;

  /**
   * Tree modal
   */
  @Prop() model: TreeModel<any>;

  /**
   * Render function of tree items
   */
  @Prop() renderItem: (index: number, data: any, dataList: Array<any>, context: TreeContext, update: (callback: UpdateCallback) => void) => HTMLElement;

  /**
   * Selection and collapsed state management
   */
  @Prop({ mutable: true }) context: TreeContext = {};

  /**
   * Context changed
   */
  @Event() contextChange: EventEmitter<TreeContext>;

  private hyperlist: any;

  private toggleListener = new Map<HTMLElement, Function>();
  private itemClickListener = new Map<HTMLElement, Function>();
  private updates = new Map<string, UpdateCallback>();

  private getVirtualizerOptions() {
    const list = this.buildTreeList(this.model[this.root]);

    return {
      itemHeight: 32,
      total: list.length,
      generate: (index: number) => {
        const item = list[index];
        const renderedTreeItem = this.host.querySelector(`[data-tree-node-id="${item.id}"]`) as HTMLCwTreeItemElement;

        const context = this.getContext(item.id);

        if (renderedTreeItem) {
          renderedTreeItem.hasChildren = item.hasChildren;
          renderedTreeItem.context = { ...context };

          if (this.updates.has(item.id)) {
            const doUpdate = this.updates.get(item.id);
            doUpdate(item, { ...this.context });
          }

          return renderedTreeItem;
        }

        const update = (callback: UpdateCallback) => {
          this.updates.set(item.id, callback);
        };

        let innerElement: HTMLElement | null = null;
        if (this.renderItem) {
          innerElement = this.renderItem(index, item, list, { ...this.context }, update);
        }

        if (innerElement === null) {
          innerElement = renderDefaultItem(item, context, update);
        }

        const el = innerElement;
        el.setAttribute('data-tree-node-id', item.id);
        el.style.paddingLeft = item.level + 'rem';
        el.style.paddingRight = '1rem';

        if (!this.itemClickListener.has(el)) {
          const itemClickCallback = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            Object.values(this.context).forEach(c => (c.isSelected = false));
            const context = this.getContext(item.id);
            context.isSelected = true;
            this.setContext(item.id, context);
          };
          el.addEventListener('itemClick', itemClickCallback);
          this.itemClickListener.set(el, itemClickCallback);
        }

        if (item.hasChildren && !this.toggleListener.has(el)) {
          const toggleCallback = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            const context = this.getContext(list[index].id);
            context.isExpanded = !context.isExpanded;
            this.setContext(item.id, context);
          };
          el.addEventListener('toggle', toggleCallback);
          this.toggleListener.set(el, toggleCallback);
        }

        return el;
      },
    };
  }

  private setContext(id: string, context: TreeItemContext) {
    this.context = {
      ...this.context,
      [id]: context,
    };

    this.contextChange.emit(this.context);
  }

  private getContext(id: string): TreeItemContext {
    if (!this.context) {
      return {
        isExpanded: false,
        isSelected: false,
      };
    }
    if (!this.context[id]) {
      this.context[id] = {
        isExpanded: false,
        isSelected: false,
      };
    }
    return this.context[id];
  }

  private buildTreeList(root: TreeItem<any>, level: number = 0): TreeItemVisual<any>[] {
    const itemList: TreeItemVisual<any>[] = [];

    if (root?.hasChildren) {
      const newLevel = level + 1;
      root.children.forEach((id: string) => {
        const item = this.model[id];
        const context = this.getContext(id);
        itemList.push({ ...item, level });
        if (item.hasChildren && context.isExpanded) {
          itemList.push(...this.buildTreeList(item, newLevel));
        }
      });
    }

    return itemList;
  }

  componentDidLoad() {
    const config = this.getVirtualizerOptions();
    this.hyperlist = new Hyperlist(this.host, config);
  }

  componentWillRender() {
    this.refreshList();
  }

  disconnectedCallback() {
    this.hyperlist.destroy();
  }

  @Watch('model')
  modelChange() {
    this.refreshList();
  }

  private refreshList() {
    if (this.hyperlist) {
      this.hyperlist.refresh(this.host, this.getVirtualizerOptions());
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
