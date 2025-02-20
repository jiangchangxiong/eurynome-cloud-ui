import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: PropType<"two" | "three">;
        default: string;
    };
    /**
     * 1. 如果是三列布局：
     * default：三列相等
     * start：左边宽，中间默认，右边窄
     * center：两边相同，中间宽
     * end：右边宽，中间默认，左边窄
     *
     * 2.如果是两列布局：
     * default：左右相等
     * start：左边宽，右边窄
     * end：右边宽，左边窄
     */
    wider: {
        type: PropType<"default" | "end" | "center" | "start">;
        default: string;
    };
    /**
     * 1. 如果是三列布局
     * 1.1 如果 wider 是 center，那么 offset 最大值为6，即 [0, 6]
     * 1.2 如果 wider 是 start 或 end，那么 offset 最大值为3，即[0, 3]
     * 2. 如果是两列布局
     * 那么 offset 最大值为5，即 [0, 3]
     */
    offset: {
        type: NumberConstructor;
        default: number;
    };
}, {
    isTwoColumn: () => boolean;
    isToTheLeft: globalThis.ComputedRef<boolean>;
    isToTheRight: globalThis.ComputedRef<boolean>;
    leftCols: globalThis.Ref<number>;
    centerCols: globalThis.Ref<number>;
    rightCols: globalThis.Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: PropType<"two" | "three">;
        default: string;
    };
    /**
     * 1. 如果是三列布局：
     * default：三列相等
     * start：左边宽，中间默认，右边窄
     * center：两边相同，中间宽
     * end：右边宽，中间默认，左边窄
     *
     * 2.如果是两列布局：
     * default：左右相等
     * start：左边宽，右边窄
     * end：右边宽，左边窄
     */
    wider: {
        type: PropType<"default" | "end" | "center" | "start">;
        default: string;
    };
    /**
     * 1. 如果是三列布局
     * 1.1 如果 wider 是 center，那么 offset 最大值为6，即 [0, 6]
     * 1.2 如果 wider 是 start 或 end，那么 offset 最大值为3，即[0, 3]
     * 2. 如果是两列布局
     * 那么 offset 最大值为5，即 [0, 3]
     */
    offset: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    mode: "two" | "three";
    offset: number;
    wider: "default" | "end" | "center" | "start";
}, {}>;
export default _default;
