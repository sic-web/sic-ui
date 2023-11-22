import React, { useEffect, useState, useRef } from 'react';
import './index.scss';

interface itemType {
  key: string;
  title: string;
}
interface propsType {
  anchoruiRef: any;
  items: itemType[];
  targetCurrentIndex?: number;
}
interface newItemsType {
  id?: number;
  name?: string;
  offsetTop: number;
  offsetBottom: number;
}
const AnchorUI = (props: propsType) => {
  const { items, anchoruiRef, targetCurrentIndex } = props;
  const prevScrollPosRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false);
  const [newItems, setNewItems] = useState<newItemsType[]>([]);
  const handleScroll = () => {
    //当前滚动距离
    const currentPosition = anchoruiRef.current.scrollTop;
    prevScrollPosRef.current = currentPosition;
    const id = newItems.findIndex((item) => {
      return item.offsetBottom > currentPosition && currentPosition >= item.offsetTop;
    });
    if (!isAutoScroll) {
      setCurrentIndex(id);
    }
  };
  const click = (index: number) => {
    setCurrentIndex(index);
    setIsAutoScroll(true);
  };
  //获取每个标签 距离顶部的距离  本身的高度
  const getItemHigh = () => {
    const defaultElement: any = document.getElementById(items[0]?.key);
    const newList =
      items &&
      items?.length > 0 &&
      // eslint-disable-next-line array-callback-return
      items.map((item: itemType) => {
        const targetElement: any = document.getElementById(item?.key);
        if (defaultElement && targetElement) {
          return {
            ...item,
            offsetTop: targetElement?.offsetTop - defaultElement?.offsetTop || 0,
            offsetBottom: targetElement?.offsetTop - defaultElement?.offsetTop + targetElement?.offsetHeight || 0,
          };
        }
      });
    setNewItems(newList as newItemsType[]);
  };
  //点击后滚动到对应标签
  const autoscrollFn = () => {
    if (newItems?.length > 0 && anchoruiRef?.current) {
      anchoruiRef.current.removeEventListener('scroll', handleScroll);
      anchoruiRef.current.scrollTo({
        top: newItems[currentIndex]?.offsetTop,
        behavior: 'smooth',
      });
      //不加定时器 先点击1  再点击4  会依次点亮 2 3
      setTimeout(() => {
        setIsAutoScroll(false);
      }, 500);
    }
  };
  useEffect(() => {
    getItemHigh();
  }, []);
  useEffect(() => {
    if (!!targetCurrentIndex?.toString()) click(targetCurrentIndex);
  }, [targetCurrentIndex]);
  useEffect(() => {
    if (anchoruiRef?.current) {
      anchoruiRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (anchoruiRef?.current) {
        anchoruiRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [newItems, isAutoScroll]);
  useEffect(() => {
    if (isAutoScroll) {
      autoscrollFn();
    }
  }, [currentIndex, isAutoScroll]);
  return (
    <div className="sic-anchorui">
      {items?.map((item: any, index: number) => {
        return (
          <div
            className={`sic-anchorui-item ${currentIndex === index ? 'sic-anchorui-item-select' : null}`}
            key={index}
            onClick={() => click(index)}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default AnchorUI;
