<template>
    <!-- :onPopupOpen="onPopupOpen" -->
    <ejs-schedule height='550px' width='100%' 
    :editorTemplate="'schedulerEditorTemplate'" 
    :onPopupOpen="onPopupOpen"
    :onPopupClose="onPopupClose" 
    :selectedDate='selectedDate' 
    :eventSettings='eventSettings'
    :eventClick='onEventClick'>

        <template template v-slot:schedulerEditorTemplate="{}">
            <AppointmentForm></AppointmentForm>
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
import { onMounted, provide } from "vue";
import { L10n, isNullOrUndefined } from '@syncfusion/ej2-base';
// import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
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
    }
)

const eventSettings = {

    dataSource: [{
      "from": "2023-06-11T10:00:00",
      "to": "2023-06-11T12:00:00",
      "host": 1059560,
      "dateTime": "2023-06-11T06:27:24.8461176",
      "status": 0,
      "checkIn": null,
      "checkOut": null,
      "studentId": 1059560,
      "roomId": null,
      "id": 6019
    },
    {
      "from": "2023-06-11T10:00:00",
      "to": "2023-06-11T12:00:00",
      "host": 1059560,
      "dateTime": "2023-06-11T06:43:00.9410103",
      "status": 0,
      "checkIn": null,
      "checkOut": null,
      "studentId": 1059560,
      "roomId": null,
      "id": 6020
    }],
    fields: {
        id: 'id',
        subject:  {name: 'host'} ,
        startTime:  {name: 'from'} ,
        endTime: {name:'to'}  
    }

}

L10n.load({
    'es-do': {
        'schedule': {
            'addTitle': 'Blue',
        }
    }
})

function onPopupClose(args) {
    if (args.data != isNullOrUndefined) {
        service.addAppointment(args.data)
        // console.log(args.data)
    }

    //  console.log(dataManager.value)
}

function onPopupOpen(args) {
console.log(args)
}

function onEventClick(args){
    console.log(args)
}


</script>