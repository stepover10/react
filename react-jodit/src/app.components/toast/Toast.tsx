import React from "react";
import { createRoot } from "react-dom/client";
import { errorMessage } from "app.modules/constant/errorMessage";
import ToastDomAlert from "./ToastDomAlert";
import ToastDomContent from "./ToastDomContent";

const createElementId = () => {
  return `portal_${Math.random().toString(36).substring(2, 11)}`;
}

const removeComponent = (root, id = null) => {
  try {
    root && setTimeout(() => {
      root.unmount();
      if (id) {
        const getRemoveDom = document.getElementById(id);
        if (getRemoveDom) getRemoveDom.remove();
      }
    });
  } catch (e) {
  }
};

const openComponent = ({ root, ...props}) => {
  try {
    root && setTimeout(() => root.render(<props.component { ...props} />));
  } catch (e) {
  }
};

const createRootNode = (id) => {
  let createDom = document.getElementById(id);
  if (!createDom) {
    createDom = document.createElement("div");
    createDom.id = id;
    document.body.appendChild(createDom);
  }
  return createRoot(createDom);
}

const alert = (text = errorMessage.failed, type= 'bottom') => {
  const id = createElementId();
  const root = createRootNode(id);

  openComponent({
    root,
    id,
    text,
    type,
    component: ToastDomAlert,
    removeComponent: () => removeComponent(root, id),
  });
};

const content = ({ content }) => {
  const id = createElementId();
  const root = createRootNode(id);
  openComponent({
    root,
    id,
    content,
    component: ToastDomContent,
    removeComponent: () => removeComponent(root, id),
  });
};

const Toast = {
  alert,
  content,
};

export default Toast;
