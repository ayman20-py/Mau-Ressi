import * as React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useState, useRef } from 'react';

import styles, { useAppFonts } from '../Styles/styles';

import { ElementSelectorTab } from './Components/ElementSelecterTab';
import { CanvasElement } from './Components/CanvasElement';
import { TemplateElement, ElementType, isTextElement, isTextInputElement, isCheckboxElement } from '../LogicControllers/TemplateElements';

export function CreateTemplatePage() {
    const loadFonts = useAppFonts();
    const [elements, setElements] = useState<TemplateElement[]>([]);
    const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
    const canvasRef = useRef<View>(null);

    if (!loadFonts) {
        return (
            <View style={[styles.createTemplateMainContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading fonts...</Text>
            </View>
        );
    }

    const handleDrop = (type: ElementType, absoluteX: number, absoluteY: number) => {
        // We need to measure the canvas view to check if the drop is inside
        canvasRef.current?.measure((x, y, width, height, pageX, pageY) => {
            // Check if drop is within canvas bounds
            if (
                absoluteX >= pageX &&
                absoluteX <= pageX + width &&
                absoluteY >= pageY &&
                absoluteY <= pageY + height
            ) {
                const baseProps = {
                    id: Date.now().toString(),
                    x: absoluteX - pageX, // Relative to canvas
                    y: absoluteY - pageY, // Relative to canvas
                    width: 100,
                    height: 50,
                };

                let newElement: TemplateElement;

                if (type === 'text') {
                    newElement = { ...baseProps, type: 'text', text: "New Text" } as any;
                } else if (type === 'textInput') {
                    newElement = { ...baseProps, type: 'textInput', placeholder: "Enter text", style: { fontSize: 14 } } as any;
                } else if (type === 'checkbox') {
                    newElement = { ...baseProps, type: 'checkbox', checked: false, label: "Checkbox" } as any;
                } else {
                    // Fallback or ignore
                    return;
                }

                setElements(prev => [...prev, newElement]);
                setSelectedElementId(newElement.id);
            }
        });
    };

    const handleUpdatePosition = (id: string, x: number, y: number) => {
        setElements(prev => prev.map(el => {
            if (el.id === id) {
                return { ...el, x, y };
            }
            return el;
        }));
    };

    const handleSelect = (id: string) => {
        setSelectedElementId(id);
    };

    const selectedElement = elements.find(e => e.id === selectedElementId);

    return (
        <View style={styles.createTemplateMainContainer}>

            {/* Contains the top element properties tab */}
            <View style={styles.propertiesTab}>
                {selectedElement ? (
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                        <Text style={styles.body}>Properties: {selectedElement.type}</Text>
                        {/* Add more property controls here later */}
                    </View>
                ) : (
                    <Text style={styles.body}>Select an element to edit properties</Text>
                )}
            </View>

            {/* Contains the template canvas */}
            <View style={{ flex: 4 }}>
                <View style={styles.createTemplateCanvas}>
                    <View
                        ref={canvasRef}
                        style={styles.canvas}
                    >
                        {elements.map(el => (
                            <CanvasElement
                                key={el.id}
                                element={el}
                                isSelected={el.id === selectedElementId}
                                onSelect={handleSelect}
                                onUpdatePosition={handleUpdatePosition}
                            />
                        ))}
                        {elements.length === 0 && (
                            <Text style={[styles.body, { position: 'absolute', alignSelf: 'center', top: '50%' }]}>
                                Drag elements here
                            </Text>
                        )}
                    </View>
                </View>

                {/* Contains the bottom element selector tab*/}
                <ElementSelectorTab onDrop={handleDrop} />
            </View>

        </View>
    )
}