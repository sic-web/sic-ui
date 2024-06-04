import React, { useEffect, useState } from 'react';
import { Table, Checkbox } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IconUI, ButtonUI } from 'sic-ui';
import './index.scss';

export const Setting = (props: any) => {
  const { openModifyHeader, setOpenModifyHeader, tableHeader, getTableheader, scrollHeight } = props;

  const [dataSource, setDataSource] = useState<any>();

  useEffect(() => {
    setDataSource(tableHeader);
  }, [tableHeader]);

  const Row = ({ children, ...props }: any) => {
    const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({
      id: props['data-row-key'],
      disabled: props['data-row-key'] === 0 || props['data-row-key'] === dataSource.length - 1,
    });
    const rowClass = props['data-row-key'] === 0 || props['data-row-key'] === dataSource.length - 1 ? 'disabled-row' : '';
    const style: React.CSSProperties = {
      ...props.style,
      transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
      transition,
      ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
    };

    return (
      <tr {...props} ref={setNodeRef} style={style} className={rowClass} {...attributes}>
        {React.Children?.map(children, (child) => {
          if ((child as React.ReactElement).key === 'sort') {
            return React.cloneElement(child as React.ReactElement, {
              children: <MenuOutlined ref={setActivatorNodeRef} style={{ touchAction: 'none', cursor: 'move' }} {...listeners} />,
            });
          }
          return child;
        })}
      </tr>
    );
  };
  const onClose = () => {
    setOpenModifyHeader(false);
  };
  const columns: any[] = [
    {
      key: 'sort',
      width: 40,
      align: 'center',
      render: (_: never, record: any) => (
        <Checkbox
          checked={record.selected}
          onChange={(e) => {
            record.selected = e.target.checked;
            setDataSource([...dataSource]);
          }}
        />
      ),
    },
    {
      key: 'checkbox',
      width: 36,
      align: 'center',
      render: (_: never, record: any) => {
        return (
          <Checkbox
            disabled={record?.disable}
            checked={record.selected}
            onChange={(e) => {
              record.selected = e.target.checked;
              setDataSource([...dataSource]);
            }}
          />
        );
      },
    },
    {
      title: '表名',
      dataIndex: 'name',
    },
  ];
  // 移动表头
  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const arr = [active?.id, over?.id];
      const isMove = tableHeader?.filter((item: any) => item.disable).map((item: any) => arr.includes(item.key));

      if (!isMove?.includes(true)) {
        const sort = (previous: [key: any]) => {
          const activeIndex = previous.findIndex((i: any) => i.key === active.id);
          const overIndex = previous.findIndex((i: any) => i.key === over?.id);
          return arrayMove(previous, activeIndex, overIndex);
        };
        setDataSource((previous: [key: any]) => sort(previous));
      }
    }
  };
  // 获取新的表格头部
  const handleGetSortedData = () => {
    // eslint-disable-next-line array-callback-return
    dataSource?.map((item: { sort: number }, i: number) => {
      item.sort = i + 1;
    });
    getTableheader(dataSource);
    onClose();
  };

  return (
    <div className="sic-tableui-setting" onClick={(e) => e.stopPropagation()}>
      <div
        className="sic-tableui-setting-icon"
        onClick={(e) => {
          e.stopPropagation();
          setOpenModifyHeader(!openModifyHeader);
        }}
      >
        <IconUI name="Setting" theme="outline" size="16" fill={'var(--themeColor)'} />
      </div>
      {openModifyHeader && dataSource?.length > 0 && (
        <div className="sic-tableui-setting-modify">
          <div className="modify-title">表头名称</div>
          <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
            <SortableContext items={dataSource?.map((i: { key: number }) => i.key)} strategy={verticalListSortingStrategy}>
              <Table
                components={{ body: { row: Row } }}
                rowKey="key"
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                showHeader={false}
                scroll={{ y: scrollHeight }}
              />
            </SortableContext>
          </DndContext>
          <div className="modify-footer">
            <ButtonUI type="primary" onClick={handleGetSortedData}>
              确定
            </ButtonUI>
            <ButtonUI onClick={onClose} style={{ marginLeft: 12 }}>
              取消
            </ButtonUI>
          </div>
        </div>
      )}
    </div>
  );
};
