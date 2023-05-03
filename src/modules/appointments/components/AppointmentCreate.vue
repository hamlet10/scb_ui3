<template>
    <ejs-schedule height='550px' width='100%' :editorTemplate="'schedulerEditorTemplate'" :popupOpen="onPopupOpen"
        :selectedDate='selectedDate' :eventSettings='eventSettings'>
        <template template v-slot:schedulerEditorTemplate="{}">
            <AppointmentForm :users="listUser"></AppointmentForm>
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

<script>
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective } from "@syncfusion/ej2-vue-schedule";
import AppointmentForm from "./AppointmentForm.vue";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { DateTimePickerComponent  } from "@syncfusion/ej2-vue-calendars";
export default {
    name: 'AppointmentCreate',
    components: {
        'ejs-schedule': ScheduleComponent,
        'e-views': ViewsDirective,
        'e-view': ViewDirective,
        'e-resources': ResourcesDirective,
        'e-resource': ResourceDirective,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-datetimepicker': DateTimePickerComponent ,
        AppointmentForm
    },
    data() {
        let actual = new Date(Date.now())
        return {
            selectedDate: new Date(actual.getFullYear(), actual.getMonth(), actual.getDate()),
            allowMultiple: true,
            ownerDataSource: [
                { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
                { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
                { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }],
            eventSettings: {
                dataSource: [
                    {
                        Id: 1,
                        Subject: 'SCB - Presentation',
                        EventType: 'Confirmed',
                        StartTime: new Date(2023, 3, 12, 18, 0),
                        EndTime: new Date(2023, 3, 12, 20, 0),
                        OwnerId: 2
                    },
                    {
                        Id: 2,
                        Subject: 'Consulting - John',
                        EventType: 'Confirmed',
                        StartTime: new Date(2021, 7, 11, 10, 0),
                        EndTime: new Date(2021, 7, 11, 11, 30),
                        OwnerId: 3
                    },
                    {
                        Id: 3,
                        Subject: 'Therapy - Robert',
                        EventType: 'Requested',
                        StartTime: new Date(2021, 7, 12, 11, 30),
                        EndTime: new Date(2021, 7, 12, 12, 30),
                        OwnerId: 1
                    }
                ]
            }
        };
    },
    methods: {
        onPopupOpen: function (args) {
            console.log(args)
            // if (args.type === "Editor") {
            //     let statusElement = args.element.querySelector("#EventType");
            //     if (!statusElement.classList.contains("e-dropdownlist")) {
            //         let dropDownListObject = new DropDownList({
            //             placeholder: "Choose status",
            //             value: statusElement.value,
            //             dataSource: ["New", "Requested", "Confirmed"]
            //         });
            //         dropDownListObject.appendTo(statusElement);
            //         statusElement.setAttribute("name", "EventType");
            //     }
            //     let startElement = args.element.querySelector("#StartTime");
            //     if (!startElement.classList.contains("e-datetimepicker")) {
            //         new DateTimePicker(
            //             { value: new Date(startElement.value) || new Date() },
            //             startElement
            //         );
            //     }
            //     let endElement = args.element.querySelector("#EndTime");
            //     if (!endElement.classList.contains("e-datetimepicker")) {
            //         new DateTimePicker(
            //             { value: new Date(endElement.value) || new Date() },
            //             endElement
            //         );
            //     }
            // }
        }
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda]
    }
}

</script>