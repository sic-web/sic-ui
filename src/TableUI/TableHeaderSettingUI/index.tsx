import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import { DndContext } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ButtonUI, IconUI } from 'sic-ui';
import lodash from 'lodash';
import type { ColumnType, ItemType } from './type';
import './index.scss';

interface PropsType {
  items: ItemType[];
  open?: boolean;
  setOpen: (params?: boolean) => void;
  updataTableheader: (params: ItemType[], tableSetStatus?: boolean) => void;
  maxHeight?: number | string;
}
export default function Index(props: PropsType) {
  const { items, open, setOpen, updataTableheader, maxHeight = window.innerHeight - 500 } = props;

  // 配置列表
  const [columnList, setColumnList] = useState<ColumnType[]>([]);

  useEffect(() => {
    if (open && !lodash.isEmpty(items)) {
      const data = items.map(({ key, ...rest }) => ({
        ...rest,
        id: key ?? rest?.name,
        selected: rest?.selected === undefined ? true : rest?.selected,
        disable: rest?.disable === undefined ? false : rest?.disable,
      }));
      setColumnList(data);
    }
  }, [open]);

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      const activeIndex = columnList.findIndex((i) => i.id === active.id);
      const overIndex = columnList.findIndex((i) => i.id === over?.id);
      if (columnList[overIndex]?.disable) {
        return;
      }
      const newlist = arrayMove(columnList, activeIndex, overIndex);
      setColumnList(newlist);
    }
  };
  const onChangeCheckbox = (id: string, value: boolean) => {
    const data = columnList.map((item) => {
      if (item?.id === id) {
        return { ...item, selected: value };
      } else {
        return item;
      }
    });
    setColumnList(data);
  };
  const getTableheader = () => {
    const data = columnList.map(({ id, ...rest }) => ({
      ...rest,
      key: id,
    }));
    updataTableheader(data, false);
  };

  const DraggableListNode = (props: any) => {
    const { onChangeCheckbox } = props;
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
      id: props.id,
      disabled: props.disable,
    });
    return (
      <div
        className="columnsItem"
        ref={setNodeRef}
        style={{ transform: CSS.Transform.toString(transform), transition, cursor: props?.disable ? 'not-allowed' : 'move' }}
      >
        <IconUI name="HamburgerButton" size={16} {...attributes} {...(props.disable ? {} : listeners)} />
        <Checkbox checked={props.selected} disabled={props.disable} onChange={(e) => onChangeCheckbox(props.id, e.target.checked)}>
          {props.name}
        </Checkbox>
      </div>
    );
  };

  return (
    <div className="tableHeaderSettingUI" onClick={(e) => e.stopPropagation()}>
      <div className="tableHeaderSettingUI-icon" onClick={() => setOpen(!open)}>
        <IconUI name="Setting" />
      </div>
      {open && (
        <div className="tableHeaderSettingUI-columns">
          <div className="tableHeaderSettingUI-columns-title">表头设置</div>
          <div className="tableHeaderSettingUI-columns-content" style={{ maxHeight: maxHeight }}>
            <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
              <SortableContext items={columnList.map((i: ColumnType) => i.id)} strategy={verticalListSortingStrategy}>
                {columnList.map((item: ColumnType) => {
                  return <DraggableListNode key={item?.id} onChangeCheckbox={onChangeCheckbox} {...item} />;
                })}
              </SortableContext>
            </DndContext>
          </div>
          <div className="tableHeaderSettingUI-columns-footer">
            <ButtonUI onClick={() => setOpen(false)}>取消</ButtonUI>
            <ButtonUI type="primary" onClick={getTableheader}>
              确定
            </ButtonUI>
          </div>
        </div>
      )}
    </div>
  );
}
