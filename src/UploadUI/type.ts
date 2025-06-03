//不同类型上传内容
export const DraggerFileItems = (type: string) => {
  switch (type) {
    case 'file':
      return { icon3: 'FileAddition', text3: '点击或拖动文件至此区域即可上传' };
    case 'pdf':
      return { icon3: 'FilePdf', text3: '点击或拖动PDF文件至此区域即可上传' };
    case 'image':
      return { icon3: 'FileAddition', text3: '点击或拖动文件至此区域即可上传' };
    case 'excel':
      return { icon3: 'Excel', text3: '点击或拖动Excel(*xlsx格式)文件至此区域即可上传' };
    default:
      return { icon3: '', text3: '' };
  }
};
