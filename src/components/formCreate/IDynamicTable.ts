export interface IFormField {
    type: string;
    bType?: string;      // 业务类型
    groupName?: string;  // 组名称
    groupAlias?: string; // 组标题
    title?: string;
    field: string;
    value?: string | string[];
    props?: object;
    info?: string;       // 提示信息
    unit?: string;       // 单位
    validate?: {
        message?: string;
        pattern?: string;
        required?: boolean;
        type?: string;
        max?: number;
    };
    options?: IOptItem[];
    emit?: string[];       // 触发事件
    emitPrefix?: string;   // 事件前缀
    checkedFail?: boolean; // 审核退回状态
}

export enum LayoutType {
    Raster,  // 栅格布局
    Tabs,    // Tabs页布局
    Divider, // 分隔布局
    Table,   // 表格布局
}

export interface IOptItem {
    label?: string;
    value?: string;
    id?: string;
    title?: string;
}

