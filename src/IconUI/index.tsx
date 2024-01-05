import { iconRally } from './material/rally';
const IconUI = (props: { name: string; [key: string]: any }) => {
  const { name, ...otherProps } = props;
  const current: any = iconRally?.filter((item) => item?.name === name)?.[0];
  return current?.element({ ...otherProps });
};

export default IconUI;
