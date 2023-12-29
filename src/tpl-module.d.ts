declare module '*.tpl' {
    export interface FiberProps {
        [key:string]:string | string[] | Fiber[] | Fiber | EventListenerOrEventListenerObject,
        children: Fiber[],
    }
    
    // fiber node interface
    export interface Fiber{
        tag?: string,
        type?: string | ((props:FiberProps) => Fiber),
        // 单链表树结构
        parent?: Fiber,
        child?: Fiber | null,
        sibling?: Fiber | null,
        // 在渲染完成之后他们会交换位置
        alternate?: Fiber | null,
        // 跟当前Fiber相关本地状态（比如浏览器环境就是DOM节点）
        stateNode?: HTMLElement | Text,
        props: FiberProps,
        partialState?: Fiber | null,
        // Effect 相关的
        effectTag?: string,
        hooks?: [],
        dom?: Text | HTMLElement | null,
    }

    export function render():Fiber;
}