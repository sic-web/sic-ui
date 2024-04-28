import React, { useEffect, useRef } from 'react';
import './index.scss';

interface itemType {
  key: string;
  title: string;
}
interface propsType {
  anchoruiRef: any;
  items: itemType[];
  currentIndex: number;
  setCurrentIndex: (value: number) => void;
  isAutoScroll: boolean;
  setIsAutoScroll: (value: boolean) => void;
  className?: string;
}

const AnchorUI = (props: propsType) => {
  const { items, anchoruiRef, className, currentIndex, setCurrentIndex, isAutoScroll, setIsAutoScroll } = props;
  const prevScrollPosRef = useRef(0);
  const newItemsRef = useRef<any>([]);

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
    newItemsRef.current = newList;
  };

  //当前滚动距离应该聚焦到哪个导航上   isAutoScroll防止触发点击导航
  const handleScroll = () => {
    const currentPosition = anchoruiRef.current.scrollTop;
    prevScrollPosRef.current = currentPosition;
    const id = newItemsRef.current.findIndex((item: any) => {
      return item.offsetBottom > currentPosition && currentPosition >= item.offsetTop;
    });
    if (!isAutoScroll) {
      setCurrentIndex(id);
    }
  };

  //点击导航
  const click = (index: number) => {
    setIsAutoScroll(true);
    setCurrentIndex(index);
  };

  //点击后滚动到对应标签
  const autoscrollFn = () => {
    if (newItemsRef.current?.length > 0 && anchoruiRef?.current) {
      anchoruiRef.current.removeEventListener('scroll', handleScroll);
      anchoruiRef.current.scrollTo({
        top: newItemsRef.current[currentIndex]?.offsetTop,
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
  }, [currentIndex]);

  useEffect(() => {
    if (anchoruiRef?.current) {
      anchoruiRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (anchoruiRef?.current) {
        anchoruiRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isAutoScroll]);
  useEffect(() => {
    if (isAutoScroll) {
      autoscrollFn();
    }
  }, [currentIndex, isAutoScroll]);
  return (
    <div className={`sic-anchorui ${className ?? ''}`}>
      {items?.map((item: any, index: number) => {
        return (
          <div
            className={`sic-anchorui-item ${currentIndex === index ? 'sic-anchorui-item-select' : null}`}
            key={index}
            onClick={() => click(index)}
          >
            {item.title}
            {currentIndex === index && <div className="sic-anchorui-item-icon"></div>}
          </div>
        );
      })}
    </div>
  );
};

export default AnchorUI;
