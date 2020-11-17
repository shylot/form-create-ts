<template>
   <!--<div ref="dynamicTable" class="dynamic-table"></div>-->
   <div class="dynamic-table" ref="dynamicTable">
      <form-create
              v-model="fApi"
              :rule="rule"
              :option="option"
              @change="change"
              @bType-blur="blur"
      ></form-create>
   </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Watch, Vue} from 'vue-property-decorator';
    import {IFormField, LayoutType} from './IDynamicTable';
    import formCreate from '@form-create/element-ui';

    @Component({
        name: 'FcDynamicTable',
        components: {
            formCreate: formCreate.$form(),
        },
    })
    export default class FcDynamicTable extends Vue {

        // 表单生成规则
        @Prop({default: {}}) private formRule!: IFormField[];
        // 表单列数
        @Prop({default: 2}) private cols!: number;
        // 表单布局
        @Prop({default: LayoutType.Raster}) private layoutType!: LayoutType;
        // 栅格之间是否有间隔
        @Prop({default: true}) private hasSpan!: boolean;
        // 组件参数配置
        private option: any = {
            // 开启事件中注入自定义参数
            injectEvent: true,
            // 是否显示提交按钮
            submitBtn: false,

            // 是否显示重置按钮
            resetBtn: false,

            // 表单提交事件
            onSubmit(formData: any) {
                alert(JSON.stringify(formData));
            },

            form: {
                labelWidth: '152px',
            },

            info: {
                width: 300,
            },
        };

        private rule: any = [];

        // 表单实例对象
        private fApi: any = {};

        // Tooltip节点
        private tooltipDom: any;
        // 提示框
        private tooltipOverHandler: any;
        private tooltipLeaveHandler: any;

        // 每次修改数据
        private changeForm(data: any) {
            this.$emit('changeForm', data);
        }

        // 修改关系
        private changeRelate(bType: any, value: any) {
            this.$emit('changeRelate', {bType, value});
        }

        // 修改核查
        private changeCheck(data: any) {
            this.$emit('changeCheck', data);
        }

        // 创建动态表单
        private createTable(form: any) {
            const type: number = Number(this.layoutType);
            switch (type) {
                case LayoutType.Divider: this.getDividerLayout(form); break;
                case LayoutType.Tabs: this.getTabsLayout(form); break;
                case LayoutType.Table: this.getTableLayout(form); break;
                default: this.getRasterLayout(form); break;
            }
        }

        // 栅格布局 - 无分组
        private getRasterLayout(form: any) {
            const span: number = 24 % this.cols ? 24 : 24 / this.cols ;
            for (const item of form) {
                item.className = 'dynamic_form_item';
                item.className = item.checkedFail ? item.className + ' checkedFail' : item.className;
                item.props.groupName = item.groupName;
                if (this.hasSpan) {
                    item.col = {
                        span: span - 1,
                        offset: 1,
                    };
                } else {
                    item.col = {span};
                }

            }
            // 操作
            this.rule = form;
        }

        // table布局 - 无分组
        private getTableLayout(form: any) {
            const rules: any = [{
                type: 'table',
                props: {
                    border: 1,
                    style: {
                        'border-spacing': 0,
                    },
                    width: '100%',
                    class: '_table',
                },
                children: [
                    /*{
                      // 表格标题
                      type: 'caption',
                      children: [form[0].groupAlias],
                    }*/
                ],
            }];
            let rowObj: any = {};
            // 获取列数目
            const colNum: number = this.cols;
            // 构造组件跨行数组
            const h: number [] = [];
            for (let i = 0; i < colNum; i++) {
                h.push(0);
            }
            let minI: number = 0;   // 最小值索引
            let minH: number = 0;   // 当前最小跨行数
            let count: number = 0;  // 判断换行条件之一
            for (const item of form) {
                if (item.type !== 'hidden') {
                    let rowspan: number = item.props && item.props.rowspan ? item.props.rowspan : 1;
                    rowspan = colNum === 1 ? colNum : rowspan;
                    item.className = 'dynamic_form_item _updateWidth';
                    item.className = item.checkedFail ? item.className + ' checkedFail' : item.className;
                    item.props.groupName = item.groupName;
                    if (count === 0) {
                        rowObj = {
                            type: 'tr',
                            children: [],
                        };
                    }
                    minI = h.indexOf(minH);
                    h[minI] += rowspan;
                    rowObj.children.push({
                        type: 'td',
                        props: {
                            valign: 'top',
                            width: (100 / colNum) + '%',
                            rowspan,
                            colspan: 1,
                            class: '_td',
                        },
                        children: [item],
                    });
                    count++;
                    // 更新最小值
                    if (h.indexOf(minH) === -1) {
                        rules[0].children.push(rowObj);
                        count = 0;
                        minH = h[0];
                        for (const it of h) {
                            minH = it < minH ? it : minH;
                        }
                    }
                }
            }
            this.rule = rules;
        }

        // 分割布局 - 分组
        private getDividerLayout(form: any) {
            form = this.convertToGroup(form);
            const rules = [];
            const span: number = 24 % this.cols ? 24 :  24 / this.cols;
            const keys: string[] = Object.keys(form);
            for (const key of keys) {
                const title: string = form[key][0].groupAlias || '';
                rules.push({
                    type: 'el-divider',
                    children: [title],
                    props: {
                        'content-position': 'left',
                    },
                });
                for (const item of form[key]) {
                    item.className = 'dynamic_form_item';
                    item.className = item.checkedFail ? item.className + ' checkedFail' : item.className;
                    item.props.groupName = item.groupName;
                    if (this.hasSpan) {
                        item.col = {
                            span: span - 1,
                            offset: 1,
                        };
                    } else {
                        item.col = {span};
                    }
                    rules.push(item);
                }
            }
            this.rule = rules;
        }

        /**
         * tabs布局，会影响FormCreate中跨整行的组件 - 分组
         */
        private getTabsLayout(form: any) {
            form = this.convertToGroup(form);
            const keys: string[] = Object.keys(form);
            const span: number = 24 % this.cols ? 24 : 24 / this.cols;
            const rules: any = [{
                type: 'el-tabs',
                children: [],
                props: {
                    activeName: form[keys[0]][0].groupName,
                },
            }];
            for (const key of keys) {
                const elTabPaneObj: any = {
                    type: 'el-tab-pane',
                    children: [],
                    props: {
                        label: form[key][0].groupAlias ,
                        name: form[key][0].groupName,
                        class: '_tab',
                    },
                };
                for (const item of form[key]) {
                    if (item.type === 'spaceAttr') {
                        elTabPaneObj.props.lazy = true;
                    }
                    item.className = 'dynamic_form_item _tabs';
                    item.className = item.checkedFail ? item.className + ' checkedFail' : item.className;
                    item.props.groupName = item.groupName;
                    if (this.hasSpan) {
                        item.col = {
                            span: span - 1,
                            offset: 1,
                        };
                    } else {
                        item.col = {span};
                    }
                    elTabPaneObj.children.push(item);
                }
                rules[0].children.push(elTabPaneObj);
            }
            this.rule = rules;
        }

        // 转换为组数据
        private convertToGroup(form: any) {
            form = this.deepClone(form);
            const newForm: any = {};
            for (const item of form) {
                const groupName: string = item.groupName;
                if (!newForm.hasOwnProperty(groupName)) {
                    newForm[groupName] = [];
                }
                newForm[groupName].push(item);
            }
            return newForm;
        }

        // 数据验证
        private validate() {
            let validate: boolean = false;
            this.fApi.validate((state: boolean) => {
                validate = state;
            });
            return validate;
        }

        // 表单填值
        private setValue(field: string, value: any) {
            this.fApi.setValue(field, value);
            const data: any = {};
            data[field] = value;
            this.$emit('changeForm', data);
        }

        // 重新加载表单
        private reload(rules: any[]) {
            if (!!rules) {
                this.createTable(rules);
            } else {
                this.fApi.reload();
            }
        }

        // 重置表单
        private reset() {
            this.fApi.resetFields();
        }

        private mounted() {
            if (this.formRule) {
                this.createTable(this.formRule);
                this.createTooltip();
            }
        }

        private beforeDestroy() {
            const tooltipDom: any = document.getElementById('da-tooltip');
            if (tooltipDom) {
                document.body.removeChild(tooltipDom);
            }
        }

        // 表单值 - 【发生变化】触发
        private change(field: string, value: any, $f: any) {
            const data: any = {};
            const rule: any = $f.getRule(field);
            if (value.hasOwnProperty('type') && value.type === 'check') { // 审核
                const title: string = rule.title; // 取标题与增加data返回值 杜志勋 2020-09-23 17:00
                data[field] = value.checked; // 塞必要信息
                data.key = field;
                data.check = value.checked;
                data.title = title;
                data.value = value.value ? value.value : ' ';
                data.unit = value.unit ? value.unit : ' ';
                data.str = data.title + ': ' + data.value + data.unit ;  // 补充了 6个信息
                $f.setValue(field, value.value);
                this.changeCheck(data);
            } else {                                                      // 新增 | 编辑修改值
                // 转换为服务端能够识别的数据
                if (rule.type === 'cascader') {
                    // 多级联动，取最后一项
                    value = value.lastItem;
                } else if (rule.props.multiple || rule.props.isRange ||
                    rule.props.type === 'daterange' || rule.type === 'checkbox') {
                    // 数组类型的value，进行转换
                    value = Array.isArray(value) ? value.join(',') : value;
                }
                data[field] = value;
                this.changeForm(data);
            }
        }

        // 表单值 -【失去焦点】触发
        private blur(inject: any) {
            const data: any = {};
            const rule: any = inject.self;
            const field: string = rule.field;
            let value: any = inject.self.value;
            // 解决两端留白问题
            const newValue: any = typeof value === 'string' && rule.type === 'input' ? value.trim() : value;
            if (newValue !== value) {
                value = newValue;
                inject.$f.setValue(field, value);
                data[field] = value;
                this.changeForm(data);
            }
            // 字段关联
            const bType: string = rule.bType;
            if (!!value && !!bType) {
                this.changeRelate(bType, value);
            }
        }

        // 判断鼠标是否划过标题
        private hasLabel(path: any) {
            const className: string = 'el-form-item__label';
            for (const p of path) {
                if (p.className === className) {
                    return true;
                }
            }
            return false;
        }

        // 构建提示框
        private createTooltip() {
            let dom = document.getElementById('da-tooltip');
            if (!dom) {
                dom = document.createElement('div');
                dom.setAttribute('class', 'da-tooltip');
                dom.setAttribute('id', 'da-tooltip');
                // 采用cssText会整体替换掉dom.style内容
                dom.style.cssText = [
                    'position: absolute;',
                    'z-index: 100;',
                    'display: none;',
                    'background: rgba(50, 50, 50, 0.7);',
                    'border-radius: 0.2em;',
                    'padding: 5px;',
                    'white-space: nowrap;',
                ].join('');

                // 文本
                const lab = document.createElement('label');
                lab.style.cssText = [
                    'font-size: 15px;',
                    'color: rgb(238, 238, 238);',
                ].join('');
                dom.appendChild(lab);
                document.body.appendChild(dom);
            }
            this.tooltipDom = dom;
            this.onTooltip();
        }

        // 更新提示框
        private updateTooltip(visible: boolean, str?: string, x?: number, y?: number) {
            if (visible) {
                this.tooltipDom.style.display = 'block';
                this.tooltipDom.getElementsByTagName('label')[0].innerText = str;
                this.tooltipDom.style.left = x + 'px';
                this.tooltipDom.style.top = y + 'px';
            } else {
                this.tooltipDom.style.display = 'none';
            }
        }

        // 监听Tooltip
        private onTooltip() {
            const dom: any = this.$refs.dynamicTable;
            this.tooltipOverHandler = (event: any) => {
                const state: boolean = this.hasLabel(event.path);
                if (state) {
                    const str = event.path[0].innerText;
                    this.updateTooltip(true, str, event.clientX, event.clientY - 40);
                } else {
                    this.updateTooltip(false);
                }
            };
            this.tooltipLeaveHandler = () => {
                this.updateTooltip(false);
            };
            // mousemove
            dom.addEventListener('mouseover', this.tooltipOverHandler);
            dom.addEventListener('mouseleave', this.tooltipLeaveHandler);
        }


        // 定义一个深拷贝函数  接收目标target参数
        private deepClone(target: any) {
            // 定义一个变量
            let result: any;
            // 如果当前需要深拷贝的是一个对象的话
            if (typeof target === 'object') {
                // 如果是一个数组的话
                if (Array.isArray(target)) {
                    result = []; // 将result赋值为一个数组，并且执行遍历
                    for (const tar of target) {
                        // 递归克隆数组中的每一项
                        result.push(this.deepClone(tar));
                    }
                    // 判断如果当前的值是null的话；直接赋值为null
                } else if (target === null) {
                    result = null;
                    // 判断如果当前的值是一个RegExp对象的话，直接赋值
                } else if (target.constructor === RegExp) {
                    result = target;
                } else {
                    // 否则是普通对象，直接for in循环，递归赋值对象的所有值
                    result = {};
                    for (const i of Object.keys(target)) {
                        result[i] = this.deepClone(target[i]);
                    }
                }
                // 如果不是对象的话，就是基本数据类型，那么直接赋值
            } else {
                result = target;
            }
            // 返回最终结果
            return result;
        }
    }
</script>
<style lang="less">
   .dynamic-table{
      text-align: left;

      & .dynamic_form_item {
         .el-form-item__label {
            /* 单行居中，最多显示两行，超过两行文本溢出 */
            position: relative;
            padding-right: 16px;
            height: 40px;
            line-height: 15pt;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            & > span {
               word-break: break-all;
               text-overflow: ellipsis;
               overflow: hidden;
               display: -webkit-box;
               -webkit-box-orient: vertical;
               -webkit-box-align: end;
               -webkit-box-pack: center;
               -webkit-line-clamp: 2;
               line-height: 15pt;

               & > span {
                  position: absolute;
                  height: 100%;
                  top: 10px;
               }
            }
         }

         /*日期范围组件close icon样式*/
         .el-date-editor .el-range__close-icon {
            display: flex;
            justify-content: center;
            position: absolute;
            align-items: center;
            right: 5px;
         }

         /*下拉多选小标签文本样式*/
         .el-select__tags-text {
            font-size: 14px;
            color: #999999;
         }

         /*核查退回样式*/
         &.checkedFail .el-form-item__label {
            //background-color: #D90C0C;
            color: red;
         }

         & .el-form-item__content {
            margin-left: 152px;
            & > div {
               width: 100% !important;
            }
         }

      }

      & .__item--info {
         .__info--tooltip, .__info--popover {
            position: absolute;
            right: -20px;
         }

         .__info--tooltip {
            top: 30%;
         }
      }

      /*input输入字符长度提示*/
      & .el-textarea .el-input__count {
         color: #c0c4cc;
         line-height: normal;
         bottom: -17px;
         left: 5px;
      }

      /*
       * tabs切换布局样式修改
       **************************/
      & ._tabs {
         margin-bottom: 10px !important;
      }


      /*
       *table布局样式修改
       **************************/
      & ._table {
         & ._td {
            padding: 2px;
         }
      }
   }
</style>
