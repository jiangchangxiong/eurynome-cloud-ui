import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<"caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle-1" | "subtitle-2" | "body-1" | "body-2">;
        default: string;
    };
    weight: {
        type: PropType<"thin" | "light" | "regular" | "medium" | "bold" | "bolder">;
        default: string;
    };
    align: {
        type: PropType<"right" | "left" | "center" | "justify">;
        default: string;
    };
    text: StringConstructor;
}, {
    display: globalThis.ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<"caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle-1" | "subtitle-2" | "body-1" | "body-2">;
        default: string;
    };
    weight: {
        type: PropType<"thin" | "light" | "regular" | "medium" | "bold" | "bolder">;
        default: string;
    };
    align: {
        type: PropType<"right" | "left" | "center" | "justify">;
        default: string;
    };
    text: StringConstructor;
}>>, {
    size: "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle-1" | "subtitle-2" | "body-1" | "body-2";
    align: "right" | "left" | "center" | "justify";
    weight: "thin" | "light" | "regular" | "medium" | "bold" | "bolder";
}, {}>;
export default _default;
