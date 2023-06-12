<template>
    <table class="custom-event-editor" width="100%" cellpadding="5">
        <tbody>
                <tr>
                    <td class="e-textlabel">Summary</td>
                    <td colspan="4">
                        <input id="Subject" class="e-field e-input" type="text" value="" name="Subject"
                            style="width: 100%" />
                        </td>
                </tr>
            <tr>
                <td class="e-textlabel">Status</td>
                <td colspan="4">
                    <ejs-dropdownlist :dataSource="status" class="e-field" name="status" 
                    placeholder="Show Status" :fields="fields">
                    </ejs-dropdownlist>
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">From</td>
                <td colspan="4">
                    <ejs-datetimepicker :format="'yyyy-MM-dd HH:mm:ss'" class="e-field" name="startTime"></ejs-datetimepicker>
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">To</td>
                <td colspan="4">
                     <ejs-datetimepicker :format="'yyyy-MM-dd HH:mm:ss'"  class="e-field" name="endTime"></ejs-datetimepicker>
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">Reason</td>
                <td colspan="4">
                    <textarea  class="e-field e-input" name="description" rows="3" cols="50"
                        style="width: 100%; height: 60px !important; resize: vertical"></textarea>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { DateTimePickerComponent  as EjsDatetimepicker, } from '@syncfusion/ej2-vue-calendars';

// const dropdown = {
//     status : [{id:0,name:"New"}, {id:1,name:"Requested"}, {id:2,name:"Confirmed"}],
//     fields : {text:'name', value:id}
// }
const status = [
    {id:0,name:'New'}, 
    {id:1,name:'Requested'}, 
    {id:2,name:'Confirmed'}
];
const fields = {text:'name', value:'id'}



    
</script>
