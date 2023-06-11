<template>
    <ejs-schedule 
    height='550px' 
    width='100%' 
    :editorTemplate="'schedulerEditorTemplate'" 
    :onPopupOpen="onPopupOpen"
    :onPopupClose="onPopupClose"
    :selectedDate='selectedDate' :eventSettings='eventSettings'>
        <template template v-slot:schedulerEditorTemplate="{}">
            <AppointmentForm ></AppointmentForm>
        </template>
        <e-views>
            <e-view option='Day'></e-view>
            <e-view option='Week' startHour='08:00' endHour='23:00'></e-view>
            <e-view option='WorkWeek' startHour='08:00' endHour='23:00'></e-view>
            <e-view option='Month' showWeekend=false></e-view>
            <e-view option='Agenda'></e-view>
        </e-views>

    </ejs-schedule>
</template>

<script setup>

import PostAppoiments from './services/PostAppoiments';
import AppointmentForm from "./AppointmentForm.vue";
import {  onMounted, provide } from "vue";
import { L10n, isNullOrUndefined } from '@syncfusion/ej2-base';
import {
    ScheduleComponent as EjsSchedule, ViewsDirective as EViews, ViewDirective as EView,
    ResourcesDirective as EResources, ResourceDirective as EResource,
    Day, Week, WorkWeek, Month, Agenda
} from "@syncfusion/ej2-vue-schedule";



provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);

let actual = new Date(Date.now())
const selectedDate = new Date(actual.getFullYear(), actual.getMonth(), actual.getDate());
const service = new PostAppoiments()
const appointments = service.Posts
onMounted(
    // p =>{
    //         return{
    //             id: p.id ,
    //             from:p.from ,
    //             to:p.to
    //         }
    //     }
    async () => {
        await service.fetchAll()
    })
const eventSettings = {
    
    dataSource: appointments.value.data,
    fields: {
        id: {name: 'id'},
        subject: {name: 'studentName'},
        startTime: { name: 'from' },
        endTime: { name: 'to' },
    }

}

L10n.load({
    'es-do': {
        'schedule': {
          'addTitle' : 'Blue'
        }
    }
})

function onPopupClose(args){
    if (args.data != isNullOrUndefined) {
        service.addAppointment(args.data)
        // console.log(args.data)
    }
    // console.log(appointments.value.data)
}

</script>