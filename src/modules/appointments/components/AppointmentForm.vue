<template>
    <table class="custom-event-editor" width="100%" cellpadding="5">
        <tbody>
            <tr>
                <td class="e-textlabel">Summary</td>
                <td colspan="4"><input id="Subject" class="e-field e-input" type="text" value="" name="Subject"
                        style="width: 100%" /></td>
            </tr>
            <tr>
                <!-- <td class="e-textlabel">Status</td> -->
                <td colspan="4">
                    <!-- <input type="text" id="EventType" name="EventType" class="e-field"
                        style="width: 100%" /> -->
                    <ejs-dropdownlist :dataSource="status" class="e-field" name="EventType" 
                    placeholder="Show Status">

                    </ejs-dropdownlist>
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">From</td>
                <td colspan="4">
                    <!-- <input id="StartTime" class="e-field" type="text" name="StartTime" /> -->
                    <ejs-datetimepicker  class="e-field" name="StartTime"></ejs-datetimepicker>
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">To</td>
                <td colspan="4">
                    <!-- <input id="EndTime" class="e-field" type="text" name="EndTime" /> -->
                    <ejs-datetimepicker  class="e-field" name="EndTime"></ejs-datetimepicker>
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">Reason</td>
                <td colspan="4">
                    <textarea id="Description" class="e-field e-input" name="Description" rows="3" cols="50"
                        style="width: 100%; height: 60px !important; resize: vertical"></textarea>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { DateTimePickerComponent  as EjsDatetimepicker, } from '@syncfusion/ej2-vue-calendars';

const status = ["New", "Requested", "Confirmed"];
    
</script>
