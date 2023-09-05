import { TEXT_ELEMENT } from "./js/createElement.js";

// render 方法
export function myRender(element, container) {
  // 如果是text节点，则创建text
  const node =
    element.type === TEXT_ELEMENT
      ? document.createTextNode("")
      : document.createElement(element.type);

  // 添加props属性
  const isProperty = (key) => key !== "children";

  Object.keys(element.props)
    .filter(isProperty)
    .forEach((key) => {
      node[key] = element.props[key];
    });

  // 创建children节点
  element.props.children.forEach((child) => {
    // 这里的递归调用一旦开始，就不能停下，这样会造成渲染的堵塞，因此需要使用concurrent mode进行优化
    myRender(child, node);
  });

  container.appendChild(node);
}
