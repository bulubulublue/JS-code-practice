// 自定义的createElement方法
export const TEXT_ELEMENT = "text";

export function myCreateElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        return typeof child === "object" ? child : myCreateTextElement(child);
      }),
    },
  };
}

// 创建textNode对象的方法
export function myCreateTextElement(text) {
  return {
    type: TEXT_ELEMENT,
    props: {
      nodeValue: text,
      // 这里为了方便，还是添加了children属性，在react中没有这个属性
      children: [],
    },
  };
}
