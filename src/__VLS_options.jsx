export default (await import('vue')).defineComponent({
name: 'App',
components: {
HelloWorld
}
});
const __VLS_options = {
...({
name: 'App',
components: {
HelloWorld
}
}),
};
const __VLS_name = (await import('./__VLS_types.js')).getNameOption({
name: 'App',
components: {
HelloWorld
}
} as const);
function __VLS_template() {
import * as __VLS_types from './__VLS_types.js'; import('./__VLS_types.js');
let __VLS_ctx!: __VLS_types.PickNotAny<__VLS_Ctx, {}> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_component, new () => {}>> & {};
let __VLS_vmUnwrap!: typeof __VLS_options & { components: {}; };
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_component extends { components: infer C; } ? C : {}> & __VLS_types.GlobalComponents & typeof __VLS_vmUnwrap.components & __VLS_types.PickComponents<typeof __VLS_ctx>;
let __VLS_selfComponent!: __VLS_types.SelfComponent<typeof __VLS_name, typeof __VLS_component & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_selfComponent, keyof typeof __VLS_otherComponents>;
__VLS_components['/* __VLS_.SearchTexts.Components */'];
({} as __VLS_types.GlobalAttrs)['/* __VLS_.SearchTexts.GlobalAttrs */'];
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
declare const HelloWorld: __VLS_types.ConvertInvalidJsxElement<
'HelloWorld' extends keyof typeof __VLS_components ? typeof __VLS_components['HelloWorld'] : 'HelloWorld' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['HelloWorld'] : unknown>;
__VLS_components.HelloWorld;
__VLS_ctx.HelloWorld;
declare const __VLS_0: __VLS_types.ExtractEmit2<typeof HelloWorld>;
/* Completion: Emits */
// @ts-ignore
__VLS_0('/* __VLS_.SearchTexts.Completion.Emit.HelloWorld */');
/* Completion: Props */
// @ts-ignore
(<HelloWorld /* __VLS_.SearchTexts.Completion.Props.HelloWorld */ />);
{
<div id={"\u0061\u0070\u0070"}></div>;

{
<img alt={"\u0056\u0075\u0065\u0020\u006c\u006f\u0067\u006f"} src={"\u002e\u002f\u0061\u0073\u0073\u0065\u0074\u0073\u002f\u006c\u006f\u0067\u006f\u002e\u0070\u006e\u0067"}></img>;

}
{
<HelloWorld msg={"\u0057\u0065\u006c\u0063\u006f\u006d\u0065\u0020\u0074\u006f\u0020\u0059\u006f\u0075\u0072\u0020\u0056\u0075\u0065\u002e\u006a\u0073\u0020\u0041\u0070\u0070"} />;
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
let __VLS_component!: typeof import('./App.vue')['default'];
