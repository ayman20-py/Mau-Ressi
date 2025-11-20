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
    content: string;
    style: {
        fontSize: number;
        fontWeight: 'normal' | 'bold';
        color?: string;
    };
}

// Text input element specific properties
export interface TextInputElement extends BaseElement {
    type: "textInput";
    placeholder: string;
    style:{ 
        fontSize: number;
        color?: string;
    }
}

// Union type for all possinle elements
export type TemplateElement = TextElement | TextInputElement;

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