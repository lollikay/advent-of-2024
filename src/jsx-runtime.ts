// Simple JSX factory for templating without React
export interface VNode {
  type: string | Function;
  props: Record<string, any>;
  children: (VNode | string)[];
}

export function h(
  type: string | Function,
  props: Record<string, any> | null,
  ...children: (VNode | string | (VNode | string)[])[]
): VNode {
  return {
    type,
    props: props || {},
    children: children.flat()
  };
}

export function Fragment(props: { children?: (VNode | string)[] }): (VNode | string)[] {
  return props.children || [];
}

export function renderToString(vnode: VNode | string): string {
  if (typeof vnode === 'string') {
    return escapeHtml(vnode);
  }

  if (typeof vnode.type === 'function') {
    const result = vnode.type(vnode.props);
    if (Array.isArray(result)) {
      return result.map(renderToString).join('');
    }
    return renderToString(result);
  }

  const { type, props, children } = vnode;
  const attributes = Object.entries(props)
    .filter(([key]) => key !== 'children')
    .map(([key, value]) => {
      if (typeof value === 'boolean') {
        return value ? key : '';
      }
      return `${key}="${escapeHtml(String(value))}"`;
    })
    .filter(Boolean)
    .join(' ');

  const attributeString = attributes ? ` ${attributes}` : '';
  const childrenString = children.map(renderToString).join('');

  // Self-closing tags
  if (['img', 'br', 'hr', 'input', 'meta', 'link'].includes(type)) {
    return `<${type}${attributeString} />`;
  }

  return `<${type}${attributeString}>${childrenString}</${type}>`;
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default h;