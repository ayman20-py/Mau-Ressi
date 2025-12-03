export type ElementType = 'text' | 'image' | 'shape' | 'dropdown' | 'checkbox' | 'textInput';

// Base element interface that all elements share
export interface BaseElement {
    id: string;
    type: ElementType;
    x: number;
    y: number;
    width: number;
    height: number;
}

// Text element specific properties
export interface TextElement extends BaseElement {
    type: "text";
    text: string;
}

// Text input element specific properties
export interface TextInputElement extends BaseElement {
    type: "textInput";
    placeholder: string;
    style: {
        fontSize: number;
        color?: string;
    }
}

export interface CheckboxElement extends BaseElement {
    type: "checkbox";
    checked: boolean;
    label: string;
}

// Union type for all possinle elements
export type TemplateElement = TextElement | TextInputElement | CheckboxElement;

export interface TemplateSize {
    width: number;
    height: number;
}


export const isTextElement = (element: TemplateElement): element is TextElement => {
    return element.type === "text";
}

export const isTextInputElement = (element: TemplateElement): element is TextInputElement => {
    return element.type === "textInput";
}

export const isCheckboxElement = (element: TemplateElement): element is CheckboxElement => {
    return element.type === "checkbox";
}