export const getParentIds = (elem: Node) => {
  var parents = [];
  while(elem.parentNode && elem.parentNode.nodeName.toLowerCase() != 'body') {
    const parentElement = elem.parentNode as Element;
    parentElement.id && parents.push(parentElement.id);

    elem = elem.parentNode;
  }
  return parents;
}