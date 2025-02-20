declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    maxPage: {
        type: NumberConstructor;
        default: number;
    };
}, {
    pageNumber: import("vue").WritableComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    maxPage: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    max: number;
    maxPage: number;
}, {}>;
export default _default;
