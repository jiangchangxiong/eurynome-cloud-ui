<template>
  <div class="q-gutter-y-md">
    <h-compliance-condition v-model:conditions="conditions"></h-compliance-condition>
    <h-table
      :rows="tableRows"
      :columns="columns"
      :row-key="rowKey"
      selection="single"
      v-model:selected="selected"
      v-model:pagination="pagination"
      v-model:pageNumber="pagination.page"
      :totalPages="totalPages"
      :loading="loading"
      status
      reserved
      @request="findItems">
      <template #top-left>
        <q-btn color="primary" label="导出Excel" @click="onExportExcel" />
      </template>
    </h-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import * as XLSX from 'xlsx';

import type {
  OAuth2ComplianceEntity,
  OAuth2ComplianceConditions,
  OAuth2ComplianceProps,
  QTableColumnProps
} from '/@/lib/declarations';

import { ComponentNameEnum } from '/@/lib/enums';
import { moment, api } from '/@/lib/utils';
import { useTable } from '/@/hooks';

import { HTable, HComplianceCondition } from '/@/components';

export default defineComponent({
  name: ComponentNameEnum.OAUTH2_COMPLIANCE,

  components: {
    HComplianceCondition,
    HTable
  },

  setup() {
    const { tableRows, totalPages, pagination, loading, conditions, findItems } = useTable<
      OAuth2ComplianceEntity,
      OAuth2ComplianceConditions
    >(api.oauth2Compliance(), ComponentNameEnum.OAUTH2_COMPLIANCE, false, {
      direction: 'DESC',
      properties: ['createTime']
    });

    const selected = ref([]);
    const rowKey: OAuth2ComplianceProps = 'complianceId';

    const dateFormat = (date: string) => {
      if (date) {
        return moment(date).format('YYYY-MM-DD HH:mm:ss');
      } else {
        return '';
      }
    };

    const columns: QTableColumnProps = [
      { name: 'principalName', field: 'principalName', align: 'center', label: '用户名' },
      { name: 'clientId', field: 'clientId', align: 'center', label: '客户端ID' },
      { name: 'ip', field: 'ip', align: 'center', label: 'IP地址' },

      {
        name: 'osName',
        field: 'osName',
        align: 'center',
        label: '操作系统'
      },
      {
        name: 'browserName',
        field: 'browserName',
        align: 'center',
        label: '浏览器'
      },
      {
        name: 'mobile',
        field: 'mobile',
        align: 'center',
        label: '移动端？'
      },
      {
        name: 'operation',
        field: 'operation',
        align: 'center',
        label: '操作'
      },
      {
        name: 'createTime',
        field: 'createTime',
        align: 'center',
        label: '时间',
        format: value => dateFormat(value)
      }
    ];

    const parseFields = () => {
      const fields = new Array<string>();
      columns.map(column => {
        fields.push(column.label);
      });
      return fields;
    };

    const postExport = (json: Array<OAuth2ComplianceEntity>, name: string, titles: Array<string>, fileName: string) => {
      var data = [];
      var keyArray = [];
      const getLength = function (obj: any) {
        var count = 0;
        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            count++;
          }
        }
        return count;
      };
      for (const key1 in json) {
        if (json.hasOwnProperty(key1)) {
          const element = json[key1];
          var rowDataArray = [];
          for (const key2 in element) {
            if (element.hasOwnProperty(key2)) {
              // @ts-ignore
              const element2 = element[key2];
              rowDataArray.push(element2);
              if (keyArray.length < getLength(element)) {
                keyArray.push(key2);
              }
            }
          }
          data.push(rowDataArray);
        }
      }
      // keyArray为英文字段表头
      data.splice(0, 0, keyArray, titles);
      console.log('data', data);
      const ws = XLSX.utils.aoa_to_sheet(data);
      const wb = XLSX.utils.book_new();
      // 此处隐藏英文字段表头
      var wsrows = [{ hidden: true }];
      ws['!rows'] = wsrows; // ws - worksheet
      XLSX.utils.book_append_sheet(wb, ws, fileName);
      /* generate file and send to client */
      XLSX.writeFile(wb, name + '.xlsx');
    };

    const titles = [
      '创建时间',
      '更新时间',
      '排序值',
      'ID',
      '用户名',
      'OAuth2 客户端ID',
      'IP地址',
      '是移动端 ?',
      '操作系统',
      '浏览器',
      '是移动端浏览器 ?',
      '浏览器引擎',
      '是移动端平台 ?',
      'Iphone Or Ipod ?',
      'Ipad ?',
      'IOS 操作系统 ?',
      'Android 操作系统?',
      '执行操作'
    ];

    const onExportExcel = () => {
      postExport(tableRows.value, '日志审计', titles, '日志审计');
    };

    return {
      rowKey,
      selected,
      pagination,
      columns,
      conditions,
      tableRows,
      totalPages,
      loading,
      findItems,
      onExportExcel
    };
  }
});
</script>
